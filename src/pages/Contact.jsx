import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "../lib/emailjs";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setIsSubmittingContact(true);
    setContactStatus({ type: "", message: "" });

    const fullName = `${contactForm.firstName} ${contactForm.lastName}`.trim();

    try {
      await sendEmail("contact", {
        form_name: "Let's Talk About Your Project",
        user_name: fullName,
        first_name: contactForm.firstName,
        last_name: contactForm.lastName,
        user_email: contactForm.email,
        reply_to: contactForm.email,
        company_name: contactForm.company,
        message: contactForm.message,
      });

      setContactForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
      setContactStatus({
        type: "success",
        message: "Thanks! Your message has been sent successfully.",
      });
    } catch (error) {
      console.error("Contact form failed:", error);
      setContactStatus({
        type: "error",
        message:
          "Sorry, we could not send your message right now. Please try again.",
      });
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Let's Talk About Your Project
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Ready to streamline your business? Fill out the form below and our
            team will get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-brand-900 p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-800 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>

              <h3 className="text-2xl font-bold mb-8 relative z-10">
                Contact Information
              </h3>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-brand-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Office Location</h4>

                    <p className="text-brand-100 leading-relaxed">
                      D14/29, First Floor
                      <br />
                      Ardee City, Sector 52
                      <br />
                      Gurugram
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-brand-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-brand-100">+91 9665080749</p>
                    <p className="text-brand-100 text-sm mt-1">
                      Mon-Fri, 9am - 6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-brand-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-brand-100">info@iccwtech.com</p>
                    <p className="text-brand-100">support@iccw.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 p-10 md:p-16">
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={contactForm.firstName}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={contactForm.lastName}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={contactForm.company}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                {contactStatus.message && (
                  <p
                    className={`rounded-xl px-4 py-3 text-sm font-medium ${
                      contactStatus.type === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                    role="status"
                  >
                    {contactStatus.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmittingContact}
                  className="w-full bg-brand-600 hover:bg-brand-700 disabled:bg-brand-300 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg flex justify-center items-center"
                >
                  {isSubmittingContact ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
