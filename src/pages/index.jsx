import React from "react"
import HorizontalPageProgress from "react-horizontal-page-progress";
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
    <HorizontalPageProgress height="3px" backgroundColor="#222" />
    <SEO title="Home" />
    <Header></Header>
    <About></About>
    <Work></Work>

    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
