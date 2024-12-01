import Link from "next/link";
import { Instagram, Mail, Phone, ShoppingBag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.instagram.com/your-username" // Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.meesho.com/your-shop" // Replace with your Meesho URL
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:your-email@example.com" className="hover:text-primary transition-colors">
                your-email@example.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                +1234567890
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 