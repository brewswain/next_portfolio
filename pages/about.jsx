import Image from "next/image";
import Error from "./_error";

import { Layout } from "../components";

const About = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout title="About">
      <p>
        {user.name} / <span>{user.login}</span>
      </p>
      <Image src={user.avatar_url} alt="Github Icon" height={200} width={200} />
    </Layout>
  );
};

About.getInitialProps = async () => {
  const response = await fetch("https://api.github.com/users/brewswain");
  const statusCode = response.status > 200 ? response.status : false;
  const gitData = await response.json();
  return {
    user: gitData,
    statusCode,
  };
};

export default About;
