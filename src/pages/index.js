import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="main">
      <div className="title right">
        <h1>Hi, I'm Jason!</h1>
        <p className="robot subtitle">
          I am a freelance web designer who can help your business succeed by
          transforming your digital brand and building stronger connections with
          your customers. Let's get started!
        </p>
      </div>
    </section>

    <section className="services" id="services">
      <h1 className="center">Services</h1>
      <p className="subtitle center">
        Together, we can build a website that fits your brand while helping
        engage your customers in ways that help your business be successful.
        Whether you need a website built from scratch or need to optimize your
        current digital presence, I can help with a variety of business needs.
      </p>
    </section>
  </Layout>
)

export default IndexPage
