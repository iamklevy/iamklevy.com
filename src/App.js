import './App.css';
import posts from "./posts"; 
import Blogpost from "./Blogpost";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>KLEVY</h1>
    </div>
  );
}

function About() {
  return <h2>About Me</h2>;  
}

function Blog() {
  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="blog-post">
          <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
          <small>{post.date}</small>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

function Contact() {
  return <h2>Contact Me</h2>;
}

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "20px", padding: "10px", borderBottom: "1px solid gray" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<Blogpost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

