import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SchoolManagement = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase mb-3">Service Detail</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              School <span className="text-brand-600">Management</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Digitally transform educational institutions with platforms connecting administration, teachers, students, and parents seamlessly.
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
              Managing a modern educational institution requires tracking everything from attendance and grades to fee collections and parent communications. Manual processes lead to errors and frustrated staff.
            </p>
            <p>
              Our comprehensive School Management System provides dedicated portals for every stakeholder, ensuring transparency, efficiency, and a better educational environment.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start">
                <BookOpen className="w-6 h-6 text-brand-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-gray-900">Academic Tracking:</strong> Manage curriculum planning, assignments, online examinations, and automated report card generation.</span>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-brand-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-gray-900">Parent & Student Portals:</strong> Keep parents informed with real-time updates on attendance, behavior, and academic progress.</span>
              </li>
              <li className="flex items-start">
                <GraduationCap className="w-6 h-6 text-brand-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-gray-900">Administrative Efficiency:</strong> Automate fee collection, payroll for staff, inventory for libraries, and transport management.</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 lg:order-first"
          >
            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500 to-transparent"></div>
               <GraduationCap className="w-24 h-24 text-amber-600 relative z-10" />
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-brand-500/30 text-lg">
            Consult on EdTech Solutions <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchoolManagement;
