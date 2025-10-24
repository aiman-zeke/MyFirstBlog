import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { blogPosts, getAllCategories, getAllTags } from '../data/blogPosts';

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedTag, setSelectedTag] = useState('');

  const categories = getAllCategories();
  const tags = getAllTags();

  useEffect(() => {
    let filtered = [...blogPosts];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, selectedTag]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedTag('');
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
    setSelectedCategory('');
    setSearchParams({});
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
    setSearchParams({});
  };

  return (
    <div className="pt-24 sm:pt-28 pb-12 bg-cyber-dark min-h-screen relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent animate-scan-line"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-pink to-transparent animate-scan-line" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-neon-purple to-transparent animate-scan-line" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cyberpunk Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-orbitron text-neon-cyan mb-4 text-shadow-neon animate-neon-glow">NEURAL.BLOG_DATABASE</h1>
          <p className="text-lg text-neon-cyan/70 max-w-2xl mx-auto font-mono">
            {`> Accessing quantum archives of AI research, neural development, and cybernetic technologies...`}
          </p>
        </div>

        {/* Cyberpunk Search and Filters */}
        <div className="cyber-card border-2 border-neon-cyan/20 p-6 bg-cyber-dark/70 backdrop-blur-sm mb-8 relative overflow-hidden">
          {/* Holographic overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-pink/5 animate-hologram"></div>
          
          <div className="flex flex-col lg:flex-row gap-4 relative z-10">
            {/* Cyberpunk Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="SEARCH_NEURAL_ARCHIVES..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-cyber-dark/50 border border-neon-cyan/30 rounded text-neon-cyan placeholder-neon-cyan/50 font-mono focus:border-neon-cyan focus:shadow-neon-glow transition-all duration-300"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-neon-cyan/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Cyberpunk Category Filter */}
            <div className="lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full px-4 py-3 bg-cyber-dark/50 border border-neon-pink/30 rounded text-neon-pink font-mono focus:border-neon-pink focus:shadow-neon-glow transition-all duration-300"
              >
                <option value="">ALL_PROTOCOLS</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            {/* Cyberpunk Clear Filters */}
            {(searchTerm || selectedCategory || selectedTag) && (
              <button
                onClick={clearFilters}
                className="cyber-btn px-4 py-3 text-neon-purple border border-neon-purple/30 hover:border-neon-purple hover:shadow-neon-glow font-mono font-bold transition-all duration-300"
              >
                RESET.EXE
              </button>
            )}
          </div>

          {/* Cyberpunk Tags */}
          <div className="mt-4 relative z-10">
            <p className="text-sm font-bold font-mono text-neon-cyan mb-2">QUANTUM_TAGS:</p>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 8).map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagChange(tag)}
                  className={`px-3 py-1 text-xs font-mono font-bold border transition-all duration-300 hover-lift ${
                    selectedTag === tag
                      ? 'bg-cyber-gradient-1/20 border-neon-cyan text-neon-cyan shadow-neon-glow'
                      : 'bg-cyber-dark/30 border-neon-purple/30 text-neon-purple/70 hover:border-neon-purple hover:text-neon-purple hover:shadow-neon-glow'
                  }`}
                >
                  #{tag.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cyberpunk Results Count */}
        <div className="mb-6">
          <p className="text-neon-cyan/70 font-mono">
            {`> ${filteredPosts.length} NEURAL_ARCHIVE${filteredPosts.length !== 1 ? 'S' : ''} RETRIEVED`}
            {selectedCategory && ` [PROTOCOL: "${selectedCategory.toUpperCase()}"]`}
            {selectedTag && ` [TAG: "${selectedTag.toUpperCase()}"]`}
            {searchTerm && ` [QUERY: "${searchTerm.toUpperCase()}"]`}
          </p>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="cyber-card border border-neon-pink/30 p-8 bg-cyber-dark/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 to-transparent animate-hologram"></div>
              <div className="text-neon-pink/60 mb-4 relative z-10">
                <svg className="mx-auto h-12 w-12 animate-glitch" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-orbitron text-neon-pink mb-2 relative z-10">NO_NEURAL_ARCHIVES_FOUND</h3>
              <p className="text-neon-pink/60 font-mono mb-4 relative z-10">{`> Database query returned null. Adjust search parameters or reset filters.`}</p>
              <button
                onClick={clearFilters}
                className="cyber-btn text-neon-cyan border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-neon-glow font-mono font-bold relative z-10"
              >
                RESET_FILTERS.EXE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}