"use client"
import { useLocaleContext } from "@/context/locale.context";
import { Blog } from "./blog";
import { blogContents } from "@/utils/mocks/blogs.mock";
import Link from "next/link";

export const Blogs = () => {
  const { translate } = useLocaleContext()
  return (
    <section className="section spdt py-12">
      <div className="container">
        <Link href="/blog/id" className="d-flex justify-end">{translate("common.show_more")}</Link>
        <div className="row mt-8">
          {blogContents.map(blog => (
            <Blog blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};
