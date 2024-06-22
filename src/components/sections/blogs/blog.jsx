import Link from "next/link";

export const Blog = ({ blog }) => {
  return (
    <Link
      aria-label={blog.title}
      href={`/blogs/${blog.slug}`}
      className="col-4"
    >
      {blog.image && (
        <img
          className="rounded-top w-100 h-48 object-cover"
          src={blog.image}
          alt={blog.title}
          width={200}
          height={200}
          quality={100}
        />
      )}
      <div className="background-grey rounded-bottom p-3 p-md-4">
        <h2 className=" fw-bold fs-6 text-truncate">{blog.title}</h2>
        <div
          className="text-secondary fs-6 mt-2 fw-normal text-truncate"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>
    </Link>
  );
};
