import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-12 bg-cyber-dark min-h-screen relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent animate-scan-line"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-pink to-transparent animate-scan-line" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-neon-purple to-transparent animate-scan-line" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cyberpunk Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-orbitron text-neon-cyan mb-6 text-shadow-neon animate-neon-glow">NEURAL.INTERFACE</h1>
          <p className="text-xl text-neon-cyan/70 max-w-2xl mx-auto font-mono">
            {`> Establishing quantum communication protocol. Transmit your neural queries and we'll sync with your consciousness matrix.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cyberpunk Contact Form */}
          <div className="cyber-card border-2 border-neon-cyan/20 p-8 bg-cyber-dark/70 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent animate-hologram"></div>
            
            <h2 className="text-2xl font-bold font-orbitron text-neon-cyan mb-6 relative z-10">TRANSMIT.MESSAGE</h2>
            
            {isSubmitted && (
              <div className="mb-6 cyber-card border border-neon-pink bg-cyber-gradient-2/20 text-neon-pink px-4 py-3 relative z-10">
                <p className="font-bold font-mono">TRANSMISSION_SUCCESSFUL!</p>
                <p className="text-sm font-mono">{`> Neural link established. Response protocol initiated.`}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold font-mono text-neon-cyan mb-2">
                    USER.NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-cyber-dark/50 border border-neon-cyan/30 rounded text-neon-cyan placeholder-neon-cyan/50 font-mono focus:border-neon-cyan focus:shadow-neon-glow transition-all duration-300"
                    placeholder="Enter neural ID..."
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold font-mono text-neon-pink mb-2">
                    QUANTUM.EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-cyber-dark/50 border border-neon-pink/30 rounded text-neon-pink placeholder-neon-pink/50 font-mono focus:border-neon-pink focus:shadow-neon-glow transition-all duration-300"
                    placeholder="user@cybernet.matrix"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold font-mono text-neon-purple mb-2">
                  DATA.SUBJECT *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-cyber-dark/50 border border-neon-purple/30 rounded text-neon-purple placeholder-neon-purple/50 font-mono focus:border-neon-purple focus:shadow-neon-glow transition-all duration-300"
                  placeholder="Transmission protocol..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold font-mono text-neon-cyan mb-2">
                  NEURAL.MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-cyber-dark/50 border border-neon-cyan/30 rounded text-neon-cyan placeholder-neon-cyan/50 font-mono focus:border-neon-cyan focus:shadow-neon-glow transition-all duration-300"
                  placeholder="Initialize neural communication protocol..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="cyber-btn-primary w-full border-2 border-neon-pink text-neon-pink hover:text-white py-3 px-6 font-mono font-bold hover:shadow-neon-glow transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">TRANSMIT.DATA</span>
                <div className="absolute inset-0 bg-cyber-gradient-2 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>

          {/* Cyberpunk Contact Information */}
          <div className="space-y-8">
            {/* Cyberpunk Contact Methods */}
            <div className="cyber-card border border-neon-pink/30 p-8 bg-cyber-dark/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 to-transparent animate-hologram"></div>
              
              <h2 className="text-2xl font-bold font-orbitron text-neon-pink mb-6 relative z-10">QUANTUM.COMMUNICATION_CHANNELS</h2>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start">
                  <div className="text-neon-cyan mr-4 mt-1 animate-neon-pulse">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold font-orbitron text-neon-cyan">DIGITAL.MAIL</h3>
                    <p className="text-neon-cyan/70 font-mono text-sm">neural@cyberpunk.hub</p>
                    <p className="text-neon-cyan/70 font-mono text-sm">quantum@matrix.sys</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-neon-pink mr-4 mt-1 animate-neon-pulse" style={{animationDelay: '0.5s'}}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold font-orbitron text-neon-pink">NEURAL.COORDINATES</h3>
                    <p className="text-neon-pink/70 font-mono text-sm">
                      Sector_7G Cyberpunk_District<br />
                      Neo-Tokyo_Grid, NTG 2077<br />
                      Digital_Realm
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-neon-purple mr-4 mt-1 animate-neon-pulse" style={{animationDelay: '1s'}}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold font-orbitron text-neon-purple">NEURAL.FREQUENCY</h3>
                    <p className="text-neon-purple/70 font-mono text-sm">+1 (NEO) 207-7000</p>
                    <p className="text-xs text-neon-purple/50 font-mono">24/7 Quantum Support Active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cyberpunk FAQ Section */}
            <div className="cyber-card border border-neon-purple/30 p-8 bg-cyber-dark/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent animate-hologram"></div>
              
              <h2 className="text-2xl font-bold font-orbitron text-neon-purple mb-6 relative z-10">NEURAL.FAQ_PROTOCOLS</h2>
              
              <div className="space-y-6 relative z-10">
                <div className="border-l-4 border-neon-cyan/30 pl-4">
                  <h3 className="font-bold font-orbitron text-neon-cyan mb-2">DATA.STREAM_FREQUENCY?</h3>
                  <p className="text-neon-cyan/70 font-mono text-sm">
                    Our neural network publishes 2-3 quantum data streams per cycle, covering advanced cyberpunk protocols and digital consciousness programming.
                  </p>
                </div>

                <div className="border-l-4 border-neon-pink/30 pl-4">
                  <h3 className="font-bold font-orbitron text-neon-pink mb-2">EXTERNAL.CONTRIBUTIONS?</h3>
                  <p className="text-neon-pink/70 font-mono text-sm">
                    Yes! We welcome neural contributions from compatible consciousness streams. Upload your data packets and we'll initiate quantum handshake protocols.
                  </p>
                </div>

                <div className="border-l-4 border-neon-purple/30 pl-4">
                  <h3 className="font-bold font-orbitron text-neon-purple mb-2">CONSULTING.SERVICES?</h3>
                  <p className="text-neon-purple/70 font-mono text-sm">
                    Our cyberpunk collective offers neural consulting for selected high-priority missions. Transmit your requirements for compatibility analysis.
                  </p>
                </div>

                <div className="border-l-4 border-neon-cyan/30 pl-4">
                  <h3 className="font-bold font-orbitron text-neon-cyan mb-2">SYNC.PROTOCOLS?</h3>
                  <p className="text-neon-cyan/70 font-mono text-sm">
                    Connect to our neural network via quantum channels or follow our digital presence for real-time consciousness updates and system alerts.
                  </p>
                </div>
              </div>
            </div>

            {/* Cyberpunk Social Networks */}
            <div className="cyber-card border border-neon-cyan/30 p-8 bg-cyber-dark/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent animate-hologram"></div>
              
              <h2 className="text-2xl font-bold font-orbitron text-neon-cyan mb-6 relative z-10">NETWORK.CONNECTIONS</h2>
              
              <div className="flex space-x-6 relative z-10">
                <a
                  href="#"
                  className="cyber-card p-4 bg-neon-cyan/10 border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-neon-glow transition-all duration-300 transform hover:scale-110 group"
                >
                  <svg className="w-8 h-8 text-neon-cyan group-hover:animate-neon-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                
                <a
                  href="#"
                  className="cyber-card p-4 bg-neon-pink/10 border border-neon-pink/30 hover:border-neon-pink hover:shadow-neon-glow transition-all duration-300 transform hover:scale-110 group"
                >
                  <svg className="w-8 h-8 text-neon-pink group-hover:animate-neon-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
                
                <a
                  href="#"
                  className="cyber-card p-4 bg-neon-purple/10 border border-neon-purple/30 hover:border-neon-purple hover:shadow-neon-glow transition-all duration-300 transform hover:scale-110 group"
                >
                  <svg className="w-8 h-8 text-neon-purple group-hover:animate-neon-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}