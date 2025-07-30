import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Exterior View',
      category: 'exterior',
      description: 'Beautiful exterior view of Abu Hills luxury villa with modern architecture.'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Drawing Room',
      category: 'interior',
      description: 'Spacious and elegantly designed drawing room with premium furnishing.'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Drawing Room Interior',
      category: 'interior',
      description: 'Another view of the luxurious drawing room with modern amenities.'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Swimming Pool',
      category: 'amenities',
      description: 'Premium swimming pool facility for recreation and relaxation.'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Bedroom',
      category: 'interior',
      description: 'Comfortable and well-designed bedroom with premium quality fixtures.'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Master Bedroom',
      category: 'interior',
      description: 'Spacious master bedroom with modern design and natural lighting.'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Villa Exterior',
      category: 'exterior',
      description: 'Complete exterior view showcasing the architectural excellence.'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Entrance Gate',
      category: 'exterior',
      description: 'Attractive entrance gate with security features and elegant design.'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Garden Area',
      category: 'amenities',
      description: 'Soul satisfying landscape garden with beautiful greenery.'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Club House',
      category: 'amenities',
      description: 'Well-designed club house with modern facilities for residents.'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Kitchen Area',
      category: 'interior',
      description: 'Polished granite kitchen with premium quality stainless steel sink.'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Bathroom',
      category: 'interior',
      description: 'Designer tiles bathroom with concealed pipes and premium accessories.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', count: images.length },
    { id: 'exterior', name: 'Exterior', count: images.filter(img => img.category === 'exterior').length },
    { id: 'interior', name: 'Interior', count: images.filter(img => img.category === 'interior').length },
    { id: 'amenities', name: 'Amenities', count: images.filter(img => img.category === 'amenities').length }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

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
            alt="Abu Hills gallery"
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
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 leading-relaxed">
              Explore some of the original site images of Abu Hills. It's so cheerful and peaceful, 
              your time at Abu Hills is going to be so pleasant and worthy!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      onClick={() => setSelectedImage(index)}
                      className="opacity-0 group-hover:opacity-100 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
                    >
                      <Eye className="h-6 w-6" />
                    </motion.button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-stone-800 mb-2">
                      {image.title}
                    </h3>
                    <p className="text-stone-600 text-sm line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors duration-200 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-200 z-10"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-200 z-10"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <div className="bg-white rounded-2xl overflow-hidden">
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-stone-800 mb-2">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-stone-600">
                    {filteredImages[selectedImage].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              See It for Yourself
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              These images give you a glimpse of Abu Hills. Schedule a visit to experience 
              the luxury and serenity in person.
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

export default Gallery;