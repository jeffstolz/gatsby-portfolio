import React from "react"
import styled from "styled-components"
import DefaultLayout from "../layouts/default-layout"
import SEO from "../components/seo"
import { Images } from "../images"
import { Colors, Spacing, Typography } from "../styles/variables"

const MobileHeartbeatPage = () => (
  <DefaultLayout>
    <SEO title="Mobile Heartbeat" />
      <LargeText>Mobile Heartbeat</LargeText>
      <PillContainer>
        <CaseStudy>Case Study</CaseStudy>
        <ProductDesign>Product Design</ProductDesign>
        <UxDesign>UX Design</UxDesign>
      </PillContainer>
      <WelcomeText>
        Product redesign of a tool that enables clinicians to improve patient
        care through accelerated communication and collaboration in the
        hospital.
      </WelcomeText>
      <LargeImage src={Images.MhOverview} alt="Mobile Heartbeat Overview" />
      <Row>
        <LeftHeader>The Problem</LeftHeader>
        <RightContent>
          At the time of the project, Mobile Heartbeat was a clinical
          communication tool in 92 hospitals and with over 100,000 active
          users. Although the product had a deep userbase, the company had not
          focused on design in it's past and end-users complained that the
          product had grown dated, unintuitive, and frustrating. Physicians
          were rejecting the application because it didn't support their
          specific workflow and urgent communications were a burden. I was
          brought on to establish a design culture within the company and lead
          the redesign of their iOS, Android, and web applications to help
          solve these problems.
        </RightContent>
      </Row>
      <Divider />
      <Row>
        <LeftHeader>Discovery Phase</LeftHeader>
        <RightContent>
          Our users had highly specific and complex workflows, and we needed
          to make sure to thoroughly research and understand them before
          beginning. Our research included shadowing, interviewing, focus
          groups & surveys. This ranged from observing a chaotic night shift
          in a Manhattan ER, to scrubbing into the OR to see how surgical
          teams communicate. As a result, we built a stronger understanding of
          the goals & frustrations of our customers.
        </RightContent>
      </Row>
      <LargeImageTight src={Images.MhDiscovery} alt="Mobile Heartbeat Discovery" />
      <p>
        We chose to follow the Lean UX Canvas for initial problem definition
        to help us maintain focus and establish measurable outcomes. Through
        our process, we formulated three hypotheses to measure against. In
        addition to a complete UI redesign of the application, we focused on
        solving the core problems around our information architecture,
        physician workflow, and speed of urgent communications.
      </p>
      <LargeImageTight src={Images.MhPersona} alt="Mobile Heartbeat Persona" />
      <p>
        We created personas of our core users and gave them personalities,
        goals, and priorities. This helped us journey map ideal workflows
        during the design phase, and maintain a user-centric perspective for
        the other teams throughout the process.
      </p>
      <Divider />
      <Row>
        <LeftHeader>Design Process</LeftHeader>
        <RightContent>
          The culture I worked to build was one of highly rapid, transparent,
          and collaborative design and prototyping. We began with
          brainstorming workshops, low-fidelity sketches, wireframes, and then
          increased in detail as our vision became more defined. Additionally,
          we maintained a regular feedback loop with our users throughout the
          design process.
        </RightContent>
      </Row>
      <LargeImageTight
        src={Images.MhSketch}
        alt="Mobile Heartbeat Design Process Sketch"
      />
      <p>
        Based on our user feedback, it was clear that the navigation of Mobile
        Heartbeat needed to improve. Through card sorting studies, we were
        able to simplify the navigation and organize related functionality
        into intuitive groupings on the bottom tab bar.
      </p>
      <LargeImageTight src={Images.MhWireframe} alt="Mobile Heartbeat Wireframe" />
      <p>
        By starting with wireframes we were able to ideate rapidly with
        minimal commitment. We met with stakeholders, SMEs, and users early
        and often. We progressively added detail to our concepts as we
        received buy in. Once we felt we were in a strong direction with our
        information architecture and interaction design, we focused on
        refining our visual design.
      </p>
      <Divider />
      <Row>
        <LeftHeader>Solutions</LeftHeader>
        <RightContent>
          When we felt we had solid concepts, we conducted extensive end-user
          testing to validate (or revise) our solutions before implementation.
          This included in-person user testing via InVision prototypes. We
          conducted these tests in hospitals throughout the country, and
          evolved our designs based on the feedback. As a result, we were able
          to begin development with confidence in our approach.
        </RightContent>
      </Row>
      <SolutionRow>
        <SolutionColumn>
          <SolutionImage
            src={Images.MhSolutionOne}
            alt="Mobile Heartbeat Solution One"
          />
          <SmallText>
            Previously, all functionality in the app was funnelled through a
            single ’home” screen. By reorganizing our features into a bottom
            tab bar, we could move all core functionality to single press
            away, and with clear visual signifiers.
          </SmallText>
        </SolutionColumn>
        <SolutionColumn>
          <SolutionImage
            src={Images.MhSolutionTwo}
            alt="Mobile Heartbeat Solution Two"
          />
          <SmallText>
            Enabling our power users was a major focus of ours. By introducing
            3D Touch and long look notifications in iOS, users could access
            deep, critical functionality from the root of the application or
            within the context of an alert.
          </SmallText>
        </SolutionColumn>
      </SolutionRow>
      <SolutionRow>
        <SolutionColumn>
          <SolutionImage
            src={Images.MhSolutionThree}
            alt="Mobile Heartbeat Solution Three"
          />
          <SmallText>
            To support the physician workflow better, we designed a way for
            clinicians to select and convey their presence in multiple units
            and facilities, as providers are often highly mobile and transient
            throughout the hospital.
          </SmallText>
        </SolutionColumn>
        <SolutionColumn>
          <SolutionImage
            src={Images.MhSolutionFour}
            alt="Mobile Heartbeat Solution Four"
          />
          <SmallText>
            Additionally, we expanded on the dynamic role feature, a critical
            part of the physician workflow that allowed them to assign
            themselves unique roles in the hospitals. Now users would be able
            to search/browse, favorite, text, and assign patients to dynamic
            roles.
          </SmallText>
        </SolutionColumn>
      </SolutionRow>
      <SolutionRow>
        <SolutionColumn>
          <SolutionImage
            src={Images.MhSolutionFive}
            alt="Mobile Heartbeat Solution Five"
          />
          <SmallText>
            Because clinical users receive lots of communications throughout
            the day, we needed to ensure urgent notifications were never lost.
            To solve this, we created the ’urgent banner.” This element
            populates every screen when triggered and can be directly actioned
            on so the user can respond immediately. Once the notification is
            marked as read, the banner is removed.
          </SmallText>
        </SolutionColumn>
        <SolutionColumn>
          <SolutionImage
            src={Images.MhSolutionSix}
            alt="Mobile Heartbeat Solution Six"
          />
          <SmallText>
            To increase the speed of critical communications, we redesigned
            the texting module. During emergencies, the user is often
            extremely stressed with a dramatically increased cognitive load.
            By having a clear visual indicator near the input, the clinician
            will intuitively be able to identify and send critical texts to
            notify the care team.
          </SmallText>
        </SolutionColumn>
      </SolutionRow>
      <Divider />
      <Row>
        <LeftHeader>Outcome</LeftHeader>
        <RightContent>
          At the time of this case study, we were in the process of beta
          testing our MVP which had been well received by users. The next
          steps were to implement NPS surveys to compare against our original
          findings, and implement Appsee to collect analytics on the increased
          speed of urgent communications. Additionally, we were accepted into
          an Apple partnership program due to our adhearance to the Human
          Interface Guidelines.
          <br />
          <br />
          We learned a lot from carrying out a product redesign of this scale.
          Platform consistency became a pain point during the design, and as a
          response we created a design system to unify our solutions. Moving
          forward, we would introduce this earlier in the process.
          Additionally, for future projects I would include more engineers and
          stakeholders in the initial discovery research, as their expertise
          would have been valuable at that initial stage.
        </RightContent>
      </Row>
  </DefaultLayout>
)

const LargeText = styled.h1`
  font-size: ${Typography.headingFontSize};
  margin-top: ${Spacing.base};
  margin-bottom: ${Spacing.xSmall};
`

const PillContainer = styled.div`
  display: flex;
  margin-top: ${Spacing.small};
  margin-bottom: ${Spacing.medium};
`

const Pill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${Spacing.pillHeight};
  width: ${Spacing.pillWidth};
  color: ${Colors.black};
  border-radius: ${Spacing.pillRadius};
  border: 1pt solid;
  margin-right: 0.5em;
  font-size: ${Typography.smallFontSize};

  @media (max-width: ${Spacing.breakPoint}) {
    width: ${Spacing.pillMobileWidth};
    font-size: ${Typography.xSmallFontSize};
  }
`

const ProductDesign = styled(Pill)`
  border-color: ${Colors.blue};
`

const UxDesign = styled(Pill)`
  border-color: ${Colors.orange};
`

const CaseStudy = styled(Pill)`
  border-color: ${Colors.green};
`

const WelcomeText = styled.p`
  font-size: ${Typography.mediumFontSize};
  line-height: ${Typography.largeLineHeight};
`

const LargeImage = styled.img`
  margin-top: ${Spacing.xxHuge};
  margin-bottom: ${Spacing.xxHuge};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.huge};
    margin-bottom: ${Spacing.huge};
  }
`

const LargeImageTight = styled.img`
  margin-top: ${Spacing.xxHuge};
  margin-bottom: ${Spacing.base};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.huge};
  }
`

const SolutionImage = styled.img`
  margin-bottom: ${Spacing.base};
`

const Row = styled.div`
  display: flex;

  @media (max-width: ${Spacing.breakPoint}) {
    flex-wrap: wrap;
  }
`

const SolutionRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: ${Spacing.xxHuge};

  @media (max-width: ${Spacing.breakPoint}) {
    flex-wrap: wrap;
    margin-top: 0;
  }
`

const SolutionColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 21em;

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.large};
  }
`

const LeftHeader = styled.h2`
  display: flex;
  width: 100%;
  font-size: ${Typography.headingFontSize};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-bottom: ${Spacing.small};
  }
`

const RightContent = styled.p`
  display: flex;
  width: 100%;
`

const Divider = styled.div`
  width: 100%;
  border-bottom: 1pt solid ${Colors.black};
  margin-top: ${Spacing.xxHuge};
  margin-bottom: ${Spacing.xxHuge};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.large};
    margin-bottom: ${Spacing.large};
  }
`

const SmallText = styled.p`
  font-size: ${Typography.xSmallFontSize};
  line-height: ${Typography.hugeLineHeight};
`

export default MobileHeartbeatPage
