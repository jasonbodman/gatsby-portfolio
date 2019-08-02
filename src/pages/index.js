import React from "react"
import styled from "styled-components"
import img from "../images/main2.jpg"

import SEO from "../components/seo"
import ServiceItem from "../components/serviceitem"
import ProjectItem from "../components/projectitem"

const IndexPage = ({ data }) => (
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
    <Section id="services">
      <SectionContent>
        <h1 class="center">Services</h1>
        <p class="subtitle center">
          Together, we can build a website that fits your brand while helping
          engage your customers in ways that help your business be successful.
          Whether you need a website built from scratch or need to optimize your
          current digital presence, I can help with a variety of business needs.
        </p>

        <ServiceList>
          {data.allSanityService.edges.map(({ node: service }) => (
            <ServiceItem
              title={service.title}
              image={service.mainImage.asset.fluid}
              description={service.description}
            />
          ))}
        </ServiceList>
      </SectionContent>
    </Section>

    <Section id="portfolio">
      <SectionContent>
        <h1 className="center">Portfolio</h1>
        <ProjectList>
          {data.allSanityProject.edges.map(({ node: project }) => (
            <ProjectItem
              title={project.title}
              url={project.url}
              image={project.mainImage.asset.fluid}
              quote={project.quote}
              client={project.client}
            />
          ))}
        </ProjectList>
      </SectionContent>
    </Section>

    <Section id="contact">
      <SectionContent>
        <h1 className="center">Lets get started!</h1>
        <p>
          Using the form below, please share a few basic details about your
          project. Once I receive your message, I'll be in touch as quickly as
          possible to ask any clarifying questions and discuss potential next
          steps. (You can also just use the form below to say hi if you'd like!)
        </p>
      </SectionContent>
    </Section>

    <Section id="footer">
      <SectionContent>
        <h1> // FOOTER </h1>
      </SectionContent>
    </Section>
  </>
)

export const query = graphql`
  {
    allSanityService {
      edges {
        node {
          title
          description
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    allSanityProject {
      edges {
        node {
          title
          url
          quote
          client
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

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

const ProjectList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export default IndexPage
