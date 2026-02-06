import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Calendar, MapPin } from 'lucide-react';

export default function ValentineApp() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [answered, setAnswered] = useState(false);
  const noButtonRef = useRef(null);

  // Your relationship data - CUSTOMIZE THIS!
  const relationshipData = {
    startDate: "May 19, 2024",
    daysTogether: Math.floor((new Date() - new Date('2024-05-19')) / (1000 * 60 * 60 * 24)),
    
    timeline: [
      {
        title: "How Were We At The Start",
        description: "Remember, how I used to wait to see you in college and you used to run upstairs to your class feeling all shy, I'll never forget those days, you were soooo cute!!!! ",
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
        emoji: "✨"
      },
      {
        title: "Falling Deeper",
        description: "Remember when you along with your friends were in the library and i came there, you were feeling all shy and i sat next to you and then we talked, i still remember those moments.",
        image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&q=80",
        emoji: "💕"
      },
      {
        title: "Our First Date",
        description: "We went to patan durbar square as our first date after my birthday celebration",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
        emoji: "☕"
      },
      {
        title: "Foods every date",
        description: "We had to go eat everytime we met and on every single dates, there were no dates without any food!",
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80",
        emoji: "🌄"
      },
      {
        title: "Growing Together",
        description: "Through ups and downs, we grew stronger supporting each other. You became my best friend and my love.",
        image: "https://images.unsplash.com/photo-1573152143286-0c422b4d2175?w=800&q=80",
        emoji: "🌱"
      },
      {
        title: "Today & Forever",
        description: "Here we are, stronger than ever. Every day with you is a gift I cherish.",
        image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&q=80",
        emoji: "💖"
      }
    ],

    reasons: [
      "Your beautiful smile that lights up my world",
      "The way you laugh at my silly jokes",
      "Your kindness and compassionate heart",
      "How you make every moment special",
      "Your strength and determination",
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>{relationshipData.location}</span>
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
            Explore Our Journey 💕
          </motion.button>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: '5rem 1rem' }}>
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
              background: 'linear-gradient(to right, #db2777, #9333ea)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Beautiful Journey Together
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {relationshipData.timeline.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  display: 'flex',
                  flexDirection: window.innerWidth > 768 ? (index % 2 === 0 ? 'row' : 'row-reverse') : 'column',
                  gap: '2rem',
                  alignItems: 'center'
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src={moment.image}
                      alt={moment.title}
                      style={{
                        width: '100%',
                        height: '20rem',
                        objectFit: 'cover',
                        borderRadius: '1rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                      }}
                    />
                  </div>
                </div>
                <div style={{ flex: 1, textAlign: window.innerWidth > 768 ? 'left' : 'center' }}>
                  <span style={{ fontSize: '4rem', marginBottom: '1rem', display: 'block' }}>{moment.emoji}</span>
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>{moment.title}</h3>
                  <p style={{ color: '#db2777', fontWeight: 600, marginBottom: '1rem' }}>{moment.date}</p>
                  <p style={{ color: '#4b5563', fontSize: '1.125rem', lineHeight: '1.75' }}>{moment.description}</p>
                </div>
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
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    Yes! 💖
                  </motion.button>

                  <motion.button
                    ref={noButtonRef}
                    onMouseEnter={moveNoButton}
                    onClick={moveNoButton}
                    animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{
                      position: 'absolute',
                      background: '#9ca3af',
                      color: 'white',
                      fontWeight: 'bold',
                      padding: '1rem 3rem',
                      borderRadius: '9999px',
                      fontSize: '1.5rem',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
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