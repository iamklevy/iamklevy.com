import { useParams } from "react-router-dom";
import posts from "./posts";

function Blogpost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <small>{post.date}</small>
      <p>{post.content}</p>
    </div>
  );
}

export default Blogpost;
