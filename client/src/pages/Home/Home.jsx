import BlogCard from "../../components/blog/BlogCard";
import blogs from "../../mock/blogs";

function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-bold">
        Trending Blogs
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            category={blog.category}
            author={blog.author}
            readTime={blog.readTime}
            views={blog.views}
            likes={blog.likes}
            comments={blog.comments}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;