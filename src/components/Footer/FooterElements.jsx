import styled from "styled-components";
import { Link } from "react-router-dom";

// Footer container
export const FooterContainer = styled.footer`
  background: rgb(43, 57, 74);
  padding-top: 3rem;
  padding-bottom: 2rem;
  z-index: 99;
`;

// Footer wrap
export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1100px;
  flex-direction: column;
`;

// Footer links container
export const FooterLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Footer links wrapper
export const FooterLinksWrapper = styled.div`
  @media (max-width: 786px) {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
  }
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;

  @media (min-width: 786px) {
    &:nth-child(n) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: space-around;
    }
    &:nth-child(2) {
      width: 100%;
      display: grid;
      align-self: inherit;
      align-content: center;
      justify-content: center;
    }
  }
`;

// Footer link items
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: #fff;
  font-family: Poppins;

  &.socials {
    display: flex;
    flex-direction: row;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  @media (min-width: 320px) {
    align-items: center;
    &.socials {
      margin: 1rem;
    }
  }
  @media (min-width: 786px) {
    text-align: left;
  }
`;

// Footer link title
export const FooterLinkTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  display: inline-block;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  text-decoration: none;
  position: relative;
  color: rgb(85 253 142);
  text-transform: uppercase;
`;

export const Footerbg = styled.div`
  position: relative;
  background-color: rgb(48, 175, 91);
  margin-top: 50px;
`;

export const FooterLink = styled(Link)`
  margin-bottom: 0.6rem;
  font-size: 16px;
  color: #fff;
  /* display: flex;
  flex-direction: column; */
  &:hover {
    color: #fda5a4;
    text-decoration: none;
  }
  /* @media (min-width: 320px) {
    align-items: center;
  } */
`;
export const FooterLogo = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  margin: 0 10px 0 10px;
`;

export const SocialMediaWrap = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Social logo
export const SocialLogo = styled(Link)`
  /* Your styles for SocialLogo */
  color: rgb(255, 255, 255);
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    color: #fda5a4;
    text-decoration: none;
  }

  @keyframes shine {
    from {
      mask-position: 150%;
    }

    to {
      mask-position: -50%;
    }
  }
`;

// Website rights
export const WebsiteRights = styled.small`
  color: #fff;
  font-size: 16px;
`;
