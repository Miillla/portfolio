import React from "react";

import { DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "@/styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider diver />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I&apos;ve worked with a range a technologies in the web development world
      and Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frond-end</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Html,css,scss,React.js,JavaScript, React, Next.js, Gatsby.js, AWS -
            Amplify, Styled Components,Tailwind,Bootstrap,Materail
            UI,Wordpress,Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
