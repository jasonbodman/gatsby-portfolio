import React from "react"
import styled from "styled-components"

const ProjectItem = props => (
  <Project>
    <ProjectImage src={props.image} alt={props.title}></ProjectImage>
    <ProjectInfo>
      <h3>{props.title}</h3>
      <p>{props.url}</p>
      <ProjectQuote>{props.quote}</ProjectQuote>
    </ProjectInfo>
  </Project>
)

const Project = styled.div`
  width: 100%;
  max-width: 700px;
  background-color: #fff;
  color: #000;
  box-shadow: 0px 0px 30px -10px black;
  margin: 20px auto;
  display: block;
  border-radius: 10px;
`

const ProjectImage = styled.img`
  width: 100%;
`

const ProjectInfo = styled.div`
.project-info {
	width: 100%;
	padding: 20px;
`

const ProjectQuote = styled.div`
  padding: 25px;
`

export default ProjectItem
