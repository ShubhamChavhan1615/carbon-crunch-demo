import LogoIcon from "@/assets/svg/LogoIcon";
import { SocialIcon } from "@/assets/svg/SocialIcons";

export default function Footer() {
  const footerLinks = {
    product: ["Features", "How It Works", "Pricing", "FAQ"],
    company: ["About Us", "Careers", "Blog", "Press"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Data Processing"]
  };

  return (
    <footer className="bg-[#111827] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="flex items-center mb-4">
              <LogoIcon className="h-8 w-8 text-[#0EA5E9]" />
              <span className="ml-2 text-xl font-bold">Carbon Crunch</span>
            </a>
            <p className="text-gray-400 mb-4">
              Helping individuals and businesses reduce their carbon footprint and fight climate change.
            </p>
            <div className="flex space-x-4">
              <SocialIcon type="twitter" className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              <SocialIcon type="facebook" className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              <SocialIcon type="instagram" className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              <SocialIcon type="linkedin" className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2023 Carbon Crunch. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
