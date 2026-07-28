import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export const AddressesSection: React.FC = () => {
  
  // Quick helper to search the address on google map link safely without prompt failure
  const handleGetDirections = (address: string) => {
    const encoded = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encoded}`, '_blank');
  };

  const addressesData = {
    church: {
      title: 'Church Function',
      name: "St. Joseph's Church",
      address: 'Wennappuwa, Sri Lanka',
    },
    poruwa: {
      title: 'Poruwa & Reception',
      name: 'Monarch Imperial',
      address: '31A New Hospital Rd, Sri Jayawardenepura',
      note: 'Ceremony begins at 04:30 PM',
    },
    homecoming: {
      title: 'The Homecoming',
      name: 'Maze Glass House',
      address: 'Chilaw - Colombo Main Rd, Wennappuwa 61170',
    }
  };

  return (
    <div className="w-full flex justify-center bg-oldmoney-cream/10">
      <div className="w-full bg-oldmoney-brown text-gray-900 px-6 py-16 flex flex-col items-center shadow-md rounded-3xl relative overflow-hidden">
        


        {/* Ambient overlay vignette */}
        <div className="absolute inset-0 bg-oldmoney-brown/90 z-0 pointer-events-none" />

        {/* Section Heading inside the dark frame */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 z-10"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-oldmoney-taupe leading-none tracking-[0.25em] uppercase">
            ADDRESSES
          </h2>
          <div className="w-8 h-[1px] bg-oldmoney-taupe/40 mx-auto mt-4" />
        </motion.div>

        {/* Addresses list with delicate sparkles and elegant diamond line connectors */}
        <div className="w-full px-4 sm:px-12 max-w-2xl space-y-8 z-10 relative">
          
          {/* Item 1: Church */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 relative group"
          >
            {/* Elegant sparkling diamond connector mark */}
            <div className="flex flex-col items-center">
              <div className="w-2.5 h-2.5 bg-oldmoney-taupe rotate-45 flex-shrink-0 animate-pulse" />
              <div className="w-[1px] h-20 bg-oldmoney-taupe/20 mt-2" />
            </div>
            
            <div className="text-left flex-1 -mt-1.5 pb-2">
              <span className="font-serif italic text-lg text-oldmoney-taupe font-extrabold block">
                {addressesData.church.title}
              </span>
              <strong className="font-serif text-sm block mt-0.5 font-semibold text-gray-900/95">
                {addressesData.church.name}
              </strong>
              <p className="font-serif text-xs leading-relaxed text-oldmoney-cream/70 font-bold mt-1">
                {addressesData.church.address}
              </p>
              
              {/* Maps anchor redirect */}
              <button
                onClick={() => handleGetDirections(`${addressesData.church.name}, ${addressesData.church.address}`)}
                id="btn-nav-church"
                className="mt-2.5 flex items-center gap-1 text-[10px] uppercase font-sans tracking-widest text-oldmoney-taupe hover:text-gray-900 transition-colors duration-300 font-semibold cursor-pointer"
              >
                <Navigation className="w-3 h-3 text-oldmoney-taupe" />
                Get Directions
              </button>
            </div>
          </motion.div>

          {/* Item 2: Poruwa & Reception */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex gap-4 relative group"
          >
            <div className="flex flex-col items-center">
              <div className="w-2.5 h-2.5 bg-oldmoney-taupe rotate-45 flex-shrink-0" />
              <div className="w-[1px] h-24 bg-oldmoney-taupe/20 mt-2" />
            </div>
            
            <div className="text-left flex-1 -mt-1.5 pb-2">
              <span className="font-serif italic text-lg text-oldmoney-taupe font-extrabold block">
                {addressesData.poruwa.title}
              </span>
              <strong className="font-serif text-sm block mt-0.5 font-semibold text-gray-900/95">
                {addressesData.poruwa.name}
              </strong>
              <p className="font-serif text-xs leading-relaxed text-oldmoney-cream/70 font-bold mt-1">
                {addressesData.poruwa.address}
              </p>
              
              <p className="font-serif text-[11px] leading-relaxed italic text-oldmoney-taupe/70 font-bold mt-1.5 max-w-[210px]">
                {addressesData.poruwa.note}
              </p>

              {/* Maps anchor redirect */}
              <button
                onClick={() => handleGetDirections(`${addressesData.poruwa.name}, ${addressesData.poruwa.address}`)}
                id="btn-nav-poruwa"
                className="mt-2.5 flex items-center gap-1 text-[10px] uppercase font-sans tracking-widest text-oldmoney-taupe hover:text-gray-900 transition-colors duration-300 font-semibold cursor-pointer"
              >
                <Navigation className="w-3 h-3 text-oldmoney-taupe" />
                Get Directions
              </button>
            </div>
          </motion.div>

          {/* Item 3: Homecoming */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4 group"
          >
            <div className="flex flex-col items-center">
              <div className="w-2.5 h-2.5 bg-oldmoney-taupe rotate-45 flex-shrink-0" />
            </div>
            
            <div className="text-left flex-1 -mt-1.5">
              <span className="font-serif italic text-lg text-oldmoney-taupe font-extrabold block">
                {addressesData.homecoming.title}
              </span>
              <strong className="font-serif text-sm block mt-0.5 font-semibold text-gray-900/95">
                {addressesData.homecoming.name}
              </strong>
              <p className="font-serif text-xs leading-relaxed text-oldmoney-cream/70 font-bold mt-1">
                {addressesData.homecoming.address}
              </p>
              
              {/* Maps anchor redirect */}
              <button
                onClick={() => handleGetDirections(`${addressesData.homecoming.name}, ${addressesData.homecoming.address}`)}
                id="btn-nav-homecoming"
                className="mt-2.5 flex items-center gap-1 text-[10px] uppercase font-sans tracking-widest text-oldmoney-taupe hover:text-gray-900 transition-colors duration-300 font-semibold cursor-pointer"
              >
                <Navigation className="w-3 h-3 text-oldmoney-taupe" />
                Get Directions
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};
