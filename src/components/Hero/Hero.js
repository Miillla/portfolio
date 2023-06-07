import React from "react";
import { Section, SectionText, SectionTitle } from "@/styles/GlobalComponents";
import Button from "@/styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>Front-end developer</SectionText>
      <Button onClick={props.handleClick}>My Blog</Button>
    </LeftSection>
  </Section>
);

export default Hero;
