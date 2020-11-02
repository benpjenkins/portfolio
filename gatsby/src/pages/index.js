import React from "react";
import Layout from '../components/layout'
import SEO from '../components/seo'



const Home = () => {
  return (
    <>
      <SEO title='Home' />
      <Layout>
        <h3>Hello Gatsby</h3>
        <p>Some other font</p>
      </Layout>

    </>
  );
};

export default Home;
