import img1 from "../assets/img1.png";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/img-3.png";
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 4rem 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: var(--title-color);
  text-align: center;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  max-width: 100%;
  width: calc(100% - 3rem);
  margin-left: var(--mb-3);
  margin-right: var(--mb-3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const DecorationContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 2rem;
justify-content: center;
`;

const DecorationData = styled.div`
text-align: center;
padding: 1rem 1rem 2rem;
background-color: var(--container-color);
box-shadow: 0 2px 6px rgba(65, 11, 16, 0.15);
border-radius: 1rem;
width: calc(25% - 1rem);
max-width: 220px;
flex: 1 0 auto;
box-sizing: border-box;
`;

const DecorationImg = styled.img`
  height : 250px;
`;

const DecorationTitle = styled.h3`
  font-size: 20px;

  margin-bottom: 1rem;
  margin-right : 0.5rem;
  margin-left : 0.5rem;
  margin-top : 1rem;
  
`;

const Button = styled.div`
  display: inline-block;
  background-color: rgb(48, 175, 91);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: var(--font-semi-bold);
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: rgb(43, 57, 74);
    text-decoration: none;
  }
`;

const FeaturesSection = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <Section id="featureSection">
      <Title> Our Features</Title>
      <Container>
        <DecorationContainer>
          <DecorationData>
            <DecorationImg
              src={img1}
              alt=""
            />
            <DecorationTitle>Reading Area</DecorationTitle>
            <p>Ready to unwind and let loose? Discover actionable mental health
                 and wellbeing advice.</p>

              <Link to="/readingarea">
                  <Button>Read Now</Button>
                </Link>
          </DecorationData>
          <DecorationData>
            <DecorationImg
              src={img2} 
              alt=""
            />
            <DecorationTitle>Explore Games</DecorationTitle>
            <p>Experience the joy of play to relax and rejuvenate! Dive into
                 our games for a refreshing escape.</p>
              <Link to="./games">
                  <Button>Play Now</Button>
                </Link>
          </DecorationData>

          <DecorationData>
            <DecorationImg
              src={img3}
              alt=""
            />
            <DecorationTitle>Chat Bot</DecorationTitle>
            <p>Engage in a lively chat with our friendly bot for a fun and
                 helpful interaction!</p>

              <Link to="https://emowellbeing.streamlit.app/" target="_blank">
              
                  <Button>Chat Now</Button>
                </Link>
          </DecorationData>

          <DecorationData>
            <DecorationImg
              src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1707888470/CerviCare/Homepage/3_sbiawo.png"
              alt=""
            />
            <DecorationTitle>Community Forum</DecorationTitle>
            <p> Engage in a lively chat with our friendly bot for a fun and
                 helpful interaction!</p>
                 {isAuthenticated ? (
                <Link to="/forum">
                  <Button>Learn More</Button>
                </Link>
              ) : (
                <Button onClick={() => loginWithRedirect()}>Learn More</Button>
              )}
          </DecorationData>

        </DecorationContainer>
      </Container>
    </Section>
  );
};

export default FeaturesSection;
