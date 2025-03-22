import Slider3D from "./Slider3D";
import PartnerLogo from "@/assets/svg/PartnerLogo";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6">
            Track & Reduce Your <span className="text-[#0EA5E9]">Carbon Footprint</span> Today
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of individuals and businesses committed to fighting climate change one step at a time.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white font-medium py-3 px-6 rounded-lg transition-all"
            >
              Get Started For Free
            </a>
            <a 
              href="#" 
              className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-medium py-3 px-6 rounded-lg transition-all"
            >
              Watch Demo
            </a>
          </div>
        </div>
        
        {/* 3D Slider Animation */}
        <Slider3D />
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="flex justify-center items-center">
              <PartnerLogo className="h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
