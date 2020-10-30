import React from "react";
import Layout from '../components/Layout'
import SEO from '../components/SEO'

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
