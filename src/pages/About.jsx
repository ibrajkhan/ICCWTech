import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Award,
  HeartHandshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import ibrajImage from "../assets/IbrajKh.png";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            About <span className="text-brand-600">ICCW Tech</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          >
            We are a dedicated team of engineers, designers, and strategists
            passionate about building software that empowers businesses to
            achieve more.
          </motion.p>
        </div>

        {/* CEO Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:flex">
            <div className="md:w-2/5 bg-brand-50 relative overflow-hidden flex items-center justify-center p-12">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-500 to-transparent"></div>
              {/* CEO Image */}
              <div className="relative z-10 w-64 h-64 rounded-full shadow-2xl border-4 border-white flex items-center justify-center overflow-hidden bg-brand-100">
                <img
                  src={ibrajImage}
                  alt="Ibraj Khan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
              <div className="uppercase tracking-widest text-brand-600 font-bold text-sm mb-2">
                Our Leadership
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ibraj Khan
              </h2>
              <p className="text-lg text-gray-500 mb-6 font-medium">
                CEO & Founder, Software Engineer
              </p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  "At ICCW Tech, we believe that powerful software shouldn't be
                  complicated. Our mission is to democratize access to
                  enterprise-grade tools, enabling businesses of all sizes to
                  streamline their operations, manage their resources
                  effectively, and scale without friction."
                </p>
                <p>
                  With years of experience in custom software engineering, Ibraj
                  founded ICCW to bridge the gap between complex business
                  requirements and intuitive, accessible software solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase mb-3">
              Our Core Values
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The principles that drive us
            </h3>
            <p className="text-lg text-gray-600">
              We believe that great software is built on a foundation of strong
              values. These core principles guide every decision we make and
              every line of code we write.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-white" />,
                title: "Mission-Driven",
                color: "from-blue-400 to-blue-600",
                shadow: "shadow-blue-500/30",
                desc: "We focus on tangible outcomes and ROI for our clients, building what matters most rather than just writing code.",
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-white" />,
                title: "Innovation First",
                color: "from-brand-400 to-brand-600",
                shadow: "shadow-brand-500/30",
                desc: "Constantly exploring new technologies and architectures to deliver future-proof, highly scalable solutions.",
              },
              {
                icon: <Award className="w-8 h-8 text-white" />,
                title: "Excellence",
                color: "from-indigo-400 to-indigo-600",
                shadow: "shadow-indigo-500/30",
                desc: "We hold ourselves to the absolute highest standards of code quality, rigorous security, and intuitive design.",
              },
              {
                icon: <HeartHandshake className="w-8 h-8 text-white" />,
                title: "Client Partnership",
                color: "from-rose-400 to-rose-600",
                shadow: "shadow-rose-500/30",
                desc: "We don't just act as vendors; we become your dedicated technical partners, fully invested in your long-term success.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-white" />,
                title: "Integrity & Trust",
                color: "from-teal-400 to-teal-600",
                shadow: "shadow-teal-500/30",
                desc: "Complete transparency in our processes, pricing, and communication. We build trust through honest collaboration.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-white" />,
                title: "Agile & Adaptive",
                color: "from-amber-400 to-amber-600",
                shadow: "shadow-amber-500/30",
                desc: "Business needs change rapidly. We embrace agility, allowing us to pivot quickly and adapt to your evolving requirements.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg ${value.shadow} group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
