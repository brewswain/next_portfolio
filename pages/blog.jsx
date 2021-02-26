import Link from "next/link";

import { Layout } from "../components";

const Blog = () => {
  const PostLink = ({ title, slug }) => (
    <li>
      <Link
        as={`${slug}`}
        href={{
          pathname: "/post",
          query: {
            title: title,
          },
        }}
      >
        <a>{title}</a>
      </Link>
    </li>
  );

  return (
    <Layout title="My Blog">
      <ul>
        <PostLink slug="react-post" title="React" />
        <PostLink slug="angular-post" title="Angular" />
        <PostLink slug="vue-post" title="Vue" />
      </ul>
    </Layout>
  );
};

export default Blog;
