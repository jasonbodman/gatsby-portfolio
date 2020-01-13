import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const ProjectItem = props => (
  <Project>
    <ProjectLink href={props.url} target="_blank">
      <ProjectImage fluid={props.image} alt={props.title} />
    </ProjectLink>
    <ProjectInfo>
      <ProjectLink href={props.url} target="_blank">
        <h3>{props.title}</h3>
      </ProjectLink>

      <ProjectLink href={props.url} target="_blank">
        <p>{props.url}</p>
      </ProjectLink>
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

  @media (max-width: 768px) {
    width: 95%;
    max-width: 500px;
  }
`

const ProjectImage = styled(Image)`
  width: 50%;
  margin: 10px auto 25px;
`

const ProjectInfo = styled.div`
  width: 100%;
  padding: 20px;
`

const ProjectLink = styled.a`
  color: #000;
  text-decoration: none;
`

export default ProjectItem
