  import "./App.css";
  import posts from "./posts";
  import Blogpost from "./Blogpost";
  import Gallery from "./Gallery";
  import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

  function Home() {
    return (
     <div className="landing-container">
      <header className="header">KLEVY</header>
      <main className="main-content">
        <h1>Launching Soon</h1>
      </main>
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
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h3>
            <small>{post.date}</small>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
  function App() {
    return (
      <Router>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blogpost />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
  
      </Router>
    );
  }

  export default App;
