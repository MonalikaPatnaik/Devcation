import { useState } from "react";
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import logo from "../../assets/logo.png";
// import { LocationOn, Phone, Mail } from '@mui/icons-material';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLogo,
  FooterLink,
  SocialLogo,
  WebsiteRights, 
  Footerbg
} from "./FooterElements";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [setIsActive] = useState(false);
  const removeActive = () => {
    setIsActive(false);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      removeActive();
    }
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+01234567890';
  };

  return (
    <>
      <Footerbg>.</Footerbg>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>

              <FooterLinkItems>
                <FooterLinkTitle>Our Contacts</FooterLinkTitle>
                <FooterLinkItems>
                  <ListItem>
                    <ListItemIcon>
                      {/* <LocationOn style={{ marginRight: '0.5rem', color: '#FDA5A4' }} /> */}
                    </ListItemIcon>
                    <ListItemText primary="ABCDEF, Rohini, ND-India" />
                  </ListItem>
                  <ListItem 
                    button 
                    onClick={handlePhoneClick}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    <ListItemIcon>
                      {/* <Phone style={{ marginRight: '0.5rem', color: '#FDA5A4' }} /> */}
                    </ListItemIcon>
                    <ListItemText 
                      primary="+012 345 67890" 
                      sx={{
                        '&:hover': {
                          color: '#fda5a4',
                        },
                        backgroundColor: 'transparent',
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      {/* <Mail style={{ marginRight: '0.5rem', color: '#FDA5A4' }} /> */}
                    </ListItemIcon>
                    <ListItemText primary="abcdef@gmail.com" />
                  </ListItem>
                </FooterLinkItems>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Quick Links</FooterLinkTitle>
                <FooterLinkItems>
                  <ListItem>
                    <FooterLink onClick={() => scrollToSection('about')}>
                      <ListItemText primary="About" />
                    </FooterLink>
                  </ListItem>
                  <ListItem>
                    <FooterLink to="/contact">
                      <ListItemText primary="Contact" />
                    </FooterLink>
                  </ListItem>
                  <ListItem>
                    <FooterLink onClick={() => scrollToSection('featureSection')} className="footer-link">
                      <ListItemText primary="Services" />
                    </FooterLink>
                  </ListItem>
                  <ListItem>
                    <FooterLink to="/privacy">
                      <ListItemText primary="Privacy and Policy" />
                    </FooterLink>
                  </ListItem>
                </FooterLinkItems>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Business Hours</FooterLinkTitle>
                <FooterLinkItems>
                  <ListItem>
                    <ListItemText primary="Monday - Friday" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Saturday" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Sunday" />
                  </ListItem>
                </FooterLinkItems>
              </FooterLinkItems>

            </FooterLinksWrapper>
          </FooterLinksContainer>
          <FooterLinkItems className="socials">
            <FooterLogo src={logo} />
            <SocialLogo onClick={handleClick}>EmoWell</SocialLogo>
          </FooterLinkItems>
          <WebsiteRights>
            EmoWell © {new Date().getFullYear()}&nbsp;All rights reserved.
          </WebsiteRights>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
