import React from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  Shield, 
  Home, 
  Lightbulb, 
  Trees, 
  Dumbbell,
  Car,
  Wifi,
  Users,
  MapPin
} from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: Droplets,
      title: '24/7 Water Supply',
      description: 'Continuous and reliable water supply throughout the day and night for your convenience.',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round the clock security surveillance and personnel to ensure your safety and peace of mind.',
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Home,
      title: 'Attractive Entrance Gate',
      description: 'Beautifully designed entrance gate that creates a grand first impression.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Car,
      title: 'All Internal R.C.C. Road',
      description: 'Well-constructed internal roads for smooth and comfortable vehicle movement.',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Lightbulb,
      title: 'Street Lights',
      description: 'Well-lit pathways and streets for safety and convenience during evening hours.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: 'Beautiful Outer Seating',
      description: 'Comfortable outdoor seating areas to relax and enjoy the natural surroundings.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Trees,
      title: 'Soul Satisfying Landscape Garden',
      description: 'Beautifully landscaped gardens that provide a serene and peaceful environment.',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Home,
      title: 'Well-Designed Club House',
      description: 'Modern club house with various recreational facilities for residents.',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Dumbbell,
      title: 'Swimming Pool',
      description: 'Premium swimming pool facility for recreation and fitness activities.',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: MapPin,
      title: 'Multipurpose Open Area',
      description: 'Spacious open areas for various activities, events, and gatherings.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const categories = [
    {
      title: 'Security & Safety',
      amenities: ['24/7 Security', '24/7 Water Supply', 'Street Lights', 'All Internal R.C.C. Road']
    },
    {
      title: 'Recreation & Leisure',
      amenities: ['Swimming Pool', 'Well-Designed Club House', 'Multipurpose Open Area', 'Beautiful Outer Seating']
    },
    {
      title: 'Landscape & Environment',
      amenities: ['Soul Satisfying Landscape Garden', 'Attractive Entrance Gate']
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
            src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Abu Hills amenities"
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
              Amenities at Abu Hills
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 leading-relaxed">
              Never before facilities and amenities to a contemporary weekend home lifestyle. 
              The amenities and activities at Abu Hills are going to give you the experience 
              of the entire world at one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenities Grid */}
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
              Premium Lifestyle Amenities
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover the comprehensive range of facilities designed to enhance your 
              weekend villa experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 p-3 rounded-full">
                    <amenity.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-3">
                    {amenity.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">{amenity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
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
              Amenities by Category
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Our amenities are thoughtfully organized to cater to every aspect of modern living.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-amber-600 mb-6 text-center">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.amenities.map((amenity, amenityIndex) => (
                    <li key={amenityIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-stone-700">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section */}
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
                World-Class Facilities
              </h2>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                The amenities and activities at Abu Hills are going to give you the experience 
                of the entire world at one place. From security to recreation, every aspect 
                has been carefully planned to provide you with the ultimate weekend villa experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-stone-700 font-medium">24/7 Security & Safety</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Dumbbell className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-stone-700 font-medium">Recreation & Fitness</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Trees className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-stone-700 font-medium">Natural Environment</span>
                </div>
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
                  src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Abu Hills swimming pool"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Premium Swimming Pool</h3>
                  <p className="text-stone-200">Recreation & Fitness Facility</p>
                </div>
              </div>
            </motion.div>
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
              Experience These Amenities Yourself
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Schedule a visit to Abu Hills and experience these world-class amenities 
              that will enhance your weekend villa lifestyle.
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

export default Amenities;