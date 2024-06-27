import styled from 'styled-components';
import stress from "../assets/stress.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const GreenBox = styled.div`
  background-color: rgb(48, 175, 91);
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 22px;
  overflow: hidden;

  @media (min-width: 768px) { /* md breakpoint */
    padding: 30px;
  }

  @media (min-width: 1024px) { /* lg breakpoint */
    padding: 40px;
    border-radius: 30px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  text-transform: capitalize;
  color: #fff;

  @media (min-width: 768px) { /* md breakpoint */
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #fff;
  margin-top: 5px;

  @media (min-width: 768px) { /* md breakpoint */
    font-size: 16px;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) { /* md breakpoint */
    flex-direction: row;
    align-items: center;
    height: auto;
  }
`;

const CampSite = styled.div`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 100%;
  height: 300px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Increase size on hover */
  }

  @media (min-width: 768px) { /* md breakpoint */
    height: 500px;
  }
`;

const CampContent = () => {
  return (
    <Container id="about">
      <AboutContainer className="hide-scrollbar">
        <CampSite backgroundImage={stress} />
        <GreenBox>
          <Title>
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </Title>
          <Paragraph>
            Our platform is designed to provide you with the tools and resources you need to prioritize your emotional health. Whether you're looking for a chatbot to talk about your mental health, engaging activities to lift your mood, or a supportive community to connect with, Emowell has you covered.
          </Paragraph>
        </GreenBox>
      </AboutContainer>
    </Container>
  );
};

export default CampContent;
