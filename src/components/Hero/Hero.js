import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        - Experience as Front-end Developer in both Web and Mobile development
      </SectionText>
      <Button onClick={() => console.log("learn more")}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;
