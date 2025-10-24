import { authors } from '../data/authors';

export default function About() {
  const authorList = Object.values(authors);

  return (
    <div className="pt-24 sm:pt-28 pb-12 bg-cyber-dark min-h-screen relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent animate-scan-line"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-neon-pink to-transparent animate-scan-line" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-neon-purple to-transparent animate-scan-line" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cyberpunk Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-orbitron text-neon-cyan mb-6 text-shadow-neon animate-neon-glow">ABOUT.NEURAL_HUB</h1>
          <p className="text-xl text-neon-cyan/70 leading-relaxed font-mono">
            {`> We operate at the quantum frontier of AI research, transmitting neural insights about autonomous systems and the cybernetic future of artificial intelligence...`}
          </p>
        </div>

        {/* Cyberpunk Mission Section */}
        <section className="cyber-card border-2 border-neon-cyan/20 p-8 bg-cyber-dark/70 backdrop-blur-sm mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent animate-hologram"></div>
          
          <h2 className="text-2xl font-bold font-orbitron text-neon-cyan mb-6 relative z-10">NEURAL.MISSION_PROTOCOL</h2>
          <div className="prose prose-lg max-w-none text-neon-cyan/80 font-mono relative z-10">
            <p className="mb-4">
              {`> At Neural Hub, we interface with quantum AI evolution protocols that will fundamentally transform human-machine interaction matrices. Our mission: transmit cutting-edge neural insights into autonomous systems, preparing organic minds for the cybernetic future.`}
            </p>
            <p className="mb-4">
              {`> Whether you're a quantum AI researcher, cybernetic developer architecting agent systems, or a curious neural entity exploring artificial consciousness, our data streams decode breakthrough technologies shaping tomorrow's autonomous digital realm.`}
            </p>
            <p>
              {`> We process breakthrough neural models, agent architectures, multimodal consciousness systems, digital environment interfaces, and the quantum implications of increasingly sophisticated artificial intelligence matrices.`}
            </p>
          </div>
        </section>

        {/* Cyberpunk What We Cover */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-orbitron text-neon-pink mb-6 text-shadow-neon">NEURAL.COVERAGE_PROTOCOLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="cyber-card border border-neon-cyan/30 hover:border-neon-cyan p-6 bg-cyber-dark/50 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-neon-cyan mb-3 relative z-10">
                <svg className="w-8 h-8 animate-neon-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-orbitron text-neon-cyan mb-2 relative z-10">LANGUAGE.MODELS</h3>
              <p className="text-neon-cyan/70 font-mono text-sm relative z-10">
                GPT, Claude, Gemini neural networks powering next-gen cybernetic AI agents.
              </p>
            </div>
            
            <div className="cyber-card border border-neon-pink/30 hover:border-neon-pink p-6 bg-cyber-dark/50 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-neon-pink mb-3 relative z-10">
                <svg className="w-8 h-8 animate-neon-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{animationDelay: '0.5s'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-orbitron text-neon-pink mb-2 relative z-10">AUTONOMOUS.SYSTEMS</h3>
              <p className="text-neon-pink/70 font-mono text-sm relative z-10">
                Digital interface agents, quantum model systems, AI environment interaction protocols.
              </p>
            </div>
            
            <div className="cyber-card border border-neon-purple/30 hover:border-neon-purple p-6 bg-cyber-dark/50 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-neon-purple mb-3 relative z-10">
                <svg className="w-8 h-8 animate-neon-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{animationDelay: '1s'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-orbitron text-neon-purple mb-2 relative z-10">AI.RESEARCH</h3>
              <p className="text-neon-purple/70 font-mono text-sm relative z-10">
                Quantum research papers, neural architectures, cybernetic advances from AI laboratories.
              </p>
            </div>
            
            <div className="cyber-card border border-neon-cyan/30 hover:border-neon-cyan p-6 bg-cyber-dark/50 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-neon-cyan mb-3 relative z-10">
                <svg className="w-8 h-8 animate-neon-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{animationDelay: '1.5s'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-orbitron text-neon-cyan mb-2 relative z-10">ETHICS.SAFETY</h3>
              <p className="text-neon-cyan/70 font-mono text-sm relative z-10">
                Neural alignment protocols, quantum safety matrices, responsible cybernetic development.
              </p>
            </div>
          </div>
        </section>

        {/* Cyberpunk Team Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-orbitron text-neon-purple mb-6 text-shadow-neon">NEURAL.AUTHORS_DATABASE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorList.map((author) => (
              <div key={author.id} className="cyber-card border border-neon-purple/30 hover:border-neon-purple p-6 bg-cyber-dark/50 backdrop-blur-sm text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-24 h-24 rounded border-2 border-neon-purple/30 mx-auto mb-4 group-hover:border-neon-purple transition-all duration-300 relative z-10 filter brightness-110"
                />
                <h3 className="text-lg font-bold font-orbitron text-neon-purple mb-2 relative z-10">{author.name.toUpperCase()}</h3>
                <p className="text-neon-purple/70 font-mono text-sm mb-4 relative z-10">{`> ${author.bio}`}</p>
                <div className="flex justify-center space-x-4 relative z-10">
                  {author.social.twitter && (
                    <a
                      href={`https://twitter.com/${author.social.twitter.substring(1)}`}
                      className="text-neon-cyan hover:text-neon-pink transition-colors duration-300 hover:shadow-neon-glow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 animate-neon-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  )}
                  {author.social.github && (
                    <a
                      href={`https://github.com/${author.social.github}`}
                      className="text-neon-pink hover:text-neon-cyan transition-colors duration-300 hover:shadow-neon-glow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 animate-neon-pulse" fill="currentColor" viewBox="0 0 20 20" style={{animationDelay: '0.5s'}}>
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                  {author.social.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${author.social.linkedin}`}
                      className="text-neon-purple hover:text-neon-cyan transition-colors duration-300 hover:shadow-neon-glow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 animate-neon-pulse" fill="currentColor" viewBox="0 0 20 20" style={{animationDelay: '1s'}}>
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-blue-600 mb-3">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Content</h3>
              <p className="text-gray-600">
                Every article is thoroughly researched, tested, and reviewed to ensure accuracy and usefulness.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-green-600 mb-3">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community First</h3>
              <p className="text-gray-600">
                We're committed to fostering a supportive community where developers can learn and grow together.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-purple-600 mb-3">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practical Focus</h3>
              <p className="text-gray-600">
                Our tutorials and guides focus on real-world applications and practical skills you can use immediately.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}