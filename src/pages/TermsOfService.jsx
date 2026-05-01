import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-brand max-w-none text-gray-600 space-y-6">
            <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong></p>

            <p>
              Welcome to ICCW Tech. Please read these Terms of Service ("Terms") carefully before using the ICCW Tech website and services operated by us.
            </p>
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Enterprise Services</h2>
            <p>
              ICCW Tech provides custom software development, CRM systems, ERP systems, and other SaaS solutions. Specific deliverables, timelines, and costs for custom software will be governed by a separate Master Services Agreement (MSA) or Statement of Work (SOW) signed by both parties.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of ICCW Tech and its licensors. The Service is protected by copyright, trademark, and other laws. Unless explicitly transferred in a signed SOW, all source code and IP developed by ICCW Tech remains the property of ICCW Tech.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Links To Other Web Sites</h2>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by ICCW Tech. ICCW Tech has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Limitation Of Liability</h2>
            <p>
              In no event shall ICCW Tech, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
