import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  TrendingUp,
  Clock,
  PieChart,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  BarChart3
} from 'lucide-react';
import './App.css';

// Background Animation Component
const BackgroundAnimation = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  if (dimensions.width === 0) return null;

  return (
    <div className="background-animation">
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="floating-particle"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: 0
          }}
          animate={{
            x: [
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
              Math.random() * dimensions.width
            ],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height
            ],
            opacity: [0, 0.6, 0.3, 0]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}


      {/* Large Floating Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="floating-orb"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: 0.5
          }}
          animate={{
            x: [
              Math.random() * dimensions.width,
              Math.random() * dimensions.width * 0.8,
              Math.random() * dimensions.width
            ],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height * 0.6,
              Math.random() * dimensions.height
            ],
            scale: [0.5, 1, 0.7, 0.5]
          }}
          transition={{
            duration: 30 + Math.random() * 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 8
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const smsMessages = [
    {
      sender: "StockTracker AI",
      time: "2:30 PM",
      content: [
        "Hello Santiago 👋",
        "Tesla Inc. (TSLA) surged +7.36% to $395.94",
        "The sharp rise is linked to record compensation proposal for CEO Elon Musk and optimism on Tesla's AI/robotics future.",
        "Best regards,",
        "Your Stock Tracker Bot 🤖"
      ]
    },
    {
      sender: "StockTracker AI",
      time: "9:15 AM",
      content: [
        "Good morning! 🌅",
        "Apple Inc. (AAPL) dropped -2.84% to $174.12",
        "The decline follows concerns over iPhone sales in China and supply chain disruptions. Consider this a buying opportunity.",
        "Stay informed,",
        "Your Stock Tracker Bot 📱"
      ]
    },
    {
      sender: "StockTracker AI",
      time: "4:00 PM",
      content: [
        "Market close update 📊",
        "NVIDIA Corp. (NVDA) climbed +5.23% to $891.45",
        "Strong earnings beat and AI chip demand continue to drive growth. Data center revenue up 28% YoY.",
        "Happy trading,",
        "Your Stock Tracker Bot 🚀"
      ]
    },
    {
      sender: "StockTracker AI",
      time: "11:45 AM",
      content: [
        "Portfolio Alert 💼",
        "Microsoft Corp. (MSFT) gained +1.92% to $428.67",
        "Azure cloud services showing strong growth. Q3 results exceeded expectations with 31% revenue increase.",
        "Keep watching,",
        "Your Stock Tracker Bot ☁️"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % smsMessages.length);
    }, 4000); // Change message every 4 seconds

    return () => clearInterval(interval);
  }, [smsMessages.length]);

  return (
    <div className="App">
      <BackgroundAnimation />
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <Zap className="nav-icon" />
            <span>StockTracker AI</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#pricing">Pricing</a>
            <button className="nav-cta">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Smart Stock Insights
            <br />
            <span className="hero-gradient">Delivered to Your Phone</span>
          </h1>
          <p className="hero-subtitle">
            Get personalized stock alerts with AI-powered analysis sent directly to your SMS.
            Never miss market opportunities again.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">
              Start Free Trial
              <ArrowRight className="btn-icon" />
            </button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
          <div className="hero-social-proof">
            <p>Trusted by 10,000+ investors</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="star-filled" />
              ))}
              <span>4.9/5 rating</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-demo"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="sms-message">
                <div className="message-header">
                  <span className="sender">{smsMessages[currentMessageIndex].sender}</span>
                  <span className="time">{smsMessages[currentMessageIndex].time}</span>
                </div>
                <motion.div
                  className="message-content"
                  key={currentMessageIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {smsMessages[currentMessageIndex].content.map((line, index) => {
                    if (index === 1) {
                      // This is the stock info line with price change
                      const parts = line.split(/([+-]\d+\.\d+%)/); // Split on price change pattern
                      return (
                        <p key={index}>
                          {parts.map((part, partIndex) => {
                            if (part.match(/([+-]\d+\.\d+%)/)) {
                              const isPositive = part.startsWith('+');
                              return (
                                <span key={partIndex} className={isPositive ? 'positive' : 'negative'}>
                                  {part}
                                </span>
                              );
                            }
                            return <span key={partIndex}>{part}</span>;
                          })}
                        </p>
                      );
                    }
                    return <p key={index}>{line}</p>;
                  })}
                </motion.div>
              </div>
              <div className="message-indicators">
                {smsMessages.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator ${index === currentMessageIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Everything you need to stay ahead</h2>
            <p>Powerful features designed for the modern investor</p>
          </motion.div>

          <div className="features-grid">
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Smartphone />
              </div>
              <h3>Smart SMS Alerts</h3>
              <p>Get real-time stock updates with AI-powered insights delivered straight to your phone. No app required.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Clock />
              </div>
              <h3>Custom Scheduling</h3>
              <p>Set your preferred times to receive updates. Morning briefings, closing bell summaries, or real-time alerts.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <PieChart />
              </div>
              <h3>Portfolio Tracking</h3>
              <p>Monitor multiple stocks and get comprehensive portfolio insights with performance analytics.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <TrendingUp />
              </div>
              <h3>AI Analysis</h3>
              <p>Our AI explains market movements, identifies trends, and provides context you need to make informed decisions.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Shield />
              </div>
              <h3>Secure & Private</h3>
              <p>Your data is encrypted and secure. We never share your information or trading activity with third parties.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <BarChart3 />
              </div>
              <h3>Advanced Metrics</h3>
              <p>Track volatility, volume, market cap changes, and other key metrics that matter to your investment strategy.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>How it works</h2>
            <p>Get started in under 2 minutes</p>
          </motion.div>

          <div className="steps">
            <motion.div
              className="step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Add Your Stocks</h3>
                <p>Enter the stock symbols you want to track. Add as many as you want to your personalized watchlist.</p>
              </div>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Set Your Schedule</h3>
                <p>Choose when you want to receive updates. Daily summaries, real-time alerts, or custom intervals.</p>
              </div>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Get Smart Insights</h3>
                <p>Receive AI-powered analysis and explanations via SMS. Stay informed without constantly checking apps.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Simple, transparent pricing</h2>
            <p>Choose the plan that fits your investment style</p>
          </motion.div>

          <div className="pricing-grid">
            <motion.div
              className="pricing-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Starter</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">2</span>
                <span className="period">/month</span>
              </div>
              <ul className="features-list">
                <li><CheckCircle className="check-icon" /> Track up to 5 stocks</li>
                <li><CheckCircle className="check-icon" /> Daily SMS updates</li>
                <li><CheckCircle className="check-icon" /> Basic AI insights</li>
                <li><CheckCircle className="check-icon" /> Email support</li>
              </ul>
              <button className="btn-outline">Start Free Trial</button>
            </motion.div>

            <motion.div
              className="pricing-card featured"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="popular-badge">Most Popular</div>
              <h3>Pro</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">8</span>
                <span className="period">/month</span>
              </div>
              <ul className="features-list">
                <li><CheckCircle className="check-icon" /> Track unlimited stocks</li>
                <li><CheckCircle className="check-icon" /> Real-time alerts</li>
                <li><CheckCircle className="check-icon" /> Advanced AI analysis</li>
                <li><CheckCircle className="check-icon" /> Portfolio insights</li>
                <li><CheckCircle className="check-icon" /> Custom scheduling</li>
                <li><CheckCircle className="check-icon" /> Priority support</li>
              </ul>
              <button className="btn-primary">Start Free Trial</button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Loved by investors worldwide</h2>
          </motion.div>

          <div className="testimonials-grid">
            <motion.div
              className="testimonial"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star-filled" />
                ))}
              </div>
              <p>"Finally, stock tracking that doesn't require constant app checking. The AI insights are incredibly helpful for understanding market movements."</p>
              <div className="author">
                <strong>Sarah Chen</strong>
                <span>Portfolio Manager</span>
              </div>
            </motion.div>

            <motion.div
              className="testimonial"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star-filled" />
                ))}
              </div>
              <p>"The custom scheduling feature is perfect for my lifestyle. I get my morning briefing with coffee and evening updates after work."</p>
              <div className="author">
                <strong>Michael Rodriguez</strong>
                <span>Day Trader</span>
              </div>
            </motion.div>

            <motion.div
              className="testimonial"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star-filled" />
                ))}
              </div>
              <p>"Simple, clean, and effective. No clutter, just the information I need to make informed investment decisions."</p>
              <div className="author">
                <strong>Emma Thompson</strong>
                <span>Retail Investor</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Start making smarter investment decisions today</h2>
            <p>Join thousands of investors who trust StockTracker AI for their market insights</p>
            <div className="cta-buttons">
              <button className="btn-primary large">
                Start Free Trial
                <ArrowRight className="btn-icon" />
              </button>
              <button className="btn-secondary large">Schedule Demo</button>
            </div>
            <p className="cta-note">No credit card required • 14-day free trial • Cancel anytime</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <Zap className="nav-icon" />
                <span>StockTracker AI</span>
              </div>
              <p>Smart stock insights delivered to your phone</p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#">API</a>
                <a href="#">Security</a>
              </div>

              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
              </div>

              <div className="footer-column">
                <h4>Support</h4>
                <a href="#">Help Center</a>
                <a href="#">Documentation</a>
                <a href="#">Status</a>
                <a href="#">Community</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 StockTracker AI. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
