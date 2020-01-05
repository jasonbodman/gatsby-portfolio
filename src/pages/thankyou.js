import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import WhiteLogo from "../images/logo-white.png"
import img from "../images/main2.jpg"
import Mail from "../images/mail.png"
import Twitter from "../images/twitter.png"
import Github from "../images/github.png"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Container>
      <Title>
        <h1>Thank You!</h1>
        <p className="subtitle">
          Thank you for reaching out. I will review your message and be in touch
          shortly! You can always email me directly at{" "}
          <a href="mailto:hello@jasonbodman.com" style={{ color: `#fff` }}>
            hello@jason&zwnj;bodman.com
          </a>{" "}
          at any time.
          <br></br>
        </p>
        <p className="subtitle">
          <Link to="/" style={{ color: `#fff` }}>
            Head back home
          </Link>
        </p>
      </Title>
    </Container>

    <Section id="footer">
      <SectionContent>
        <FooterTop>
          <FooterLeft>
            <FooterLogo src={WhiteLogo} />
          </FooterLeft>

          <FooterRight>
            <h2>Connect with me at:</h2>
            <FooterRightCard>
              <p>
                <ContactLink
                  href="mailto:hello@jasonbodman.com"
                  target="_blank"
                >
                  <ContactIcon src={Mail} />
                  hello@jasonbodman.com
                </ContactLink>
              </p>
            </FooterRightCard>

            <FooterRightCard>
              <p>
                <ContactLink
                  href="http://www.twitter.com/bodmand1"
                  target="_blank"
                >
                  <ContactIcon src={Twitter} />
                  @bodmand1
                </ContactLink>
              </p>
            </FooterRightCard>

            <FooterRightCard>
              <p>
                <ContactLink
                  href="http://www.github.com/jasonbodman/"
                  target="_blank"
                >
                  <ContactIcon src={Github} />
                  @jasonbodman
                </ContactLink>
              </p>
            </FooterRightCard>
          </FooterRight>
        </FooterTop>
        <FooterBottom>
          <p>
            &copy; Jason Bodman, {new Date().getFullYear()}. All rights
            reserved.
          </p>
          <p>All icons designed by Freepik from Flaticon.</p>
        </FooterBottom>
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
  min-height: 250px;
  padding-top: 50px;
  border-top: 5px #8e4444 solid;
`

const SectionContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const FooterTop = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: inline-flex;
`

const FooterLeft = styled.div`
  width: 30%;
`

const FooterRight = styled.div`
  width: 70%;
  text-align: right;
  margin: auto;
  display: block;
`

const FooterRightCard = styled.div`
  display: block;
`

const FooterLogo = styled.img`
  max-width: 100px;
`

const ContactLink = styled.a`
  color: #ffffff;
  text-decoration: none;
`

const ContactIcon = styled.img`
  width: 15px;
  height: 15px;
  margin: 0px 10px;
  vertical-align: middle;
`

const FooterBottom = styled.div`
  text-align: center;
`

export default IndexPage
