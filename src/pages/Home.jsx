import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BarChart,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen pt-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-50 blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-50 blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <motion.div
              className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 text-brand-700 font-medium text-sm mb-6 border border-brand-100">
                <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2"></span>
                Next-Gen SaaS Solutions
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                Scale Your Business With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400">
                  Custom Software
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                ICCW Tech provides enterprise-grade CRM, ERP, and bespoke
                software solutions designed to automate workflows and accelerate
                your growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-brand-500/30 flex items-center justify-center"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center justify-center"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Abstract Hero Image/Dashboard Mockup */}
              <div className="relative rounded-2xl bg-[#0f172a] shadow-2xl border border-gray-800 overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
                {/* Mac OS Window Controls */}
                <div className="absolute top-0 left-0 w-full h-10 bg-[#1e293b] border-b border-gray-800 flex items-center px-4 space-x-2 z-20">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 text-center text-xs text-gray-400 font-mono tracking-wider">
                    dashboard.tsx
                  </div>
                </div>

                {/* Mockup Content */}
                <div className="pt-10 flex h-[380px]">
                  {/* Sidebar */}
                  <div className="w-16 border-r border-gray-800 bg-[#0f172a] flex flex-col items-center py-4 space-y-6">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">IC</span>
                    </div>
                    <div className="w-6 h-6 rounded bg-gray-800/80"></div>
                    <div className="w-6 h-6 rounded bg-gray-800/80"></div>
                    <div className="w-6 h-6 rounded bg-gray-800/80"></div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 flex flex-col bg-[#020617] relative">
                    {/* Fake Code Background Overlay */}
                    <div className="absolute inset-0 opacity-40 p-6 font-mono text-xs sm:text-sm text-gray-500 overflow-hidden">
                      <p>
                        <span className="text-pink-500">import</span>{" "}
                        {"{ useState, useEffect }"}{" "}
                        <span className="text-pink-500">from</span>{" "}
                        <span className="text-green-400">'react'</span>;
                      </p>
                      <p>
                        <span className="text-pink-500">import</span>{" "}
                        {"{ LineChart }"}{" "}
                        <span className="text-pink-500">from</span>{" "}
                        <span className="text-green-400">'@iccw/charts'</span>;
                      </p>
                      <br />
                      <p>
                        <span className="text-pink-500">
                          export default function
                        </span>{" "}
                        <span className="text-blue-400">Analytics</span>() {"{"}
                      </p>
                      <p className="ml-4">
                        <span className="text-pink-500">const</span> [data,
                        setData] ={" "}
                        <span className="text-blue-400">useState</span>([]);
                      </p>
                      <br />
                      <p className="ml-4">
                        <span className="text-blue-400">useEffect</span>(()
                        =&gt; {"{"}
                      </p>
                      <p className="ml-8">
                        <span className="text-blue-400">fetchData</span>().
                        <span className="text-blue-400">then</span>(setData);
                      </p>
                      <p className="ml-4">{"}"}, []);</p>
                      <br />
                      <p className="ml-4">
                        <span className="text-pink-500">return</span> (
                      </p>
                      <p className="ml-8 text-indigo-300">
                        &lt;DashboardLayout&gt;
                      </p>
                      <p className="ml-12 text-indigo-300">
                        &lt;LineChart{" "}
                        <span className="text-teal-300">data</span>={"{data}"}{" "}
                        /&gt;
                      </p>
                      <p className="ml-8 text-indigo-300">
                        &lt;/DashboardLayout&gt;
                      </p>
                      <p className="ml-4">);</p>
                      <p>{"}"}</p>
                    </div>

                    {/* Floating Dashboard Widgets */}
                    <div className="relative z-10 flex-1 p-6 flex flex-col justify-end">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {/* Widget 1 */}
                        <div className="bg-[#1e293b]/90 backdrop-blur-md rounded-xl p-4 border border-gray-700/50 shadow-2xl transform hover:-translate-y-1 transition-transform">
                          <div className="text-gray-400 text-xs font-semibold mb-1 uppercase tracking-wider">
                            Total Revenue
                          </div>
                          <div className="text-2xl font-bold text-white mb-2">
                            $124,563
                          </div>
                          <div className="w-full h-10 flex items-end space-x-1">
                            {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                              <div
                                key={i}
                                className="w-full bg-brand-500 rounded-t-sm opacity-80"
                                style={{ height: `${h}%` }}
                              ></div>
                            ))}
                          </div>
                        </div>
                        {/* Widget 2 */}
                        <div className="bg-[#1e293b]/90 backdrop-blur-md rounded-xl p-4 border border-gray-700/50 shadow-2xl transform translate-y-2 hover:-translate-y-1 transition-transform">
                          <div className="text-gray-400 text-xs font-semibold mb-1 uppercase tracking-wider">
                            Active Users
                          </div>
                          <div className="text-2xl font-bold text-white mb-2 flex items-center">
                            8,492{" "}
                            <span className="text-green-400 text-xs ml-2 bg-green-400/10 px-2 py-0.5 rounded-full">
                              +14%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-700 rounded-full mt-5">
                            <div className="w-3/4 h-full bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                          </div>
                        </div>
                      </div>

                      {/* Big Chart Widget */}
                      <div className="bg-[#1e293b]/90 backdrop-blur-md rounded-xl p-4 border border-gray-700/50 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-gray-200 text-sm font-semibold">
                            Growth Overview
                          </div>
                          <div className="flex space-x-1 text-xs">
                            <span className="px-2 py-1 bg-brand-500/20 text-brand-400 rounded">
                              1W
                            </span>
                            <span className="px-2 py-1 text-gray-400">1M</span>
                            <span className="px-2 py-1 text-gray-400">1Y</span>
                          </div>
                        </div>
                        <div className="w-full h-24 relative">
                          {/* SVG Line Chart */}
                          <svg
                            viewBox="0 0 100 40"
                            preserveAspectRatio="none"
                            className="w-full h-full overflow-visible"
                          >
                            <defs>
                              <linearGradient
                                id="chart-grad"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#3b82f6"
                                  stopOpacity="0.4"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#3b82f6"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d="M0 30 C 10 20, 20 35, 30 25 C 40 15, 50 10, 60 15 C 70 20, 80 5, 90 10 L 100 0 L 100 40 L 0 40 Z"
                              fill="url(#chart-grad)"
                            />
                            <path
                              d="M0 30 C 10 20, 20 35, 30 25 C 40 15, 50 10, 60 15 C 70 20, 80 5, 90 10 L 100 0"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="90"
                              cy="10"
                              r="3"
                              fill="#0f172a"
                              stroke="#3b82f6"
                              strokeWidth="2"
                              className="animate-pulse"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Banner replacing Trust Banner */}
      <section className="border-y border-gray-100 bg-gray-50 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
            Powered by Modern Technology
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-70 px-4">
          {/* Tech stack names instead of logos */}
          {[
            "React.js",
            "Node.js",
            "Python",
            "AWS",
            "PostgreSQL",
            "Docker",
            "GraphQL",
          ].map((tech) => (
            <div
              key={tech}
              className="text-xl md:text-2xl font-extrabold text-gray-800 tracking-tight transition-opacity hover:opacity-100 cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Expanded Why Choose ICCW Section (Bento Grid Style) */}
      <section className="py-24 bg-white relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-50 rounded-bl-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase mb-3">
              Why Choose ICCW Tech
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Built for Speed, Designed for Scale
            </h3>
            <p className="text-xl text-gray-600">
              We don't just write code; we engineer scalable solutions that
              solve real business bottlenecks and drive explosive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Feature 1 (Large) */}
            <motion.div
              className="md:col-span-8 bg-gray-50 rounded-[2rem] p-10 lg:p-14 border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-10 -top-10 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-50 group-hover:bg-brand-200 transition-colors duration-500"></div>
              <Zap className="w-12 h-12 text-brand-600 mb-8 relative z-10" />
              <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative z-10">
                Lightning Fast Performance
              </h4>
              <p className="text-lg text-gray-600 max-w-xl relative z-10 leading-relaxed">
                We utilize the latest edge-computing technologies and optimized
                database queries to ensure your applications load instantly.
                Fast software means higher conversion rates, better SEO, and
                happier users.
              </p>
            </motion.div>

            {/* Feature 2 (Medium) */}
            <motion.div
              className="md:col-span-4 bg-brand-900 rounded-[2rem] p-10 lg:p-12 border border-brand-800 shadow-xl hover:shadow-2xl hover:shadow-brand-900/40 transition-all duration-300 text-white relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-700 blur-2xl opacity-50 rounded-full"></div>
              <Shield className="w-12 h-12 text-brand-400 mb-8 relative z-10" />
              <h4 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                Enterprise Security
              </h4>
              <p className="text-brand-100 relative z-10 leading-relaxed">
                Bank-grade encryption, secure data centers, and strict
                compliance with global data protection standards like GDPR and
                HIPAA. Your proprietary data is impenetrable.
              </p>
            </motion.div>

            {/* Feature 3 (Medium) */}
            <motion.div
              className="md:col-span-5 bg-white rounded-[2rem] p-10 lg:p-12 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Users className="w-12 h-12 text-blue-500 mb-8" />
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Dedicated Expert Team
              </h4>
              <p className="text-gray-600 leading-relaxed">
                You get direct access to senior engineers and project managers.
                We act as your true in-house tech partner, providing 24/7
                technical support and rapid, agile iteration cycles.
              </p>
            </motion.div>

            {/* Feature 4 (Large) */}
            <motion.div
              className="md:col-span-7 bg-gray-50 rounded-[2rem] p-10 lg:p-14 border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute -left-10 -bottom-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 group-hover:bg-blue-200 transition-colors duration-500"></div>
              <BarChart className="w-12 h-12 text-brand-600 mb-8 relative z-10" />
              <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative z-10">
                Data-Driven Scalability
              </h4>
              <p className="text-lg text-gray-600 max-w-xl relative z-10 leading-relaxed">
                Our cloud-native architectures are designed to handle massive
                growth automatically. From day one, we build your software to
                effortlessly scale from 100 to 10,000,000 users without needing
                to rewrite the core codebase.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-900"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-800 transform skew-x-12 translate-x-32 hidden md:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-brand-100 text-lg mb-8 max-w-lg">
                Join hundreds of companies that use ICCW to power their
                operations. Start your journey with a free technical
                consultation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "No credit card required",
                  "14-day free trial",
                  "Cancel anytime",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-brand-50">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-5/12 bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Get early access
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="sr-only">Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="sr-only">Email</label>
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md"
                >
                  Request Demo
                </button>
              </form>
              <p className="text-center text-sm text-gray-500 mt-4">
                By continuing, you agree to our Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
