import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { SectionHeading } from "./misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "./misc/Buttons";

import EmailIllustrationSrc from "../assets/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-12 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-solitude`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none px-2 font-medium transition duration-300 hocus:border-go rounded`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8 rounded`

export default ({
  heading = <>Let's <span tw="text-go-light">Connect</span>: How Can I Help?</>,
  description = "I am ready and eager to hear from you! Whether you're interested in discussing a new project or just want to say hello, I'd love to connect. My goal is to build powerful partnerships that lead to exceptional results. Don't hesitate, reach out today!",
  submitButtonText = "Send",
  formName = "contact",
  formNetlify = "true",
  formAction = "/pages/success",
  formMethod = "POST",
  textOnLeft = true,
}) => {

  return (
    <Container id='contact'>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>

        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form name={formName} data-netlify={formNetlify} action={formAction} method={formMethod}>
              <input type="hidden" name="form-name" value="contact" />
              <Input type="email" name="email" placeholder="Your Email Address" />
              <Input type="text" name="name" placeholder="Full Name" />
              <Input type="text" name="busName" placeholder="Business Name" />
              <Textarea name="message" placeholder="How Can I Help?" />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
