import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  return (
    <article className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="badge badge-primary">
          {post.category}
        </span>
        <time className="text-sm text-gray-500">
          {post.date}
        </time>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        <Link to={'/blog/' + post.slug} className="hover:text-blue-600 transition-colors">
          {post.title}
        </Link>
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            className="w-8 h-8 rounded-full"
            src={post.author.avatar}
            alt={post.author.name}
          />
          <span className="text-sm text-gray-700">{post.author.name}</span>
        </div>
        
        <Link
          to={'/blog/' + post.slug}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          Read more 
        </Link>
      </div>
    </article>
  );
}
