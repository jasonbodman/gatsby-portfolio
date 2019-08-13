import React from "react"
import styled from "styled-components"

const Form = () => (
  <contactForm>
    <form method="post" id="contactform" class="form" action="#">
      <InputBlock>
        <InputLeft>
          <label for="name">
            What is your name?*>
            <Input type="text" id="name" name="name" />
          </label>
        </InputLeft>

        <InputRight>
          <label for="phone">
            What is the best phone number to reach you at?*
            <Input type="phoneUS" id="phone" name="phone" />
          </label>
        </InputRight>
      </InputBlock>

      <InputBlock>
        <InputLeft>
          <label for="email">
            Where should we email you?*
            <Input type="email" id="email" name="email"></Input>
          </label>
        </InputLeft>

        <InputRight>
          <label for="website">
            What is the URL of your current website (if applicable)?
            <Input type="url" id="website" name="website" />
          </label>
        </InputRight>
      </InputBlock>

      <InputBlock>
        <InputCenter>
          <label for="message">
            Please share a brief description of your project or your question:
            <InputBox id="message" name="message" />
          </label>
        </InputCenter>
      </InputBlock>
    </form>
  </contactForm>
)

const InputBlock = styled.div`
  display: block;
`

const InputLeft = styled.div`
  display: inline-block;
  margin-top: 20px;
  padding: 0px 10px;
  width: 49%;
`

const InputRight = styled.div`
  margin-top: 20px;
  display: inline-block;
  width: 49%;
`

const InputCenter = styled.div`
  padding: 0px 10px;
  width: 99%;
`

const InputBox = styled.textarea`
  height: 200px;
`

const Input = styled.input`
  width: 100%;
  background-color: #fff;
  color: var(--blue);
  padding: 10px 5px;
  margin: 10px 0px;
  font-size: 1rem;
  border: 2px solid var(--red);
`

export default Form
