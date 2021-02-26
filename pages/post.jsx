import { Layout } from "../components";

const Post = ({ title }) => {
  return (
    <Layout title={title}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut repellendus
        maxime aliquam error eum aliquid, deleniti in nesciunt repudiandae, quae
        quam molestias animi temporibus, neque veritatis recusandae. Quia,
        doloribus impedit.
      </p>
    </Layout>
  );
};

Post.getInitialProps = ({ query: { title } }) => {
  return { title };
};

export default Post;
