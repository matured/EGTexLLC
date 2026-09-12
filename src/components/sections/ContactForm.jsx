import { useRef, useState } from 'react';
import { Button } from '../ui/Button';
import { services } from '../../data/services';
import styles from './ContactForm.module.css';

const FORMSPREE_FORM_ID = 'mnpqbwbk';
const FORMSPREE_CONFIGURED = FORMSPREE_FORM_ID !== 'YOUR_FORM_ID';

const initialState = { name: '', email: '', phone: '', service: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const fieldRefs = { name: nameRef, email: emailRef, message: messageRef };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!EMAIL_PATTERN.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim()) nextErrors.message = 'Please enter a message.';
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalidField = ['name', 'email', 'message'].find((field) => nextErrors[field]);
      fieldRefs[firstInvalidField]?.current?.focus();
      return;
    }

    if (!FORMSPREE_CONFIGURED) {
      setStatus('unconfigured');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.target),
      });

      if (response.ok) {
        setStatus('success');
        setValues(initialState);
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <p className={styles.reassurance}>Takes less than 2 minutes.</p>

      <div className={styles.field}>
        <label htmlFor="name">Full Name</label>
        <input
          ref={nameRef}
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby={errors.name ? 'name-error' : undefined}
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && (
          <span id="name-error" className={styles.error}>
            {errors.name}
          </span>
        )}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            spellCheck={false}
            required
            aria-required="true"
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'email-error' : undefined}
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span id="email-error" className={styles.error}>
              {errors.email}
            </span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="service">Service Interested In</label>
        <select id="service" name="service" value={values.service} onChange={handleChange}>
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          ref={messageRef}
          id="message"
          name="message"
          rows={4}
          required
          aria-required="true"
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'message-error' : undefined}
          value={values.message}
          onChange={handleChange}
        />
        {errors.message && (
          <span id="message-error" className={styles.error}>
            {errors.message}
          </span>
        )}
      </div>

      <Button as="button" type="submit" variant="primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>

      <div aria-live="polite" className={styles.status}>
        {status === 'success' &&
          'You’re all set. We’ve got your message, and a real person will reach out shortly.'}
        {status === 'error' && 'Something went wrong sending your message. Please call or WhatsApp us instead.'}
        {status === 'unconfigured' &&
          'This form is not yet connected to an inbox. Please call or WhatsApp us directly for now.'}
      </div>
    </form>
  );
}
