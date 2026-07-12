function BlogCard({
  title,
  description,
  image,
  category,
  author,
  readTime,
  views,
  likes,
  comments,
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <span className="text-sm font-semibold text-blue-600">
          {category}
        </span>

        <h2 className="mt-2 text-xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="mt-2 text-gray-600 line-clamp-2">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
          <span>{author}</span>

          <span>{readTime}</span>
        </div>

        <div className="mt-4 flex gap-5 text-sm text-gray-500">
          <span>👁 {views}</span>
          <span>❤️ {likes}</span>
          <span>💬 {comments}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;