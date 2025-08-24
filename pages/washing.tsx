import Layout from '../components/Layout';
import Link from 'next/link';

export default function WashingPage() {
  return (
    <Layout
      title="Building Washing"
      description="Harbourside Painters provides professional washing services for buildings and homes, keeping them looking pristine and protecting surfaces from damage."
    >
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-4">Building Washing Services</h1>
          <p className="mb-6 text-lg">
            The coastal climate can take its toll on exterior surfaces, causing salt build‑up, mould and grime. Our washing specialists use soft‑wash and high‑pressure cleaning techniques to revitalise your property while safeguarding paintwork and substrates.
          </p>
          <h2 className="text-2xl font-semibold text-primary mb-4">What we clean</h2>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Residential façades and roofs:</strong> Remove dirt, mould and oxidation from walls, roofs and eaves without damaging surfaces.</li>
            <li><strong>Commercial & strata buildings:</strong> Maintain a professional appearance for office buildings, retail premises and multi‑storey complexes.</li>
            <li><strong>Decks, fences and driveways:</strong> Restore timber, composite and paved surfaces to their original beauty.</li>
            <li><strong>Pre‑paint preparation:</strong> Wash and treat surfaces prior to painting to ensure optimal adhesion and longevity.</li>
          </ul>
          <p className="mb-6">
            Our team utilises environmentally friendly detergents and collects wastewater wherever possible to minimise impact on surrounding landscapes and waterways.
          </p>
          <Link href="/contact">
            <a className="inline-block bg-secondary text-white px-6 py-3 rounded-md hover:bg-primary transition">Get a Free Quote</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}