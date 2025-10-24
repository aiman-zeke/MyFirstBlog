import { useParams, Link } from 'react-router-dom';

export default function BlogPostSimple() {
  const { slug } = useParams();

  // Enhanced blog post content with better structure
  const post = {
    title: "Claude 4 and Sonnet 4.5: The Next Generation of AI Agents",
    publishedAt: "2024-10-20",
    readTime: 8,
    category: "AI Research",
    author: "Dr. Sarah Chen",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Anthropic has recently unveiled Claude 4 and Claude Sonnet 4.5, marking a significant milestone in the evolution of AI agents. These models represent a quantum leap in autonomous AI capabilities, bringing us closer to truly intelligent digital assistants."
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Blog</span>
          </Link>

          <div className="text-center">
            <div className="mb-4">
              <span className="badge badge-primary">{post.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-['Playfair_Display'] leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-slate-600">
              <div className="flex items-center space-x-2">
                <span>By {post.author}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
        <div className="image-rounded image-elevated">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Article Introduction */}
        <div className="prose prose-xl mx-auto mb-12">
          <p className="text-xl leading-relaxed text-slate-700 font-light border-l-4 border-blue-500 pl-6 italic bg-blue-50 p-6 rounded-r-lg">
            {post.excerpt}
          </p>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg mx-auto space-y-8">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-['Playfair_Display'] text-center">
              Revolutionary Computer Use Capabilities
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Claude 4 introduces groundbreaking computer use functionality, allowing the AI to interact directly with user interfaces. This represents a fundamental shift from text-only interactions to multimodal autonomous operation.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Key Capabilities
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Navigate websites and applications autonomously</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Click buttons, fill forms, and interact with software interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Screenshot analysis and visual understanding of digital environments</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Execute complex multi-step tasks across different applications</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-['Playfair_Display'] text-center">
              Enhanced Reasoning and Planning
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-8">
              The Claude 4 architecture incorporates advanced reasoning capabilities that represent a significant leap forward in AI autonomous decision-making and strategic thinking.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Multi-Step Problem Solving</h3>
                <p className="text-slate-600">Break down complex problems into manageable steps and execute them sequentially with maintained context.</p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Dynamic Adaptation</h3>
                <p className="text-slate-600">Adapt approaches based on real-time feedback, adjusting strategies when initial attempts don't succeed.</p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Memory Management</h3>
                <p className="text-slate-600">Extended context windows up to 1M tokens for coherent conversations across extended interactions.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-['Playfair_Display'] text-center">
              Agent Skills and Autonomy
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Claude Sonnet 4.5 introduces "Agent Skills" - specialized capabilities that allow the AI to operate with unprecedented autonomy and sophistication.
            </p>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    Development & Research
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Code autonomously with advanced debugging</li>
                    <li>• Conduct comprehensive research across sources</li>
                    <li>• Create and edit files with deep understanding</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                    Integration & Automation
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Seamless integration with external tools</li>
                    <li>• API management and workflow automation</li>
                    <li>• Cross-platform task orchestration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-['Playfair_Display'] text-center">
              Real-World Applications
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-8">
              These advancements open up exciting possibilities across various domains, transforming how we approach complex tasks and workflows.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H6a2 2 0 00-2-2V4m16 2a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h16z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Business Automation</h4>
                    <p className="text-slate-600">Streamline workflows, automate data entry, and manage complex business processes with intelligent decision-making.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Creative Assistance</h4>
                    <p className="text-slate-600">Support content creation, design workflows, and creative problem-solving with AI-powered insights.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Research & Development</h4>
                    <p className="text-slate-600">Accelerate scientific research, conduct literature reviews, and assist in hypothesis generation.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Educational Support</h4>
                    <p className="text-slate-600">Provide personalized tutoring, curriculum development, and adaptive learning experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 font-['Playfair_Display'] text-center">
              Looking Forward
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-blue-100">
              As we witness these remarkable capabilities, it's essential to consider the implications for the future of work and human-AI collaboration. The key lies in leveraging these tools to augment human capabilities rather than replace them.
            </p>
            <p className="text-lg leading-relaxed text-blue-100">
              The development of Claude 4 and Sonnet 4.5 represents just the beginning of a new era in AI agents. As these systems continue to evolve, we can expect even more sophisticated autonomous capabilities that will reshape how we interact with technology.
            </p>
          </section>

        </div>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SC</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">{post.author}</p>
                <p className="text-sm text-slate-600">AI Research Specialist</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200">
                Share Article
              </button>
              <Link
                to="/blog"
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors duration-200"
              >
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}