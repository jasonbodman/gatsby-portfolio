import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const ServiceItem = props => (
  <Service>
    <Image fluid={props.image} alt={props.title} />
    <ServiceDescription>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </ServiceDescription>
  </Service>
)

const ServiceImage = styled.img`
  background-color: #fff;
  border-radius: 50%;
  width: 50%;
  height: auto;
  margin: 0 auto;
  box-shadow: 0px 0px 30px -10px black;
`

const Service = styled.div`
  width: 100%;
  width: 280px;
  margin: 15px auto;
  padding-top: 30px;
  text-align: center;
`

const ServiceDescription = styled.div`
  text-align: center;
`

export default ServiceItem
