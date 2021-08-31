import React from "react"
import ReactGA from 'react-ga';

import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

const IndexPage = () => (

  <Layout>

    <SEO title="Home" />
    <Header></Header>
    <About></About>
    <Work></Work>

    <Skills></Skills>
    {/* <Promotion></Promotion> */}
    <Footer></Footer>
  </Layout>
)

function initializeReactGA() {
  ReactGA.initialize('G-NYSN69436V');
  ReactGA.pageview('/homepage');
}
export default IndexPage
