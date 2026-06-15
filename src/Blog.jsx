const Header = () => {
  return <h1>My Blog</h1>;
};

const Post = () => {
  return (
    <div>
      <h2>Welcome to My Blog</h2>
      <p>This is my first blog post.</p>
    </div>
  );
};

const Footer = () => {
  return <p>© 2026 My Blog</p>;
};

const Blog = () => {
  return (
    <div>
      <Header />
      <Post />
      <Footer />
    </div>
  );
};

export default Blog;