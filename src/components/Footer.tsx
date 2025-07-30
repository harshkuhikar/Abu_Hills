import "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Phone, Mail, MapPin, Calendar, FileText } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { name: "Home", path: "/" },
      { name: "About Abu Hills", path: "/about" },
      { name: "Amenities", path: "/amenities" },
      { name: "Gallery", path: "/gallery" },
      { name: "Floor Plans", path: "/floor-plans" },
    ],
    Services: [
      { name: "Schedule Visit", path: "/contact" },
      { name: "Property Details", path: "/about" },
      { name: "Location Map", path: "/contact" },
      { name: "Brochure Download", path: "#" },
    ],
    "Contact Info": [
      { name: "+91-93275-860-40", icon: Phone, href: "tel:+919327586040" },
      { name: "+91-93274-452-76", icon: Phone, href: "tel:+919327445276" },
      {
        name: "info@abuhills.com",
        icon: Mail,
        href: "mailto:info@abuhills.com",
      },
      { name: "Weekend Villas Location", icon: MapPin },
    ],
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-amber-600 to-orange-600 p-2 rounded-lg"
              >
                <Home className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold text-white">Abu Hills</span>
            </Link>
            <p className="text-stone-400 mb-6 max-w-sm">
              Perfectly situated luxury weekend villas where contemporary
              lifestyle meets serene natural living.
            </p>
            <div className="space-y-2">
              <p className="text-stone-400 text-sm">Vinayak Realty</p>
              <p className="text-stone-500 text-xs">(A Dream Well Designed)</p>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {title === "Contact Info" ? (
                      <div className="flex items-center space-x-2">
                        {link.icon && <link.icon className="h-4 w-4" />}
                        {link.href ? (
                          <a
                            href={link.href}
                            className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        ) : (
                          <span className="text-stone-400">{link.name}</span>
                        )}
                      </div>
                    ) : // Type guard for 'path' property
                    "path" in link ? (
                      <Link
                        to={link.path}
                        className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <span className="text-stone-400">{link.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ready to Visit?</h3>
            <p className="text-stone-400 mb-4 text-sm">
              Schedule your visit to experience the luxury weekend villa
              lifestyle.
            </p>
            <div className="space-y-3">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Schedule Visit</span>
                </motion.button>
              </Link>
              <a
                href="#"
                className="w-full bg-stone-800 text-stone-300 px-4 py-2 rounded-lg hover:bg-stone-700 transition-colors duration-200 flex items-center justify-center space-x-2 btn-primary"
              >
                <FileText className="h-4 w-4" />
                <span>Download Brochure</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm">
            © 2024 Abu Hills. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p className="text-stone-500 text-xs">
              Powered by RareSmart Technosys
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
