import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <div>
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
      <Layout>
        <h1 className="center">Services</h1>
        <p className="robot subtitle center">
          Together, we can build a website that fits your brand while helping
          engage your customers in ways that help your business be successful.
          Whether you need a website built from scratch or need to optimize your
          current digital presence, I can help with a variety of business needs.
        </p>

        <div className="service-list">
          <div className="service-item center">
            <div className="service-image-bg">
              <img src="../images/responsive.png"></img>
            </div>
            <div className="service-description">
              <h2>Full Web Design</h2>
              <p>
                Starting from scratch, I can build you a mobile repsonsive
                website that represents your brand, strategically engages your
                customers, and helps you meet your goals. I can incorporate a
                variety of features that will help make your work easier like
                ecommerce products or content management systems.
              </p>
            </div>
          </div>

          <div className="service-item center">
            <div className="service-image-bg">
              <img src="../images/tools.png"></img>
            </div>
            <div className="service-description">
              <h2>Redesign and Optimization</h2>
              <p>
                If you feel that your current website needs a facelift or you
                recently updated your business' branding or voice, I can help to
                bring your vision to life while ensuring that your online
                presence is modern, accessible, and brings you closer to your
                customers.
              </p>
            </div>
          </div>

          <div className="service-item center">
            <div className="service-image-bg">
              <img src="../images/startup.png"></img>
            </div>
            <div className="service-description">
              <h2>Feature Installation</h2>
              <p>
                Whether your business is ready to finally launch that industry
                blog or you want your products to be available online through an
                ecommerce platform, I can help your business take the next step.
                Together, we will define what platform or tool works best to
                meet your need and identify the best plan to incorporate it into
                your new or existing website.{" "}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  </div>
)

export default IndexPage
