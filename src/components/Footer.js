// components/Footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-around items-center ">
        <p>&copy; 2024 Your Website</p>
        <nav>
          <ul className="flex">
            <li className="mr-4">
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li className="mr-4">
              <Link href="#" className="text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
