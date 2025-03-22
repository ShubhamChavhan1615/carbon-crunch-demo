import { CheckIcon } from "@/assets/svg/CheckIcon";

export default function FeaturesSection() {
  const impactFeatures = [
    "Transportation tracking with automatic detection",
    "Smart home energy monitoring integration",
    "Monthly carbon impact reports with trends"
  ];

  return (
    <section id="features" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Track, Analyze, Improve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform helps you understand and reduce your carbon footprint 
            with powerful tools and actionable insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Your Emissions</h3>
            <p className="text-gray-600">
              Monitor your carbon emissions from travel, home energy use, food, and purchases in real-time.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Insights</h3>
            <p className="text-gray-600">
              Get actionable recommendations tailored to your lifestyle to help reduce your environmental impact.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Set & Achieve Goals</h3>
            <p className="text-gray-600">
              Create personal or team-based carbon reduction goals and track your progress over time.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600&h=450" 
                alt="Carbon footprint analyzer" 
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Understand Your Impact</h3>
              <p className="text-gray-600 mb-6">
                Our intuitive dashboard gives you a complete picture of your carbon footprint 
                broken down by category, making it easy to identify the biggest opportunities for improvement.
              </p>
              <ul className="space-y-3">
                {impactFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-[#0EA5E9] mt-0.5 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
