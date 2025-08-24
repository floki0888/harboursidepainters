import { useEffect } from 'react';
import Layout from '../components/Layout';

export default function ContactPage() {
  useEffect(() => {
    // Dynamically inject HubSpot script and create form once on client side
    const script = document.createElement('script');
    script.src = '//js-ap1.hsforms.net/forms/embed/v2.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          portalId: '20153135',
          formId: '3d7a3b32-f26e-4c5f-928b-0b230e572a9f',
          region: 'ap1',
          target: '#hubspotForm',
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <Layout
      title="Contact"
      description="Get in touch with Harbourside Painters to discuss your painting, remedial or rope access project."
    >
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-primary mb-4">Get in Touch</h1>
          <p className="mb-6 text-lg">
            We'd love to hear about your project. Fill out the form below and our team will be in
            contact shortly to arrange an onsite consultation.
          </p>
          <div id="hubspotForm"></div>
          <div className="mt-8 space-y-2">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@harboursidepainters.com.au" className="text-secondary underline">info@harboursidepainters.com.au</a>
            </p>
            <p>
              <strong>Service area:</strong> Sydney, Newcastle and Wollongong
            </p>
            <p>
              <strong>ABN:</strong> 65 686 620 075
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}