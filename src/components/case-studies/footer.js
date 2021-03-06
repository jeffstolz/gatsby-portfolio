import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Button from "../button"
import { secondaryLight } from "../themes"
import { FaArrowRight } from "react-icons/fa"
import { Colors, Spacing } from "../../styles/variables"

const Footer = () => (
  <Fade>
    <Container>
      <Divider />
      <ButtonLink href="/#case-studies">
        <Button
          theme={secondaryLight}
          label={"Back to Case Studies"}
          icon={<FaArrowRight />}
        />
      </ButtonLink>
    </Container>
  </Fade>
)

const Container = styled.section`
  padding: ${Spacing.medium} 0 ${Spacing.huge} ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.medium} 0 ${Spacing.huge} ${Spacing.sectionPaddingMobile};
  }
`

const Divider = styled.hr`
  border: 1px solid ${Colors.gray1};
  width: ${Spacing.base};
  margin-left: 0;
  margin-bottom: ${Spacing.medium};
`

const ButtonLink = styled.a`
  display: flex;
  text-decoration: none;
`

export default Footer
