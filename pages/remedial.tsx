import Layout from '../components/Layout';
import Link from 'next/link';

export default function RemedialPage() {
  return (
    <Layout
      title="Remedial Building"
      description="Harbourside Painters offers comprehensive remedial building services, restoring and protecting structures across Sydney and the coastal region."
    >
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Remedial Building Services</h1>
          <p className="mb-6">
            As buildings age, exposure to the elements can cause concrete spalling, rusting reinforcement and water ingress. Our remedial specialists diagnose issues and implement long‑lasting solutions to protect your asset and restore its appearance.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our capabilities include:</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Concrete repair and spalling treatment:</strong> Repair cracked or damaged concrete structures using industry‑approved products and techniques.</li>
            <li><strong>Façade restoration:</strong> Replace cracked render, re‑coat facades and install protective membranes to prevent future deterioration.</li>
            <li><strong>Waterproofing:</strong> Identify and rectify leaks in balconies, podiums and roofs using advanced waterproofing systems.</li>
            <li><strong>Structural remediation:</strong> Strengthen and stabilise buildings affected by corrosion or movement.</li>
          </ul>
          <p className="mt-6">
            We work closely with engineers, strata managers and building owners to ensure compliance with Australian standards and deliver seamless results.
          </p>
          <Link href="/contact">
            <a className="inline-block mt-6 bg-secondary text-white px-6 py-3 rounded-md hover:bg-white hover:text-primary transition">
              Discuss Your Project
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}