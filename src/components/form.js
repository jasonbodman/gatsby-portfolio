import React from "react"
import styled from "styled-components"

const Form = () => (
  <contactForm>
    <form
      method="post"
      id="contactform"
      class="form"
      action="../contact_form.php"
    >
      <inputBlock>
        <inputLeft>
          <label for="name">
            What is your name?*>
            <Input type="text" id="name" name="name" />
          </label>
        </inputLeft>

        <inputRight>
          <label for="phone">
            What is the best phone number to reach you at?*
            <Input type="phoneUS" id="phone" name="phone" />
          </label>
        </inputRight>
      </inputBlock>

      <inputBlock>
        <inputLeft>
          <label for="email">
            Where should we email you?*
            <Input type="email" id="email" name="email"></Input>
          </label>
        </inputLeft>

        <inputRight>
          <label for="website">
            What is the URL of your current website (if applicable)?
            <Input type="url" id="website" name="website" />
          </label>
        </inputRight>
      </inputBlock>

      <inputBlock>
        <label for="message">
          Please share a brief description of your project or your question:
          <textarea id="message" name="message" />
        </label>
      </inputBlock>
    </form>
  </contactForm>
)

const inputBlock = styled.div`
  display: block;
`

const inputLeft = styled.div`
  display: block;
  margin-top: 20px;
  margin-right: 20px;
`

const inputRight = styled.div`
  margin-top: 20px;
  display: block;
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
