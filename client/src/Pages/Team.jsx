import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Star,
  Award,
  Target,
  Briefcase,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  BookOpen,
  Gem,
  Heart,
  TrendingUp,
} from "lucide-react";

const Team = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const teamMembers = [
    {
      name: "John Smith",
      position: "Founder & CEO",
      description:
        "With over 15 years in the automotive industry, John leads our vision of providing exceptional car rental experiences.",
      expertise: [
        "Strategic Planning",
        "Business Development",
        "Industry Relations",
      ],
      image:
        "https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
      achievements: "15+ years experience",
      color: "bg-blue-50 dark:bg-blue-900/20", // Added dark variant
      iconColor: "text-blue-500 dark:text-blue-400",
    },
    {
      name: "Sarah Johnson",
      position: "Fleet Manager",
      description:
        "Sarah ensures our fleet meets the highest standards of quality and performance for our customers.",
      expertise: [
        "Fleet Maintenance",
        "Vehicle Acquisition",
        "Quality Assurance",
      ],
      image:
        "https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
      achievements: "200+ fleet vehicles managed",
      color: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-500 dark:text-orange-400",
    },
    {
      name: "Michael Chen",
      position: "Customer Relations Head",
      description:
        "Michael leads our customer service team, ensuring every rental experience exceeds expectations.",
      expertise: [
        "Customer Experience",
        "Team Leadership",
        "Service Excellence",
      ],
      image:
        "https://t3.ftcdn.net/jpg/06/00/86/26/360_F_600862676_U1qq7vSQKjghCXxz8WfNFA3VqXegARDk.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
      achievements: "98% customer satisfaction",
      color: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-500 dark:text-green-400",
    },
    {
      name: "Emma Davis",
      position: "Operations Director",
      description:
        "Emma oversees daily operations and strategic planning to deliver seamless rental services.",
      expertise: [
        "Operations Management",
        "Process Optimization",
        "Team Development",
      ],
      image:
        "https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453518_yYTpu0JmO80Ky1b1BrDVVxpWMNgD6trY.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
      achievements: "30% efficiency increase",
      color: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-500 dark:text-purple-400",
    },
  ];

  const coreValues = [
    {
      icon: Gem,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Our customers' satisfaction is our top priority.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously improving and adapting to industry changes.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Committed to sustainable growth and development.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-zinc-950 dark:to-zinc-900 pt-8 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-16 pb-4">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6
                         cursor-pointer hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors duration-200"
              >
            <Users className="w-5 h-5 text-orange-500" />
              <span className="text-orange-700 dark:text-orange-400 font-medium">
                Our Team
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              Meet the <span className="text-orange-500">Experts</span> Behind
              Our Success
            </h1>
            <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed">
              Our dedicated team of professionals works tirelessly to ensure you
              have the best car rental experience possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-white dark:bg-zinc-950/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group">
                <div
                  className={`rounded-xl p-6 ${member.color} border border-transparent dark:border-zinc-800 transition-all duration-300 
                             group-hover:-translate-y-2`}>
                  <div className="relative mb-6">
                    <div className="aspect-square rounded-lg bg-gray-200 dark:bg-zinc-800 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 right-4 flex gap-2">
                      {Object.entries(member.social).map(
                        ([platform, link], idx) => (
                          <motion.a
                            key={idx}
                            href={link}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center
                                   hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors border border-transparent dark:border-zinc-700">
                            {platform === "linkedin" ? (
                              <Linkedin className="w-4 h-4 text-gray-600 dark:text-zinc-300" />
                            ) : (
                              <Twitter className="w-4 h-4 text-gray-600 dark:text-zinc-300" />
                            )}
                          </motion.a>
                        )
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 dark:text-white">{member.name}</h3>
                  <p className={`text-sm font-semibold mb-4 ${member.iconColor}`}>
                    {member.position}
                  </p>
                  <p className="text-gray-600 dark:text-zinc-400 mb-4 text-sm">{member.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className={`w-4 h-4 ${member.iconColor}`} />
                      <span className="text-sm font-medium dark:text-zinc-300">
                        {member.achievements}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <div
                        key={idx}
                        className="text-xs bg-white/60 dark:bg-zinc-800/60 dark:text-zinc-300 rounded-full px-3 py-1 font-medium">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-orange-500" />
              <h2 className="text-3xl font-bold dark:text-white">Our Core Values</h2>
            </div>
            <p className="text-gray-600 dark:text-zinc-400">
              These principles guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-gray-100 dark:border-zinc-800 hover:border-orange-200 dark:hover:border-orange-500/50 
                         transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-zinc-100">{value.title}</h3>
                <p className="text-gray-600 dark:text-zinc-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-white dark:bg-zinc-950/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 
                     rounded-2xl p-8 md:p-12 text-center text-white shadow-xl shadow-orange-500/20">
            <Briefcase className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our
              passion for excellence and customer service. Explore career
              opportunities with us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-orange-500 rounded-lg font-bold 
                         hover:bg-orange-50 transition-colors shadow-lg">
                View Openings
              </motion.button>
              <motion.a
                href="mailto:careers@carrental.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-orange-600 dark:bg-orange-700 text-white rounded-lg font-bold 
                         hover:bg-orange-700 transition-colors inline-flex items-center gap-2 border border-orange-400">
                <Mail className="w-5 h-5" />
                Contact HR
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;