import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Calendar, Mail } from 'lucide-react';

export default function ValentineApp() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [answered, setAnswered] = useState(false);
  const noButtonRef = useRef(null);

  // IMPORTANT: Replace with your Cloudinary cloud name
  const CLOUDINARY_CLOUD_NAME = "dnlpjkxqq";

  // Helper function to generate Cloudinary URLs
  const getCloudinaryUrl = (publicId, width = 400, height = 400) => {
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_${width},h_${height},c_fill,g_auto,q_auto,f_auto/${publicId}`;
  };

  // Your relationship data - CUSTOMIZE THIS!
  const relationshipData = {
    startDate: "May 19, 2024",
    daysTogether: Math.floor((new Date() - new Date('2024-05-19')) / (1000 * 60 * 60 * 24)),

    // Letter to your girlfriend - CUSTOMIZE THIS!
    letter: {
      greeting: "My Cutest Dearest Love,",
      paragraphs: [
        "From the moment I first saw you running up those college stairs, feeling all shy, I knew you were special. Those early days of waiting just to catch a glimpse of you are memories I'll treasure forever. You were so incredibly cute, and you still are!",
        
        "Do you remember that day in the library? When I gathered all my courage to sit next to you? My heart was racing, but being near you felt so right. Every moment we've shared since then has only made me fall deeper in love with you.",
        
        "Our first date at Patan Durbar Square after my birthday - that was when I knew you were the one. The way you smile, the way you laughed at my silly jokes, the way you understand me like no one else ever has. You make every ordinary moment feel extraordinary.",
        
        "I love how we can't go on a single date without food becoming a major part of our adventure! Those shared meals aren't just about eating - they're about us, our conversations, our laughter, our connection. Every bite tastes better when I'm with you.",
        
        "Through all our ups and downs, you've been my constant. You've made me a better person just by being yourself. Your kindness, your strength, your beautiful heart - everything about you amazes me every single day.",
        
        `It's been ${Math.floor((new Date() - new Date('2024-05-19')) / (1000 * 60 * 60 * 24))} magical days together, and I want a lifetime more. You're not just my girlfriend - you're my best friend, my partner, my everything. I love you more than words could ever express.`,
        
        " I Love You Babe, every day with you is a valentine's day",

        "Happy Valentine's Day Love"
      ],
      closing: "Forever yours,",
      signature: "Your Love ❤️"
    },

    // Photo gallery - Add your Cloudinary image public IDs here
    // Upload photos to Cloudinary and use the public ID (the part after your cloud name in the URL)
    // Example: if URL is https://res.cloudinary.com/demo/image/upload/sample.jpg
    // then publicId is "sample"
    photos: [
      "20250519_141012899_lv0lje", // Replace with your actual Cloudinary public IDs
      "IMG_20250123_105953_661_rmucvy",
      "IMG-20250214-WA0030_crmyn4",
      "IMG_20260123_102613_293_hbude5",
      "IMG-20240703-WA0086_s6gfum",
      "IMG-20250616-WA0332_domxr1",
      "IMG-20250924-WA0181_klksf1",
      "IMG_20251020_183310_109_tnry4p",
      "IMG-20250616-WA0404_amw5ha",
      "received_3956708527902928_kqnc6u",
      "IMG-20240521-WA0033_zi7lnz",
      "IMG-7b7fc7faa666b20e2ace9921471245c3-V_yoixb0",
      "IMG_20250506_204058_822_gtxoxy",
      "PXL_20240521_095319175_qukdhp",
    ],

    reasons: [
      "Your beautiful smile that lights up my world",
      "The way you laugh at my silly jokes",
      "Your kindness and compassionate heart",
      "How you make every moment special",
      "The way you take all my flirty lines",
      "The way you understand me like no one else",
      "Your passion for the things you love",
      "How you make me want to be better"
    ]
  };

  const moveNoButton = () => {
    if (noButtonRef.current) {
      const maxX = 200;
      const maxY = 100;
      const newX = (Math.random() - 0.5) * maxX;
      const newY = (Math.random() - 0.5) * maxY;
      setNoButtonPosition({ x: newX, y: newY });
    }
  };

  const handleYes = () => {
    setAnswered(true);
    setShowConfetti(true);
  };

  const FloatingHearts = () => (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', color: '#da7ea7ff' }}
          initial={{ 
            x: `${Math.random() * 100}vw`,
            y: '100vh',
            opacity: 0.7,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: '-20vh',
            x: `${Math.random() * 100}vw`,
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <Heart fill="currentColor" size={24} />
        </motion.div>
      ))}
    </div>
  );

  const Confetti = () => (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 50 }}>
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: '-10%',
          }}
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: '110vh',
            opacity: 0,
            rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            ease: 'linear',
          }}
        >
          <Heart 
            fill={['#75254dff', '#e64199ff', '#720d3aff', '#ec4899'][Math.floor(Math.random() * 4)]}
            color={['#703b56ff', '#80124dff', '#db2777', '#ec4899'][Math.floor(Math.random() * 4)]}
            size={Math.random() * 20 + 15}
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #fce7f3, #fecaca, #f3e8ff)', overflowX: 'hidden' }}>
      <FloatingHearts />
      {showConfetti && <Confetti />}

      {/* Hero Section */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 1rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '2rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Sparkles style={{ width: '2rem', height: '2rem', color: '#ec4899', margin: '0 auto 0.5rem', animation: 'pulse 2s infinite' }} />
            <p style={{ color: '#db2777', fontWeight: 600, letterSpacing: '0.1em' }}>Valentine's Day 2026</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ textAlign: 'center', maxWidth: '56rem' }}
        >
          <motion.h1 
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 6rem)', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              background: 'linear-gradient(to right, #ec4899, #ef4444, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our Love Story
          </motion.h1>
          <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#374151', marginBottom: '2rem' }}>
            {relationshipData.daysTogether} days of magic together
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', color: '#4b5563', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar style={{ width: '1.25rem', height: '1.25rem' }} />
              <span>Since {relationshipData.startDate}</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(to right, #ec4899, #ef4444)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              fontSize: '1.25rem',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
          >
            A Letter For You 💕
          </motion.button>
        </motion.div>
      </section>

      {/* Love Letter Section */}
      <section style={{ padding: '5rem 1rem', background: 'linear-gradient(to right, #fef3c7, #fce7f3)' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <Mail style={{ width: '3rem', height: '3rem', color: '#ec4899', margin: '0 auto 1rem' }} />
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #dc2626, #db2777)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                A Letter to You
              </h2>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: 'clamp(2rem, 5vw, 3rem)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative'
            }}>
              {/* Decorative hearts */}
              <Heart style={{ position: 'absolute', top: '1rem', right: '1rem', width: '1.5rem', height: '1.5rem', color: '#f472b6', opacity: 0.3 }} fill="currentColor" />
              <Heart style={{ position: 'absolute', bottom: '1rem', left: '1rem', width: '1.5rem', height: '1.5rem', color: '#ef4444', opacity: 0.3 }} fill="currentColor" />

              <div style={{ fontFamily: 'Georgia, serif', color: '#1f2937', lineHeight: '1.8' }}>
                <p style={{ fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '2rem', color: '#db2777' }}>
                  {relationshipData.letter.greeting}
                </p>

                {relationshipData.letter.paragraphs.map((paragraph, index) => (
                  <p key={index} style={{ fontSize: '1.125rem', marginBottom: '1.5rem', textAlign: 'justify' }}>
                    {paragraph}
                  </p>
                ))}

                <div style={{ marginTop: '3rem', textAlign: 'right' }}>
                  <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                    {relationshipData.letter.closing}
                  </p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#db2777' }}>
                    {relationshipData.letter.signature}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section style={{ padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '4rem',
              background: 'linear-gradient(to right, #db2777, #9333ea)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Precious Memories 
          </motion.h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {relationshipData.photos.map((photoId, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                style={{
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  aspectRatio: '1/1'
                }}
              >
                <img
                  src={getCloudinaryUrl(photoId)}
                  alt={`Memory ${index + 1}`}
                  loading="lazy"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.target.src = `https://via.placeholder.com/400x400/ec4899/ffffff?text=Photo+${index + 1}`;
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section style={{ padding: '5rem 1rem', background: 'linear-gradient(to right, #fce7f3, #f3e8ff)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '4rem',
              background: 'linear-gradient(to right, #dc2626, #db2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Why I Love You
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr', gap: '1.5rem' }}>
            {relationshipData.reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Heart style={{ width: '1.5rem', height: '1.5rem', color: '#ec4899', flexShrink: 0, marginTop: '0.25rem' }} fill="currentColor" />
                  <p style={{ color: '#374151', fontSize: '1.125rem' }}>{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Question */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 1rem', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '42rem', width: '100%' }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: 'clamp(2rem, 5vw, 3rem)',
            border: '4px solid #fbcfe8',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Heart style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', color: '#f472b6', animation: 'pulse 2s infinite' }} fill="currentColor" />
            <Heart style={{ position: 'absolute', top: '1rem', right: '1rem', width: '2rem', height: '2rem', color: '#ef4444', animation: 'pulse 2s infinite' }} fill="currentColor" />
            <Heart style={{ position: 'absolute', bottom: '1rem', left: '1rem', width: '2rem', height: '2rem', color: '#ef4444', animation: 'pulse 2s infinite' }} fill="currentColor" />
            <Heart style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '2rem', height: '2rem', color: '#f472b6', animation: 'pulse 2s infinite' }} fill="currentColor" />

            <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
              <motion.h2
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  fontSize: 'clamp(2rem, 6vw, 4rem)',
                  fontWeight: 'bold',
                  background: 'linear-gradient(to right, #db2777, #ef4444, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '1.5rem'
                }}
              >
                Will You Be My Valentine?
              </motion.h2>

              <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: '#374151', fontStyle: 'italic', marginBottom: '2rem' }}>
                {relationshipData.daysTogether} days wasn't enough. I want forever with you. 💕
              </p>

              {!answered ? (
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem', position: 'relative', minHeight: '8rem' }}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleYes}
                    style={{
                      background: 'linear-gradient(to right, #22c55e, #16a34a)',
                      color: 'white',
                      fontWeight: 'bold',
                      padding: '1rem 3rem',
                      borderRadius: '9999px',
                      fontSize: '1.5rem',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      zIndex: 1
                    }}
                  >
                    Yes! 💖
                  </motion.button>

                  {/* Invisible placeholder to keep Yes button in place */}
                  <div style={{ 
                    width: '11rem', 
                    visibility: 'hidden',
                    pointerEvents: 'none'
                  }}></div>

                  <motion.button
                    ref={noButtonRef}
                    onMouseEnter={moveNoButton}
                    onClick={moveNoButton}
                    animate={{ 
                      x: noButtonPosition.x, 
                      y: noButtonPosition.y
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{
                      position: 'absolute',
                      right: 'calc(50% - 11rem - 0.75rem)',
                      background: '#9ca3af',
                      color: 'white',
                      fontWeight: 'bold',
                      padding: '1rem 3rem',
                      borderRadius: '9999px',
                      fontSize: '1.5rem',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      zIndex: 2
                    }}
                  >
                    No
                  </motion.button>
                </div>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  style={{ marginTop: '2rem' }}
                >
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉 💕 🌹 💖 ✨</div>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#db2777', marginBottom: '1rem' }}>
                    Yay! You said YES! 🎊
                  </p>
                  <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '0.5rem' }}>
                    You just made me the happiest person alive! 💗
                  </p>
                  <p style={{ fontSize: '1.125rem', color: '#4b5563', fontStyle: 'italic' }}>
                    Happy Valentine's Day, my love! Here's to forever together! 🌹
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', color: '#4b5563', background: 'linear-gradient(to right, #fce7f3, #f3e8ff)' }}>
        <p style={{ fontSize: '1.125rem' }}>Made with 💖 for the love of my life</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Forever & Always | Valentine's Day 2026</p>
      </footer>
    </div>
  );
}