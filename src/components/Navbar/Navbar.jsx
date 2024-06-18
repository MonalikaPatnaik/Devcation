import  { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the close icon as well
import {
  Nav,
  NavbarContainer,
  NavImg,
  NavMenu,
  Navitem,
  NavLinks,
  MobileIcon,
  NavLogo,
  SubLogo,
  Dropdown,
  Dropdowncontent,ButtonDropdown,
} from "./NavbarElements";

// import Dropdown from 'rsuite/Dropdown'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../assets/logo.png";
import styled from "styled-components";

const Button = styled.button`
padding: 12px 24px;
font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 22px;
background: rgb(48, 175, 91);
color: #fff;
border: none;
border-radius: 14px;
cursor: pointer;

&:hover {
  background: #2B394A;
  color:#fff;
  text-decoration : none;
  border: 1px solid rgb(48, 175, 91);
}
`;
const Navbar = () => {
  const [ setIsActive] = useState(false);
  const { loginWithRedirect, isAuthenticated,logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [setScrollPosition] = useState(0);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };
  // const removeActive = () => {
  //   setIsActive(false)
  // }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <Nav
        style={{
          background: "#2B394A",
        }}
      >
        <NavbarContainer>
          {/* <NavImg>
          <Link to="/" onClick={handleLogoClick}>
            <img src={logo} height={56} alt="Logo" />
            <NavLogo>
              TransCARE
              <SubLogo>YOUR JOURNEY. OUR PRIORITY</SubLogo>
            </NavLogo>
          </Link>
          </NavImg> */}
          <NavImg data-aos="fade-down">
            <img src={logo}
              alt="favicon"
              height="60"
            />
            <NavLogo to="/"  onClick={handleLogoClick}> EmoWell
            <SubLogo>EMBRACE Wellness</SubLogo>
            </NavLogo>
            
          </NavImg>

          <MobileIcon onClick={toggle}>
            {isOpen ? <FaTimes /> : <FaBars />} {/* Close icon when open */}
          </MobileIcon>
          <NavMenu isOpen={isOpen} data-aos="fade-down">
            <Navitem>
              <NavLinks to="/" onClick={handleLogoClick}>
                Home
              </NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="/#about" onClick={()=> scrollToSection('about')}>
                About
              </NavLinks>
            </Navitem>
            <Navitem className="custom">
              <NavLinks to="/#Features"  onClick={()=> scrollToSection('featureSection')}>
                Features
              </NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="/contact" onClick={handleLogoClick}>
                Contact
              </NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="/review" onClick={handleLogoClick}>
                Review
              </NavLinks>
            </Navitem>
            {isAuthenticated ? (
            <li>
              <Dropdown>
                <FontAwesomeIcon icon={faUser} style={{ color: '#fff' }}/>
                <ButtonDropdown onClick={toggleDropdown}>Account
                  <FontAwesomeIcon icon={faCaretDown}  style={{ color: '#fff' }} />
                </ButtonDropdown>
                {isOpen && (
                <Dropdowncontent>
                  <a href="/profile">User Profile</a>
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}style={{
                    fontSize:'16px', fontWeight: '600'
                  }}>
                  Log Out
                  </button>
                </Dropdowncontent>
                )}
              </Dropdown>

            </li>
            ):(
            <li>
              <Button onClick={() => loginWithRedirect()} style={{border:'1px solid rgb(48,175,91)'}}>
              Register</Button>
            </li>
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;