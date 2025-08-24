import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Harbourside Painters – premium painting, remedial and rope access services in Sydney, Newcastle and Wollongong."
    >
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px]">
        <Image
          src="/images/hero.png"
          alt="Modern coastal home"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Elevate Your Property
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Premium painting, remedial and rope access services tailored for luxury homes and commercial buildings across Sydney’s Northern Beaches and beyond.
          </p>
          <div className="mt-6 space-x-4">
            <Link href="/contact">
              <a className="inline-block bg-secondary text-white px-6 py-3 rounded-md hover:bg-primary transition">
                Get a Quote
              </a>
            </Link>
            <Link href="/painting">
              <a className="inline-block bg-white text-primary px-6 py-3 rounded-md hover:bg-gray-100 transition">
                Our Services
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Painting Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-primary mb-2">Painting</h3>
              <p className="mb-4">From heritage residences to modern commercial spaces, our team delivers flawless interior and exterior finishes using premium materials and meticulous craftsmanship.</p>
              <Link href="/painting">
                <a className="text-secondary font-medium hover:underline">Learn more →</a>
              </Link>
            </div>
            {/* Remedial Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-primary mb-2">Remedial Building</h3>
              <p className="mb-4">We restore and protect your property with structural repairs, concrete remediation and façade rejuvenation to enhance longevity and value.</p>
              <Link href="/remedial">
                <a className="text-secondary font-medium hover:underline">Learn more →</a>
              </Link>
            </div>
            {/* Washing & Rope Access Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-primary mb-2">Washing & Rope Access</h3>
              <p className="mb-4">Our rope-access crews and soft-wash experts keep high‑rise buildings, strata complexes and coastal homes sparkling clean and compliant.</p>
              <Link href="/washing">
                <a className="text-secondary font-medium hover:underline">Learn more →</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rope Access Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-10">
          <div className="md:w-1/2">
            <Image
              src="/images/rope.png"
              alt="Rope access painters"
              width={600}
              height={800}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-primary mb-4">Specialist Rope Access Painting</h2>
            <p className="mb-4">
              Difficult access? Our certified rope-access crews are equipped to complete high‑rise painting and maintenance safely and efficiently, reducing disruption and providing cost‑effective solutions for strata and commercial buildings.
            </p>
            <Link href="/rope-access">
              <a className="inline-block bg-secondary text-white px-6 py-3 rounded-md hover:bg-primary transition">Discover Rope Access</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}