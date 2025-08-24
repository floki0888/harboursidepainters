import Image from 'next/image';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function RopeAccessPage() {
  return (
    <Layout
      title="Rope Access"
      description="Harbourside Painters offers specialist rope access painting and maintenance for high-rise and difficult-to-reach structures."
    >
      <section className="relative w-full h-72 md:h-96">
        <Image
          src="/images/rope.png"
          alt="Rope access painters"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Rope Access</h1>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="mb-6 text-lg">
            When scaffold hire or boom lifts are impractical or cost‑prohibitive, our Industrial Rope Access teams provide a safe and efficient alternative. With extensive training and certifications, we are able to complete painting, remedial and maintenance tasks on high‑rise façades, towers and bridges while minimising disruption to residents and businesses.
          </p>
          <h2 className="text-2xl font-semibold text-primary mb-4">Why choose rope access?</h2>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Reduced costs:</strong> Eliminates expensive scaffold hire and reduces project timeframes.</li>
            <li><strong>Minimal disruption:</strong> Works can continue while buildings remain occupied, with minimal impact on tenants and traffic.</li>
            <li><strong>Versatility:</strong> Access hard‑to‑reach areas on high‑rise buildings, towers and industrial structures.</li>
            <li><strong>Safety first:</strong> Our technicians are IRATA trained and adhere to the strictest safety standards.</li>
          </ul>
          <p className="mb-6">
            Rope access painting is ideal for multi‑storey residential towers, heritage structures, hotels and office buildings where aesthetics and integrity are paramount.
          </p>
          <Link href="/contact">
            <a className="inline-block bg-secondary text-white px-6 py-3 rounded-md hover:bg-primary transition">Book a Consultation</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}