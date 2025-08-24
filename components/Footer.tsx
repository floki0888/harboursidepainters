import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-white py-8 mt-16">
      <div className="container mx-auto text-center space-y-2 px-4">
        <div className="flex justify-center mb-4">
          <Image src="/images/logo.png" alt="Harbourside Painters Logo" width={64} height={64} />
        </div>
        <p className="font-semibold text-lg">Harbourside Painters</p>
        <p>
          Providing premium painting, remedial building, rope access and washing services across
          Sydney, Newcastle and Wollongong.
        </p>
        <p>Email: <a href="mailto:info@harboursidepainters.com.au" className="underline">info@harboursidepainters.com.au</a></p>
        <p>ABN: 65 686 620 075</p>
        <p>© {year} Harbourside Painters. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;