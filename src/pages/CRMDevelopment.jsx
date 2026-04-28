import { motion } from 'framer-motion';
import { Users, BarChart3, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CRMDevelopment = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase mb-3">Service Detail</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Custom <span className="text-brand-600">CRM</span> Development
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Build lasting relationships with your customers through tailored CRM systems designed specifically for your sales pipeline and business logic.
            </p>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-600"
          >
            <p>
              Off-the-shelf Customer Relationship Management (CRM) tools often force you to adapt your business processes to their software. At ICCW, we build custom CRMs that adapt perfectly to how your team already works.
            </p>
            <p>
              Whether you need to track complex sales cycles, automate follow-up emails, or integrate deeply with your existing marketing tools, a custom CRM gives you total control over your data and workflows without expensive per-user licensing fees.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start">
                <Users className="w-6 h-6 text-brand-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-gray-900">360° Customer View:</strong> See every interaction, purchase, and support ticket in one unified dashboard.</span>
              </li>
              <li className="flex items-start">
                <Target className="w-6 h-6 text-brand-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-gray-900">Automated Workflows:</strong> Trigger tasks, emails, and notifications automatically as deals move through your pipeline.</span>
              </li>
              <li className="flex items-start">
                <BarChart3 className="w-6 h-6 text-brand-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-gray-900">Custom Reporting:</strong> Generate reports on the metrics that actually matter to your bottom line, not just generic dashboards.</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="aspect-video bg-brand-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-600 to-transparent"></div>
               <Users className="w-24 h-24 text-brand-600 relative z-10" />
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-brand-500/30 text-lg">
            Discuss Your CRM Project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CRMDevelopment;
