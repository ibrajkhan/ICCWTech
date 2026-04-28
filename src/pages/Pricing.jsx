import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '$99',
      desc: 'Perfect for small teams and startups looking to digitize their operations.',
      features: ['Up to 5 Users', 'Basic CRM Features', 'Email Support', 'Standard Analytics', '1GB Storage'],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$299',
      desc: 'Ideal for growing businesses needing comprehensive management tools.',
      features: ['Up to 20 Users', 'Advanced CRM & HR', 'Priority Support', 'Custom Reports', '10GB Storage', 'API Access'],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'Bespoke solutions and dedicated infrastructure for large organizations.',
      features: ['Unlimited Users', 'All Software Modules', '24/7 Phone Support', 'White-labeling', 'Unlimited Storage', 'Dedicated Account Manager'],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Choose the plan that fits your business needs. No hidden fees.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`rounded-3xl p-8 shadow-xl border ${tier.highlighted ? 'bg-brand-900 text-white border-brand-800 md:-mt-8 md:mb-8 md:py-12 relative' : 'bg-white text-gray-900 border-gray-100'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-brand-400 to-blue-400 text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>{tier.name}</h3>
              <p className={`text-sm mb-6 ${tier.highlighted ? 'text-brand-200' : 'text-gray-500'}`}>{tier.desc}</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold">{tier.price}</span>
                {tier.price !== 'Custom' && <span className={`text-lg ${tier.highlighted ? 'text-brand-200' : 'text-gray-500'}`}>/mo</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.highlighted ? 'text-brand-400' : 'text-brand-600'}`} />
                    <span className={tier.highlighted ? 'text-gray-200' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`block w-full py-4 px-6 rounded-xl text-center font-bold transition-all ${tier.highlighted ? 'bg-brand-500 hover:bg-brand-400 text-white shadow-lg shadow-brand-500/30' : 'bg-brand-50 hover:bg-brand-100 text-brand-700'}`}>
                {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Pricing;
