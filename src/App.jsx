import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeSimple from './pages/HomeSimple';
import BlogSimple from './pages/BlogSimple';
import BlogPostSimple from './pages/BlogPostSimple';
import BlogPostGPT5 from './pages/BlogPostGPT5';
import AboutSimple from './pages/AboutSimple';
import ContactSimple from './pages/ContactSimple';
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeSimple />} />
          <Route path="/blog" element={<BlogSimple />} />
          <Route path="/blog/openai-gpt5-agents-multimodal-interactions" element={<BlogPostGPT5 />} />
          <Route path="/blog/:slug" element={<BlogPostSimple />} />
          <Route path="/about" element={<AboutSimple />} />
          <Route path="/contact" element={<ContactSimple />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
