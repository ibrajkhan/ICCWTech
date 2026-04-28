import { motion } from 'framer-motion';
import { HeartPulse, CalendarCheck, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthcareManagement = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase mb-3">Service Detail</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Healthcare <span className="text-brand-600">Management</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Modernize your medical practice with secure, HIPAA-compliant software for patient records, appointments, and billing.
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
              Healthcare providers face unique challenges balancing patient care with strict compliance regulations and complex administrative tasks.
            </p>
            <p>
              Our custom healthcare management solutions streamline operations for clinics and hospitals, allowing medical professionals to focus on what matters most: their patients.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start">
                <HeartPulse className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-gray-900">Electronic Health Records (EHR):</strong> Intuitive, searchable, and fully secure digital patient histories accessible instantly.</span>
              </li>
              <li className="flex items-start">
                <CalendarCheck className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-gray-900">Smart Scheduling:</strong> Reduce no-shows with automated SMS reminders and let patients book appointments online.</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-gray-900">HIPAA Compliant & Secure:</strong> Built from the ground up with strict data privacy protocols and encryption standards.</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent"></div>
               <HeartPulse className="w-24 h-24 text-blue-600 relative z-10" />
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-brand-500/30 text-lg">
            Discuss Healthcare Solutions <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthcareManagement;
