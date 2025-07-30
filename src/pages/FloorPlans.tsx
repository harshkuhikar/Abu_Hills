import React from 'react';
import { motion } from 'framer-motion';
import { Download, Maximize, Home, Bed, Bath, Square } from 'lucide-react';

const FloorPlans = () => {
  const floorPlanDetails = [
    { icon: Square, label: 'Total Area', value: '2640 SQ. FT' },
    { icon: Bed, label: 'Bedrooms', value: 'Spacious' },
    { icon: Bath, label: 'Bathrooms', value: 'Modern' },
    { icon: Home, label: 'Drawing Rooms', value: 'Elegant' },
    { icon: Home, label: 'Kitchens', value: 'Premium' },
    { icon: Home, label: 'Built Year', value: '2018' }
  ];

  const specifications = [
    {
      room: 'Drawing Room',
      dimensions: '16\' x 12\'',
      features: ['Premium flooring', 'Natural lighting', 'Modern design']
    },
    {
      room: 'Bedroom',
      dimensions: '14\' x 12\'',
      features: ['Built-in wardrobe', 'Attached balcony', 'Premium fixtures']
    },
    {
      room: 'Kitchen',
      dimensions: '10\' x 8\'',
      features: ['Granite platform', 'Premium SS sink', 'Designer tiles']
    },
    {
      room: 'Bathroom',
      dimensions: '8\' x 6\'',
      features: ['Designer tiles', 'Premium accessories', 'Concealed plumbing']
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
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-amber-900 to-stone-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Floor plans"
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
              Floor Plans
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-stone-200 leading-relaxed px-4">
              A detailed plan of the villa with all the dimensions and specifications. 
              Discover the thoughtful layout designed for modern living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Floor Plan Details */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Villa Specifications
            </h2>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto px-4">
              Comprehensive details of your luxury weekend villa layout and dimensions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12 md:mb-16">
            {floorPlanDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-amber-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <detail.icon className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />
                </div>
                <div className="text-lg md:text-2xl font-bold text-amber-600 mb-1">
                  {detail.value}
                </div>
                <div className="text-stone-600 text-xs md:text-sm font-medium">{detail.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plan Image */}
      <section className="py-12 md:py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Detailed Floor Plan
            </h2>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto px-4">
              Interactive floor plan showing the complete layout with room dimensions and specifications.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto"
          >
            {/* Floor Plan Placeholder */}
            <div className="aspect-[4/3] md:aspect-[16/10] bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center relative p-4 md:p-8">
              <div className="text-center w-full">
                <Home className="h-12 w-12 md:h-16 md:w-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-2">Abu Hills Villa Floor Plan</h3>
                <p className="text-stone-600 mb-4 text-sm md:text-base">2640 SQ. FT | Luxury Villa | Built 2018</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <button className="btn-primary text-sm md:text-base">
                    <Download className="h-4 w-4" />
                    <span>Download Plan</span>
                  </button>
                  <button className="btn-secondary text-sm md:text-base">
                    <Maximize className="h-4 w-4" />
                    <span>View Full Size</span>
                  </button>
                </div>
              </div>
              
              {/* Overlay with room labels - Responsive positioning */}
              <div className="absolute inset-4 md:inset-8">
                <div className="relative w-full h-full border-2 border-amber-600 rounded-lg">
                  {/* Drawing Room */}
                  <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-amber-600 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium">
                    Drawing Room<br />16' x 12'
                  </div>
                  
                  {/* Bedroom */}
                  <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-amber-600 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium">
                    Bedroom<br />14' x 12'
                  </div>
                  
                  {/* Kitchen */}
                  <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-amber-600 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium">
                    Kitchen<br />10' x 8'
                  </div>
                  
                  {/* Bathroom */}
                  <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-amber-600 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium">
                    Bathroom<br />8' x 6'
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Room Specifications */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Room Specifications
            </h2>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto px-4">
              Detailed specifications and features for each room in your villa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold text-amber-600 mb-2">
                  {spec.room}
                </h3>
                <p className="text-xl md:text-2xl font-bold text-stone-800 mb-4">
                  {spec.dimensions}
                </p>
                <ul className="space-y-2">
                  {spec.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0"></div>
                      <span className="text-stone-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800 mb-6">
              Get Detailed Floor Plans
            </h2>
            <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-2xl mx-auto px-4">
              Download the complete floor plan with detailed dimensions, specifications, 
              and technical drawings for your reference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg"
              >
                <Download className="h-5 w-5" />
                <span>Download Floor Plan</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg"
              >
                <Home className="h-5 w-5" />
                <span>Schedule Site Visit</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Ready to Make It Yours?
            </h2>
            <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-2xl mx-auto px-4">
              Schedule a visit to see the actual villa layout and experience the 
              thoughtfully designed spaces in person.
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

export default FloorPlans;