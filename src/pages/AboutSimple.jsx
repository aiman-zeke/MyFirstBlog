export default function AboutSimple() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Playfair_Display']">
            About AI Agents Hub
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Your trusted source for insights into artificial intelligence and autonomous systems.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg mx-auto">
          <h2>Our Mission</h2>
          <p>
            AI Agents Hub is dedicated to exploring the fascinating world of artificial intelligence, 
            autonomous systems, and emerging technologies that are reshaping our digital future.
          </p>

          <h2>What We Cover</h2>
          <ul>
            <li><strong>AI Research</strong> - Latest breakthroughs in artificial intelligence</li>
            <li><strong>Autonomous Systems</strong> - Self-driving cars, robotics, and smart automation</li>
            <li><strong>Machine Learning</strong> - Deep learning, neural networks, and algorithms</li>
            <li><strong>AI Safety</strong> - Ethical considerations and responsible AI development</li>
          </ul>

          <h2>Our Approach</h2>
          <p>
            We believe in making complex AI concepts accessible to everyone, from researchers and 
            developers to business leaders and curious minds. Our content bridges the gap between 
            cutting-edge research and practical applications.
          </p>

          <h2>Expert Contributors</h2>
          <p>
            Our team consists of AI researchers, machine learning engineers, and technology analysts 
            who are passionate about sharing knowledge and insights from the rapidly evolving field 
            of artificial intelligence.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3>Stay Connected</h3>
            <p>
              Follow our latest updates and join the conversation about the future of AI. 
              Subscribe to our newsletter and be the first to know about new articles and insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}