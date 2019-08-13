import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const ProjectItem = props => (
  <Project>
    <ProjectImage fluid={props.image} alt={props.title} />
    <ProjectInfo>
      <h3>{props.title}</h3>
      <p>{props.url}</p>
      <ProjectQuote>{props.quote}</ProjectQuote>
      <p>-{props.client}</p>
    </ProjectInfo>
  </Project>
)

const Project = styled.div`
  width: 45%;
  max-width: 450px;
  background-color: #fff;
  color: #000;
  box-shadow: 0px 0px 30px -10px black;
  margin: 20px auto;
  display: block;
  border-radius: 10px;
  padding: 15px;
`

const ProjectImage = styled(Image)`
  width: 50%;
  margin: 10px auto 25px;
`

const ProjectInfo = styled.div`
  width: 100%;
  padding: 20px;
`

const ProjectQuote = styled.div`
  padding: 25px;
`

export default ProjectItem
