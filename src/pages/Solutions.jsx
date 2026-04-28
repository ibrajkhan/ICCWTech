import { motion } from 'framer-motion';
import { Building2, Stethoscope, GraduationCap, ShoppingCart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const industries = [
    {
      id: 1,
      title: "Healthcare",
      icon: <Stethoscope className="w-8 h-8 text-white" />,
      color: "bg-blue-500",
      description: "Secure, HIPAA-compliant clinic and hospital management systems to digitize patient records and streamline billing.",
      features: ["Electronic Health Records (EHR)", "Automated Appointment Scheduling", "Integrated Billing & Claims", "Telehealth Support"]
    },
    {
      id: 2,
      title: "Education",
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      color: "bg-brand-600",
      description: "Comprehensive school and university management software to connect teachers, students, and parents effortlessly.",
      features: ["Student Information System", "Online Exams & Grading", "Attendance Tracking", "Parent-Teacher Portals"]
    },
    {
      id: 3,
      title: "Retail & E-commerce",
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      color: "bg-indigo-500",
      description: "Omnichannel retail solutions that connect your storefronts with powerful inventory and supply chain management.",
      features: ["Real-time Inventory Sync", "POS System Integration", "Customer Loyalty Programs", "Advanced Sales Analytics"]
    },
    {
      id: 4,
      title: "Enterprise Corporate",
      icon: <Building2 className="w-8 h-8 text-white" />,
      color: "bg-purple-600",
      description: "Custom ERP and HR solutions tailored to large organizations requiring robust workflows and deep data analytics.",
      features: ["Custom ERP Development", "Advanced HRMS Workflows", "Corporate Performance Management", "High-level Data Security"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase mb-3">Industries We Serve</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Industry <span className="text-brand-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how ICCW transforms businesses across different sectors with custom-built, highly scalable technology.
            </p>
          </motion.div>
        </div>

        {/* Solutions List */}
        <div className="space-y-16">
          {industries.map((industry, index) => (
            <motion.div 
              key={industry.id}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {/* Abstract Graphic representing the industry */}
              <div className="w-full lg:w-5/12 aspect-video bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#CBD5E1 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
                <div className={`w-24 h-24 rounded-3xl ${industry.color} shadow-2xl flex items-center justify-center z-10 transform rotate-3 hover:rotate-6 transition-transform duration-300`}>
                  {industry.icon}
                </div>
                {/* Decorative circles */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${industry.color} opacity-20 blur-2xl`}></div>
                <div className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full ${industry.color} opacity-20 blur-2xl`}></div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-7/12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="inline-flex items-center text-brand-600 font-bold hover:text-brand-800 transition-colors bg-brand-50 hover:bg-brand-100 px-6 py-3 rounded-xl">
                  Discuss your {industry.title.toLowerCase()} project <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Solutions;
