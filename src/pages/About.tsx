import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Trees, Paintbrush, Square, Wrench, Droplets } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'EXCELLENT STRUCTURE',
      description: 'Earthquake proof R.C.C. frame structure for the safety aspect.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Trees,
      title: 'IN GREEN AREA',
      description: "It's so cheerful and peaceful, your time at the Abu Hills is going to be so pleasant and worthy!",
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Paintbrush,
      title: 'EXTERIOR FINISH',
      description: 'Double coated sand faced plaster with weatherproof premium acrylic exterior paint.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Square,
      title: 'PREMIUM FLOORING',
      description: 'Premium quality vitrified floor, Rusting tiles in balcony and wash.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Wrench,
      title: 'POLISHED KITCHEN',
      description: 'Polished granite platform top with premium quality s.s. sink. Designer glazed tiles cladding up to lintel level.',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Droplets,
      title: 'PREMIUM QUALITY',
      description: 'Designer tiles in the bathroom with concealed cpvc/ppr pipes with premium quality accessories.',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const specifications = [
    {
      category: 'EXTERIOR',
      items: [
        { label: 'STRUCTURE', value: 'Earthquake proof R.C.C. frame structure for safety aspect' },
        { label: 'EXTERIOR FINISH', value: 'Double coated sand faced plaster with weatherproof premium acrylic exterior paint' }
      ]
    },
    {
      category: 'INTERIOR',
      items: [
        { label: 'FLOORING', value: 'Premium quality vitrified floor, Rusting tiles in balcony and wash' },
        { label: 'WALLS', value: 'Premium quality interior paint with smooth finish' }
      ]
    },
    {
      category: 'BEDROOM',
      items: [
        { label: 'FLOORING', value: 'Premium quality vitrified tiles' },
        { label: 'WALLS', value: 'Smooth interior paint finish' }
      ]
    },
    {
      category: 'BATHROOM',
      items: [
        { label: 'TILES', value: 'Designer tiles with premium finish' },
        { label: 'PLUMBING', value: 'Concealed cpvc/ppr pipes with premium quality accessories' }
      ]
    }
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
            alt="About Abu Hills"
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
            <nav className="text-amber-200 mb-4">
              <span>Home</span> <span className="mx-2">&gt;</span> <span>About Abu Hills</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Abu Hills
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 leading-relaxed">
              Discover the luxury weekend villa lifestyle where contemporary living 
              meets natural serenity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-6">
                Features of Abu Hills Weekend Homes
              </h2>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Perfectly situated at a priceless location where the sprawling life of the city 
                gives way to the natural landscape of the city's outskirt, Abu Hills exemplifies 
                the perfect blend of the contemporary lifestyle of the affluent class and the 
                serene living that nature offers.
              </p>
              <div className="bg-amber-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-stone-800 mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <span className="text-stone-700">Premium location with natural landscape views</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <span className="text-stone-700">Contemporary lifestyle amenities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <span className="text-stone-700">Serene and peaceful environment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <span className="text-stone-700">Perfect for weekend getaways</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Abu Hills villa"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Luxury Weekend Villas</h3>
                  <p className="text-stone-200">Built Year: 2018</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Premium Features & Quality
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Every aspect of Abu Hills is designed with attention to detail and premium quality materials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 p-3 rounded-full">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
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
              Specifications & Dimensions
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Abu Hills specifications cover wide dimensions like earthquake resistance structure, 
              double coated exterior finish, premium quality floors, polished kitchen and much more.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-stone-50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-amber-600 mb-4 text-center">
                  {spec.category}
                </h3>
                <div className="space-y-4">
                  {spec.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-stone-200 pb-3 last:border-b-0">
                      <h4 className="font-semibold text-stone-800 text-sm mb-1">
                        {item.label}
                      </h4>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
              Experience Abu Hills Today
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Schedule your visit to see these premium features and quality craftsmanship firsthand.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary bg-white text-amber-600 hover:bg-stone-100 text-lg"
            >
              Schedule Your Visit
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;