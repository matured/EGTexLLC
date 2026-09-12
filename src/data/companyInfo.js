// Single source of truth for company contact/credential details.
// Footer, Contact, and About all import from here so nothing drifts out of sync.
// NOTE: EIN is intentionally NOT included — publishing a business tax ID on a
// public marketing site is unusual and offers no benefit to visitors, unlike
// DOT/MC numbers, which are meant to be public and are commonly verified by
// shippers/brokers.

export const companyInfo = {
  name: 'EGTex Broker LLC',
  tagline: 'Family-Owned Freight Brokerage',
  address: {
    line1: '4028 Edgewater Terrace Ln',
    city: 'Waller',
    state: 'TX',
    zip: '77484',
  },
  ceo: {
    title: 'CEO',
    phone: '+1 (346) 732-0700',
    phoneHref: 'tel:+13467320700',
  },
  operationsManager: {
    title: 'Operations Manager',
    whatsapp: '(832) 260-6453',
    whatsappHref: 'https://wa.me/18322606453',
  },
  owner: {
    name: 'Esther',
    title: 'Owner',
    email: 'esther@egtexllc.com',
    emailHref: 'mailto:esther@egtexllc.com',
  },
  credentials: {
    dot: '3452825',
    mc: '1124616',
  },
};

export const fullAddress = `${companyInfo.address.line1}, ${companyInfo.address.city}, ${companyInfo.address.state} ${companyInfo.address.zip}`;
