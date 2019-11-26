import React from "react"
import styled from "styled-components"

const Form = () => (
  <contactForm>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <InputBlock>
        <InputLeft>
          <label for="name">
            Your name:
            <br />
            <Input type="text" id="name" name="name" />
          </label>
        </InputLeft>

        <InputRight>
          <label for="phone">
            What is the best phone number to reach you at?
            <br />
            <Input type="phoneUS" id="phone" name="phone" />
          </label>
        </InputRight>
      </InputBlock>

      <InputBlock>
        <InputLeft>
          <label for="email">
            What is the best email address to contact you?:
            <br />
            <Input type="email" id="email" name="email" />
          </label>
        </InputLeft>

        <InputRight>
          <label for="website">
            If you already have a website, what is the URL?
            <br />
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

      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
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
