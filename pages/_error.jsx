import { Layout } from "../components";

const Error = ({ statusCode }) => (
  <Layout title="Error!">
    {statusCode && `Could not load your data: Status Code ${statusCode}`}
  </Layout>
);

export default Error;
