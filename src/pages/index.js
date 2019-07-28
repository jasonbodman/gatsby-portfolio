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
        <p>
          I am a freelance web designer who can help your business succeed by
          transforming your digital brand and building stronger connections with
          your customers. Let's get started!
        </p>
      </Title>
    </Container>
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
  background-image: url(${img});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`

export default IndexPage
