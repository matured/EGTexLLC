import { useState } from 'react';
import { Button } from '../ui/Button';
import { services } from '../../data/services';
import styles from './ContactForm.module.css';

// TODO: Replace with your real Formspree form ID once you create a free
// account at https://formspree.io — go to "New Form", copy the ID from the
// endpoint it gives you (https://formspree.io/f/XXXXXXXX), and paste it here.
const FORMSPREE_FORM_ID = 'YOUR_FORM_ID';
const FORMSPREE_CONFIGURED = FORMSPREE_FORM_ID !== 'YOUR_FORM_ID';

const initialState = { name: '', email: '', phone: '', service: '', message: '' };

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-required="true"
          value={values.name}
          onChange={handleChange}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} />
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
          id="message"
          name="message"
          rows={4}
          required
          aria-required="true"
          value={values.message}
          onChange={handleChange}
        />
      </div>

      <Button as="button" type="submit" variant="primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>

      <div aria-live="polite" className={styles.status}>
        {status === 'success' && 'Thanks! Your message has been sent — we will be in touch soon.'}
        {status === 'error' && 'Something went wrong sending your message. Please call or WhatsApp us instead.'}
        {status === 'unconfigured' &&
          'This form is not yet connected to an inbox. Please call or WhatsApp us directly for now.'}
      </div>
    </form>
  );
}
