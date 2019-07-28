import React from "react"
import styled from "styled-components"
import img from "../images/main2.jpg"

import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Container>
      <Title>
        <h1>Hi, I'm Jason!</h1>
        <p className="subtitle">
          I am a freelance web designer who can help your business succeed by
          transforming your digital brand and building stronger connections with
          your customers. Let's get started!
        </p>
      </Title>
    </Container>
    <Section>
      <SectionContent>
        <h1 class="center">Services</h1>
        <p class="subtitle center">
          Together, we can build a website that fits your brand while helping
          engage your customers in ways that help your business be successful.
          Whether you need a website built from scratch or need to optimize your
          current digital presence, I can help with a variety of business needs.
        </p>

        <ServiceList>
          <ServiceItem>
            <ServiceImage>
              <img src="../images/responsive.jpg"></img>
            </ServiceImage>
            <ServiceDescription>
              <h2>Full Web Design</h2>
              <p>
                Starting from scratch, I can build you a mobile repsonsive
                website that represents your brand, strategically engages your
                customers, and helps you meet your goals. I can incorporate a
                variety of features that will help make your work easier like
                ecommerce products or content management systems.
              </p>
            </ServiceDescription>
          </ServiceItem>

          <ServiceItem>
            <ServiceImage>
              <img src="../images/tools.jpg"></img>
            </ServiceImage>
            <ServiceDescription>
              <h2>Redesign and Optimization</h2>
              <p>
                If you feel that your current website needs a facelift or you
                recently updated your business' branding or voice, I can help to
                bring your vision to life while ensuring that your online
                presence is modern, accessible, and brings you closer to your
                customers.
              </p>
            </ServiceDescription>
          </ServiceItem>

          <ServiceItem>
            <ServiceImage>
              <img src="../images/startup.jpg"></img>
            </ServiceImage>
            <ServiceDescription>
              <h2>Feature Installation</h2>
              <p>
                Whether your business is ready to finally launch that industry
                blog or you want your products to be available online through an
                ecommerce platform, I can help your business take the next step.
                Together, we will define what platform or tool works best to
                meet your need and identify the best plan to incorporate it into
                your new or existing website.{" "}
              </p>
            </ServiceDescription>
          </ServiceItem>
        </ServiceList>
      </SectionContent>
    </Section>
  </>
)

const Container = styled.div`
  background-image: url(${img});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`

const Title = styled.div`
  position: absolute;
  top: 60%;
  width: 95%;
  max-width: 1000px;
  text-align: left;
  background-color: #8e4444;
  color: #fff;
  padding: 20px 20px 20px 40px;
  box-shadow: 0px 0px 30px -10px black;
  margin: auto;
`

const Section = styled.div`
  background-color: #ccc;
  min-height: 500px;
  padding-top: 50px;
  border-top: 5px #8e4444 solid;
`

const SectionContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0px;
`

const ServiceImage = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 50%;
  height: auto;
  margin: 0 auto;
  box-shadow: 0px 0px 30px -10px black;
`

const ServiceItem = styled.div`
  width: 100%;
  width: 280px
  margin: 15px auto;
  padding-top: 30px;
  text-align: center;
`

const ServiceDescription = styled.div`
  text-align: center;
`

export default IndexPage
