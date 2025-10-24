import { Link } from 'react-router-dom';

export default function BlogSimple() {
  // Latest AI agents blog posts
  const posts = [
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
    },
    {
      id: 7,
      title: "AutoGPT and AgentGPT: Open Source AI Agents Taking Over Task Automation",
      slug: "autogpt-agentgpt-opensource-task-automation",
      excerpt: "Open source AI agents like AutoGPT and AgentGPT are democratizing autonomous task execution, enabling anyone to build powerful AI workflows.",
      category: "Open Source AI",
      publishedAt: "2024-10-14",
      readTime: 13,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Salesforce Einstein AI Agents: Transforming Customer Relationship Management",
      slug: "salesforce-einstein-ai-agents-crm-transformation",
      excerpt: "Salesforce's Einstein AI agents are revolutionizing CRM with predictive analytics, automated workflows, and intelligent customer insights.",
      category: "Enterprise AI",
      publishedAt: "2024-10-12",
      readTime: 10,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Amazon's Alexa AI Agents 2025: Beyond Voice to Proactive Assistance",
      slug: "amazon-alexa-ai-agents-2025-proactive-assistance",
      excerpt: "Amazon's next-generation Alexa agents will move beyond voice commands to proactive assistance, anticipating needs and taking autonomous actions.",
      category: "AI Agents",
      publishedAt: "2024-10-10",
      readTime: 8,
      image: "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      title: "Understanding Autonomous Decision-Making Systems",
      slug: "understanding-autonomous-decision-making-systems",
      excerpt: "Autonomous systems are reshaping industries from transportation to healthcare with advanced decision-making algorithms.",
      category: "Autonomous Systems",
      publishedAt: "2024-10-08",
      readTime: 12,
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      title: "AI Safety and Ethical Considerations in Agent Development",
      slug: "ai-safety-ethical-considerations-agent-development",
      excerpt: "As AI agents become more powerful and autonomous, ensuring their safety and ethical behavior becomes increasingly crucial for society.",
      category: "AI Safety",
      publishedAt: "2024-10-05",
      readTime: 10,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 12,
      title: "The Rise of Specialized AI Agents: From Coding to Creative Writing",
      slug: "specialized-ai-agents-coding-creative-writing",
      excerpt: "Specialized AI agents are emerging for specific domains, from GitHub Copilot for coding to Jasper AI for marketing content creation.",
      category: "AI Agents",
      publishedAt: "2024-10-03",
      readTime: 9,
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Playfair_Display']">
              AI Blog Articles
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our latest insights into artificial intelligence, autonomous systems, and emerging technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="card card-hover">
              <div className="relative overflow-hidden image-rounded">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="badge badge-primary">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700">
                    {post.readTime} min read
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 font-['Playfair_Display']">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

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
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                  >
                    <span>Read more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}