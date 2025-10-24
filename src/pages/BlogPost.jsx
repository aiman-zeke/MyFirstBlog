import { useParams, Link, Navigate } from 'react-router-dom';
import { getPostBySlug, getRecentPosts } from '../data/blogPosts';
import { authors } from '../data/authors';
import BlogCard from '../components/BlogCard';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const recentPosts = getRecentPosts(3);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const author = authors[post.authorId];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderContent = (content) => {
    // Simple markdown-like rendering
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-900">{line.substring(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-gray-900">{line.substring(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold mt-4 mb-2 text-gray-900">{line.substring(4)}</h3>;
        }
        if (line.startsWith('```')) {
          return null; // Handle code blocks separately if needed
        }
        if (line.trim() === '') {
          return <br key={index} />;
        }
        return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{line}</p>;
      });
  };

  return (
    <div className="pt-24 sm:pt-28 pb-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-gray-700">Blog</Link>
            <span>/</span>
            <span className="text-gray-700">{post.title}</span>
          </div>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-semibold">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author and Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 border-t border-b border-gray-200">
            <div className="flex items-center mb-4 sm:mb-0">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-900">{author.name}</p>
                <p className="text-gray-600 text-sm">{formatDate(post.publishedAt)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>{post.readTime} min read</span>
              <div className="flex space-x-2">
                {author.social.twitter && (
                  <a href={`https://twitter.com/${author.social.twitter.substring(1)}`} className="hover:text-blue-500">
                    Twitter
                  </a>
                )}
                {author.social.github && (
                  <a href={`https://github.com/${author.social.github}`} className="hover:text-gray-700">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-800 leading-relaxed">
            {renderContent(post.content)}
          </div>
        </article>

        {/* Tags */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                to={`/blog?tag=${tag}`}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
          <div className="flex items-start">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-16 h-16 rounded-full mr-4 flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About {author.name}</h3>
              <p className="text-gray-600 mb-3">{author.bio}</p>
              <div className="flex space-x-4">
                {author.social.twitter && (
                  <a href={`https://twitter.com/${author.social.twitter.substring(1)}`} className="text-blue-500 hover:text-blue-600">
                    {author.social.twitter}
                  </a>
                )}
                {author.social.github && (
                  <a href={`https://github.com/${author.social.github}`} className="text-gray-700 hover:text-gray-800">
                    GitHub
                  </a>
                )}
                {author.social.linkedin && (
                  <a href={`https://linkedin.com/in/${author.social.linkedin}`} className="text-blue-700 hover:text-blue-800">
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}