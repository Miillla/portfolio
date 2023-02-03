import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "@/styles/GlobalComponents";
import { projects } from "@/constants/constants";
import Link from "next/link";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>

    <GridContainer>
      {projects.map(({ id, image, title, tags, url }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <Hr />
          <TitleContent>
            <Link href={url}>
              <HeaderThree>{title}</HeaderThree>
            </Link>
            <Hr />
          </TitleContent>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, index) => {
                return <Tag key={index}>{tag}</Tag>;
              })}
            </TagList>
          </div>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
