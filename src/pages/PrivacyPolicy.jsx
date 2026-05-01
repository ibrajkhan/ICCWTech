import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-brand max-w-none text-gray-600 space-y-6">
            <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong></p>
            
            <p>
              At ICCW Tech, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and company details provided when you contact us or request a demo.</li>
              <li><strong>Usage Data:</strong> Information on how you interact with our website, including IP address, browser type, and pages visited, collected via cookies and analytics tools.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
            <p>The information we collect is used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our software services.</li>
              <li>Improve, personalize, and expand our website and offerings.</li>
              <li>Understand and analyze how you use our website.</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide updates and other information.</li>
              <li>Send you emails and newsletters (if opted-in).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Data Security</h2>
            <p>
              We prioritize enterprise-grade security. We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Contact Us</h2>
            <p>
              If there are any questions regarding this privacy policy, you may contact us using the information below:
            </p>
            <p>
              <strong>ICCW Tech</strong><br />
              D14/29, First Floor Ardee City, Sector 52 Gurugram<br />
              Email: info@iccwtech.com<br />
              Phone: +91 9665080749
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
