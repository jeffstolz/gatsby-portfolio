import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../../styles/variables"

const Experience = ({ children }) => (
  <OuterContainer>
    <Container>
      <Heading>This study to explores my experiences with...</Heading>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${Spacing.medium} ${Spacing.base};
  background-image: linear-gradient(-25deg, ${Colors.blue}, ${Colors.cyan});

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.medium} ${Spacing.small};
  }
`

const Container = styled.div`
  width: 100%;
  max-width: ${Spacing.containerWidth};
`

const Heading = styled.h4`
  font-family: ${Typography.headingFontFamily};
  font-style: italic;
  font-size: ${Typography.mediumFontSize};
  margin-bottom: ${Spacing.base};
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${Spacing.breakPoint}) {
    flex-direction: column;
  }
`

export default Experience
