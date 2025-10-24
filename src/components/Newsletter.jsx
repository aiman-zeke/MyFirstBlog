import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-cyber-darker py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent animate-scan-line"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-pink to-transparent animate-scan-line"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold font-orbitron text-neon-cyan mb-4 text-shadow-neon animate-neon-glow">
          NEURAL.NETWORK_SYNC
        </h2>
        <p className="text-lg text-neon-cyan/70 mb-8 font-mono">
          {`> Link to our cybernetic feed and receive encrypted AI intelligence transmissions...`}
        </p>
        
        {isSubscribed ? (
          <div className="cyber-card border border-neon-green/30 bg-neon-green/10 text-neon-green px-6 py-4 max-w-md mx-auto animate-neon-pulse">
            <p className="font-medium font-orbitron">SYNC.ESTABLISHED</p>
            <p className="text-sm font-mono">Neural link activated. Transmission protocols initiated.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="neural.interface@cyberdomain.io"
                className="flex-1 px-4 py-3 bg-cyber-dark/70 border border-neon-cyan/30 text-neon-cyan font-mono placeholder-neon-cyan/50 focus:border-neon-cyan focus:shadow-neon-glow backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="cyber-btn-primary px-6 py-3 font-medium"
              >
                SYNC.NOW
              </button>
            </div>
            <p className="text-sm text-neon-cyan/50 mt-3 font-mono">
              {`> Encrypted neural feed. Zero spam protocols. Disconnect.available`}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}