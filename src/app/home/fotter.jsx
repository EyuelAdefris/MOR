"use client";

import { Facebook, Instagram, Send } from "lucide-react";

// ==========================
// Footer Data (Dynamic)
// ==========================
const footerData = {
  slogan: "Empowering Ethiopia's Future Through Fair Revenue Collection",
  links: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "FAQs", href: "/faqs" },
    { name: "Teams", href: "/teams" },
    { name: "Contact Us", href: "/contact" },
  ],
  partners: [
    { name: "Prim Minister Office", href: "#" },
    { name: "Institute Of Finance", href: "#" },
    { name: "Investment Commission", href: "#" },
  ],
  accountable: {
    title: "Customer Commission",
    desc: "Ensuring transparency, responsibility, and fair revenue practices.",
  },
  socials: [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Telegram", icon: Send, href: "https://t.me/" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  ],
  contact: {
    address: "Wisconsin Ave, Suite 700\nChevy Chase, Maryland 20815",
    email: "support@MoR.com",
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#286491] text-white py-10 p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + Slogan */}
        <div className="flex flex-col items-center text-center ">
          <img
            src="/logo.png"
            alt="Ministry of Revenue Logo"
            className="w-20 mb-3 bg-white rounded-full shadow-lg"
          />
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {footerData.slogan}
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            {footerData.links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Partners */}
        <div>
          <h3 className="font-semibold mb-3">Our Partners</h3>
          <ul className="space-y-2 text-sm">
            {footerData.partners.map((partner, i) => (
              <li key={i}>
                <a
                  href={partner.href}
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  {partner.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Accountable Institution */}
        <div>
          <h3 className="font-semibold mb-3">Accountable Institution</h3>
          <p className="text-sm mb-2">{footerData.accountable.title}</p>
          <p className="text-sm">{footerData.accountable.desc}</p>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="font-semibold mb-3">Follow us</h3>
          <div className="flex space-x-4 mb-5">
            {footerData.socials.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          <h3 className="font-semibold mb-2">Contact</h3>
          <div className="text-sm space-y-2">
            <p className="whitespace-pre-line">{footerData.contact.address}</p>
            <a
              href={`mailto:${footerData.contact.email}`}
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              {footerData.contact.email}
            </a>
          </div>

          <a
            href="/contact"
            className="inline-block mt-4 bg-[#c7a648] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#b8963e] transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center border-t border-white/20 pt-5 text-sm">
        © {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
}
