import { Link } from 'react-router-dom';

// Latest blog posts data - same as BlogSimple
const getLatestPosts = () => [
  {
    id: 1,
    title: "Claude 4 and Sonnet 4.5: The Next Generation of AI Agents",
    slug: "claude-4-sonnet-45-next-generation-ai-agents",
    excerpt: "Anthropic's latest Claude 4 and Sonnet 4.5 models represent a revolutionary leap in AI agents capability with computer use and autonomous task execution.",
    category: "AI Agents",
    publishedAt: "2024-10-20",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "OpenAI GPT-5 Agents: Revolutionizing Multi-Modal AI Interactions",
    slug: "openai-gpt5-agents-multimodal-interactions",
    excerpt: "GPT-5's upcoming agent capabilities promise unprecedented multi-modal reasoning, video understanding, and real-time interaction across platforms.",
    category: "AI Agents",
    publishedAt: "2024-10-22",
    readTime: 10,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Google Gemini 2.0: Next-Gen Agentic AI with Project Astra",
    slug: "google-gemini-2-project-astra-agentic-ai",
    excerpt: "Google's Gemini 2.0 and Project Astra are set to deliver real-time multimodal AI agents that can see, hear, and interact with the world seamlessly.",
    category: "AI Agents",
    publishedAt: "2024-10-21",
    readTime: 9,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Microsoft Copilot Studio: Building Custom AI Agents for Enterprise",
    slug: "microsoft-copilot-studio-custom-ai-agents",
    excerpt: "Microsoft's Copilot Studio empowers businesses to create specialized AI agents tailored to their workflows, from customer service to data analysis.",
    category: "Enterprise AI",
    publishedAt: "2024-10-19",
    readTime: 12,
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Meta's AI Agents: From Ray-Ban Smart Glasses to Metaverse Assistants",
    slug: "meta-ai-agents-rayban-metaverse-assistants",
    excerpt: "Meta is integrating AI agents across their ecosystem, from smart glasses that understand your environment to virtual assistants in the metaverse.",
    category: "AI Agents",
    publishedAt: "2024-10-17",
    readTime: 11,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Perplexity AI Pro: The Future of Research Agents and Information Discovery",
    slug: "perplexity-ai-pro-research-agents-discovery",
    excerpt: "Perplexity's AI Pro agents are transforming how we research and discover information with real-time web search and intelligent synthesis.",
    category: "AI Research",
    publishedAt: "2024-10-16",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function HomeSimple() {
  const recentPosts = getLatestPosts().slice(0, 3); // Get 3 most recent posts
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-8 font-['Playfair_Display'] leading-tight">
              <span className="gradient-text block mb-2">AI Agents</span>
              <span className="text-slate-800">Hub</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Discover the fascinating world of <span className="gradient-text font-semibold">artificial intelligence</span>, 
              explore cutting-edge <span className="gradient-warm font-semibold">autonomous systems</span>, 
              and stay ahead of the <span className="gradient-accent font-semibold">AI revolution</span> 
              shaping our digital future.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/blog"
                className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl group flex items-center space-x-2"
              >
                <span>Explore Articles</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simple content section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest AI Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover cutting-edge developments in AI agents, autonomous systems, and the future of artificial intelligence.
            </p>
          </div>
          
          {/* Latest blog posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="card card-hover group">
                {/* Featured Image */}
                <div className="relative overflow-hidden image-rounded">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="badge badge-primary">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Read Time */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700 flex items-center space-x-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 font-['Playfair_Display'] leading-tight">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Author and Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="text-sm text-slate-500">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group/btn inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                    >
                      <span>Read more</span>
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with AI Agent News
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter and get the latest articles about AI agents delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}