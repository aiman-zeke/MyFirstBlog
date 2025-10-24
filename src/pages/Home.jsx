import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import Newsletter from '../components/Newsletter';
import { getRecentPosts } from '../data/blogPosts';
import { Link } from 'react-router-dom';

export default function Home() {
  const recentPosts = getRecentPosts(3);

  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent animate-scan-line"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-neon-pink to-transparent animate-scan-line"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-orbitron text-neon-cyan mb-4 text-shadow-neon animate-neon-glow">
              LATEST.AI_INSIGHTS
            </h2>
            <p className="text-lg text-neon-cyan/70 max-w-2xl mx-auto font-mono">
              Accessing quantum developments in neural agents and AI evolution protocols...
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/blog"
              className="cyber-btn-primary px-8 py-3 text-lg font-medium"
            >
              ACCESS_ALL_DATA
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cyber-darker relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="cyber-card border border-neon-cyan/30 p-8 bg-cyber-dark/50 backdrop-blur-sm">
              <div className="text-4xl font-bold font-orbitron text-neon-cyan mb-2 animate-neon-pulse">50+</div>
              <div className="text-lg text-neon-cyan/70 font-mono">NEURAL_ARTICLES</div>
            </div>
            <div className="cyber-card border border-neon-pink/30 p-8 bg-cyber-dark/50 backdrop-blur-sm">
              <div className="text-4xl font-bold font-orbitron text-neon-pink mb-2 animate-neon-pulse">10K+</div>
              <div className="text-lg text-neon-pink/70 font-mono">ACTIVE_USERS</div>
            </div>
            <div className="cyber-card border border-neon-purple/30 p-8 bg-cyber-dark/50 backdrop-blur-sm">
              <div className="text-4xl font-bold font-orbitron text-neon-purple mb-2 animate-neon-pulse">5+</div>
              <div className="text-lg text-neon-purple/70 font-mono">AI_EXPERTS</div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
