import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const BackgroundCard = ({ title, company, dates, description, children }) => (
  <OuterContainer>
    <Container>
      <Dates>{dates}</Dates>
      <Title>{title}</Title>
      <Company>{company}</Company>
      <Description>{description}</Description>
    </Container>
    {children}
  </OuterContainer>
)

const OuterContainer = styled.li`
  display: flex;
  margin-bottom: ${Spacing.huge};
`

const Container = styled.div`
  position: relative;
  background-color: ${Colors.white};
  box-shadow: ${Colors.lightShadow};
  border-radius: ${Spacing.xSmall};
  padding: ${Spacing.base};
  width: 56%;

  &::after {
    position: absolute;
    content: "";
    top: 50%;
    right: -35px;
    width: 0;
    height: 0;
    transform: translateY(-50%);
    border-top: 30px solid transparent;
    border-left: 35px solid ${Colors.white};
    border-bottom: 30px solid transparent;
    filter: drop-shadow(4px 1px 1px rgba(0, 0, 0, 0.07));
  }
`

const Dates = styled.p`
  color: ${Colors.gray};
  font-size: ${Typography.xSmallFontSize};
  margin-bottom: ${Spacing.xxSmall};
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Title = styled.h3`
  margin-bottom: ${Spacing.xxSmall};
`

const Company = styled.h4`
  margin-bottom: ${Spacing.small};
`

const Description = styled.p`
  color: ${Colors.darkGray};
`

export default BackgroundCard