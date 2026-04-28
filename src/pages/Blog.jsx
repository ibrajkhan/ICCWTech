import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of SaaS: Trends to Watch in 2026",
      excerpt: "Discover the emerging technologies and methodologies that will shape the Software as a Service landscape in the coming years.",
      category: "Technology",
      date: "April 24, 2026",
      author: "Ibraj Khan",
      readTime: "5 min read",
      imageColor: "from-blue-400 to-brand-500"
    },
    {
      id: 2,
      title: "How Custom CRM Can 10x Your Sales Performance",
      excerpt: "Off-the-shelf solutions often fall short. Learn why building a custom CRM tailored to your sales pipeline is a game-changer.",
      category: "Business",
      date: "April 18, 2026",
      author: "Sarah Jenkins",
      readTime: "7 min read",
      imageColor: "from-brand-500 to-indigo-600"
    },
    {
      id: 3,
      title: "Migrating to Cloud ERP: A Step-by-Step Guide",
      excerpt: "Transitioning to a cloud-based Enterprise Resource Planning system doesn't have to be painful. Follow our comprehensive guide.",
      category: "Enterprise",
      date: "April 12, 2026",
      author: "Michael Chen",
      readTime: "10 min read",
      imageColor: "from-indigo-500 to-purple-600"
    },
    {
      id: 4,
      title: "Why Security is the Foundation of Modern Web Apps",
      excerpt: "In an era of increasing cyber threats, building security into your application architecture from day one is non-negotiable.",
      category: "Security",
      date: "April 05, 2026",
      author: "Ibraj Khan",
      readTime: "6 min read",
      imageColor: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "Automating HR Workflows to Boost Employee Retention",
      excerpt: "Learn how modern HRMS software can remove friction from onboarding and improve overall employee satisfaction.",
      category: "Management",
      date: "March 28, 2026",
      author: "Emily Davis",
      readTime: "4 min read",
      imageColor: "from-pink-500 to-rose-500"
    },
    {
      id: 6,
      title: "The ROI of Custom Software Development",
      excerpt: "Is custom software worth the investment? We break down the long-term ROI compared to licensing generic SaaS tools.",
      category: "Strategy",
      date: "March 20, 2026",
      author: "Ibraj Khan",
      readTime: "8 min read",
      imageColor: "from-rose-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Insights & <span className="text-brand-600">News</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Read the latest articles on SaaS, custom software, and business automation from the ICCW team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image Placeholder */}
              <div className={`h-48 w-full bg-gradient-to-br ${post.imageColor} relative`}>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" /> {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" /> {post.author}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <span className="text-sm font-medium text-gray-500">{post.readTime}</span>
                  <Link to="#" className="text-brand-600 font-semibold hover:text-brand-800 flex items-center transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Newsletter Subscription */}
        <motion.div 
          className="mt-20 bg-brand-900 rounded-3xl p-10 md:p-12 text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-700 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-800 rounded-full blur-3xl opacity-50 -ml-32 -mb-32"></div>
          
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Subscribe to our newsletter</h2>
          <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Get the latest insights, tech news, and software development tips delivered directly to your inbox every week.
          </p>
          
          <form className="max-w-md mx-auto relative z-10 flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-brand-400 outline-none"
              required
            />
            <button type="submit" className="bg-brand-500 hover:bg-brand-400 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Blog;
