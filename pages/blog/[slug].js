import React from "react";

import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/blog/test1">
            <a>Page 1</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/test2">
            <a>Page 2</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Blog = ({ post }) => {
  const { featuredImage } = post;
  return (
    <div>
      <Navigation />
      <h1>{post.title}</h1>
      <Image {...featuredImage} />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await (
    await fetch(`http://localhost:3000/api/blog/${params.slug}`)
  ).json();

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const posts = await (await fetch("http://localhost:3000/api/blog")).json();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export default Blog;
