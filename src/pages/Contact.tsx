import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Calendar,
  User,
  FileText,
  Download,
} from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91-93275-860-40", "+91-93274-452-76"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@abuhills.com"],
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Weekend Villas Location", "Abu Hills, Premium Area"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Clock,
      title: "Visit Hours",
      details: ["Mon - Sun: 9:00 AM - 6:00 PM", "Site visits by appointment"],
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 lg:pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-900 to-stone-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact Abu Hills"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 leading-relaxed">
              Ready to experience luxury weekend villa living? Get in touch with
              us to schedule your visit or get more information about Abu Hills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-100"
              >
                <div
                  className={`w-12 h-12 rounded-full ${info.color} flex items-center justify-center mb-4`}
                >
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-stone-600 mb-1">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Agent Info */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-stone-800 mb-6">
                  Send Message to Vinayak Realty
                </h2>
                <p className="text-stone-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible to schedule your villa visit.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                      type="text"
                      id="fullName"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.fullName?.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200"
                      placeholder="+91-XXXXX-XXXXX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone?.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email",
                        },
                      })}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Tell us about your interest in Abu Hills villa..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message?.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Agent Info & Quick Actions */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Agent Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">
                    Vinayak Realty
                  </h3>
                  <p className="text-stone-600 italic mb-4">
                    (A Dream Well Designed)
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+919327586040"
                      className="flex items-center justify-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors duration-200"
                    >
                      <Phone className="h-4 w-4" />
                      <span>+91-93275-860-40</span>
                    </a>
                    <a
                      href="mailto:info@abuhills.com"
                      className="flex items-center justify-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors duration-200"
                    >
                      <Mail className="h-4 w-4" />
                      <span>info@abuhills.com</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-stone-800 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary bg-white text-amber-600 hover:bg-stone-100 text-lg"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Schedule Visit</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-stone-600 text-white py-3 rounded-lg hover:bg-stone-700 transition-colors duration-200 flex items-center justify-center space-x-2 btn-primary"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Brochure</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary w-full"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>View on Map</span>
                  </motion.button>
                </div>
              </div>

              {/* Documents */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-stone-800 mb-4">
                  Documents
                </h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-3 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors duration-200"
                  >
                    <FileText className="h-5 w-5 text-amber-600" />
                    <div>
                      <p className="font-medium text-stone-800">
                        Abu Hills Brochure
                      </p>
                      <p className="text-sm text-stone-600">Download PDF</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Location Details
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Find us at our premium location where luxury meets nature.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-stone-200 rounded-2xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-stone-800 mb-2">
                Abu Hills Location
              </h3>
              <p className="text-stone-600 mb-4">
                Premium weekend villa location
                <br />
                Perfectly situated for luxury living
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-200"
              >
                View on Map
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Visit Abu Hills?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Don't wait! Schedule your visit today and experience the luxury
              weekend villa lifestyle firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-stone-100 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Visit</span>
              </motion.button>
              <a href="tel:+919327586040">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full text-lg"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
