import { motion } from 'framer-motion';
import { Database, Calendar, HeartPulse, Users, Briefcase, GraduationCap, Receipt, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { id: 1, title: 'CRM Development', icon: <Users className="w-8 h-8" />, desc: 'Custom Customer Relationship Management systems tailored to your sales processes to boost conversions and retention.', link: '/services/crm-development' },
    { id: 2, title: 'Event Management', icon: <Calendar className="w-8 h-8" />, desc: 'Comprehensive platforms to plan, execute, and analyze events of any scale with ticketing and registration.', link: '/contact' },
    { id: 3, title: 'Healthcare Management', icon: <HeartPulse className="w-8 h-8" />, desc: 'HIPAA-compliant software for clinics and hospitals managing patient records, appointments, and billing.', link: '/services/healthcare-management' },
    { id: 4, title: 'HR Software', icon: <Briefcase className="w-8 h-8" />, desc: 'Streamline onboarding, payroll, performance tracking, and employee engagement with our HRMS solutions.', link: '/contact' },
    { id: 5, title: 'ERP Systems', icon: <Database className="w-8 h-8" />, desc: 'Enterprise Resource Planning software integrating all your business processes into one unified system.', link: '/services/erp-systems' },
    { id: 6, title: 'School Management', icon: <GraduationCap className="w-8 h-8" />, desc: 'Digital solutions for educational institutions to manage admissions, attendance, grading, and parent communication.', link: '/services/school-management' },
    { id: 7, title: 'Billing Software', icon: <Receipt className="w-8 h-8" />, desc: 'Automated invoicing, payment processing, and financial reporting tools to keep your cash flow healthy.', link: '/contact' },
    { id: 8, title: 'Inventory Systems', icon: <LayoutGrid className="w-8 h-8" />, desc: 'Real-time stock tracking, automated reordering, and supply chain management solutions.', link: '/contact' },
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
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase mb-3">Our Services</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Custom Software Tailored to Your Needs
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We build scalable, secure, and user-friendly applications that automate processes and drive business growth.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <Link to={service.link || '/contact'} className="text-brand-600 font-semibold hover:text-brand-800 flex items-center transition-colors">
                Learn more <span className="ml-1 text-lg group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="bg-brand-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-700 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-800 rounded-full blur-3xl opacity-50 -ml-32 -mb-32"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Need a custom solution not listed here?</h2>
          <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Our engineering team specializes in building bespoke software from the ground up. Let's discuss your unique requirements.
          </p>
          <Link to="/contact" className="inline-block bg-white text-brand-900 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg relative z-10">
            Book a Free Consultation
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;
