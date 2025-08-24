import Image from 'next/image';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function PaintingPage() {
  return (
    <Layout
      title="Painting Services"
      description="Harbourside Painters provides high-end residential and commercial painting services across Sydney’s Northern Beaches, Newcastle and Wollongong."
    >
      <section className="relative w-full h-72 md:h-96">
        <Image src="/images/interior.png" alt="Interior painting" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Painting Services</h1>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="mb-6 text-lg">
            Harbourside Painters delivers exceptional painting services to discerning homeowners, strata managers and commercial property owners. Our skilled team uses premium paints and meticulous preparation techniques to ensure a flawless finish every time.
          </p>
          <h2 className="text-2xl font-bold text-primary mb-4">What we offer</h2>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Residential interiors and exteriors:</strong> Transform your living spaces with fresh, contemporary colours and finishes that stand the test of time.</li>
            <li><strong>Commercial and strata painting:</strong> From office fit-outs to strata complexes, we tailor our approach to minimise disruption and maximise longevity.</li>
            <li><strong>Heritage and specialist finishes:</strong> Restore character properties with heritage‑sensitive techniques, including limewashing, French washing and textured finishes.</li>
            <li><strong>Colour consultation:</strong> Our colour consultants work with you to select palettes that complement your architecture and personal style.</li>
          </ul>
          <p className="mb-6">Every project begins with detailed surface preparation, including cleaning, sanding and repairs. We protect your furnishings and landscaping, and maintain a tidy, respectful jobsite.</p>
          <Link href="/contact">
            <a className="inline-block bg-secondary text-white px-6 py-3 rounded-md hover:bg-primary transition">Request a Quote</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}