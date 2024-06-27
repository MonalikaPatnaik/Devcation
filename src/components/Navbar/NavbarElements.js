import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 0px;
  position: sticky; 
  height: 80px;
  top: 0;
  z-index: 19;
  /* overflow-x: auto; */
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1200px){
    transition: 0.8s all ease;
    overflow: visible;
    justify-content: space-between;
  }
  
`

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  row-gap: 32px;
  width: auto;
  height: auto;
  flex: none;
  order: 1;
  flex-grow: 0;
  @media screen and (max-width: 480px){
    width: auto;
    height: auto;

  flex-wrap: column;
  padding: 0px;
  row-gap: 32px;
  width: 100%;
  height: auto;

  flex: none;
  order: 1;
  flex-grow: 0;

  @media screen and (max-width: 1200px){
    width: auto;
    height: auto;  
  }
`

export const NavImg = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding-left: 10px;
  margin-right: auto; /* Pushes the container to the left */
  ${'' /* margin-bottom: 20px; */}
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const NavLogo = styled(LinkR)`
  height: auto;
  width: auto;
  color: #fff;
  justify-self: flex-start;  
  font-size: 2rem;
  display: flex;
  margin-bottom: 0px;
  flex-direction: column; 
  margin-left: 6px;
  font-weight: bold;  
  text-decoration: none; 
`

export const MobileIcon = styled.div`
  display: none;
  align-items: center;
  margin-bottom: 60px;
  @media screen and (max-width: 1200px){
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    ${'' /* width: auto; */}
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    padding-top: 3px;
  }
`


export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 50px 0px 90px;
  gap: 21px;
  width: auto;
  height: 45px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  @media screen and  (max-width: 768px){

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 50px 0px 90px;
  gap: 21px;
  width: auto;
  height: 45px;


  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  @media screen and  (max-width: 1200px){

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 40%;
    height: 41vh; 
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '80px' : '-41vh')};
    right: 0;
    transition: 0.3s ease-in-out;
    background-color: #2B394A;
  }
`

export const SubLogo = styled.span`
  font-size: 0.9rem; /* Adjust the font size as per your preference */
  color: #fff;
  @media screen and  (max-width: 468px){
    font-size: 8px;

  }
`;

export const Dropdown = styled.div`

  } 
`;

export const Dropdown=styled.div`

  /* overflow:hidden; */
  font-weight: 600;
  &:hover{
    background-color: rgb(85 253 142);
    /* border-radius:10px; */
  }
`;


export const Dropdowncontent = styled.div`

export const Dropdowncontent=styled.div`

  display: none;
  position: relative;
  background-color: #f9f9f9;
  min-width: 160px;
  text-align: center;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  ${Dropdown}:hover & {
    display: block;
  }
  a{
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
`;


export const ButtonDropdown = styled.button`

export const ButtonDropdown=styled.button`

  font-size: 18px;
  font-weight: 600;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  margin: 0;
`;

export const Navitem = styled.li`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  ${'' /* justify-content: center; */}
  padding: 0px 20px;
  padding-bottom: 7px;
  gap: 10px;

  border: 0.5px solid #05f8cb;

  border:0.5px solid #05f8cb;

  width:120px;
  height: 34px;
  border-radius: 22px;
  color: #fff;
  flex: none;
  order: 0;
  flex-grow: 0;
  text-decoration: none;
  &:hover {
    background: rgb(48, 175, 91);
    color: white;
  }

  &.custom {
    padding-left: 10px; 
    padding-right: 10px; 
    padding-bottom: 7px;
  }
`

export const NavImg = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding-left: 40px;
  margin-right: auto; /* Pushes the container to the left */
  ${'' /* margin-bottom: 20px; */}
  flex: none;
  order: 0;
  flex-grow: 0;
`;



  &.custom {
    padding-left: 10px; 
    padding-right: 10px; 
    padding-bottom: 7px;
  }
`

export const NavLinks = styled(LinkR)`
  width: auto;
  height: 36px;
  padding: 8px;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 22px;
  color: #fff;
  ${'' /* flex: none; */}
  align-items: center;
  justify-content: center;
  order: 0;
  flex-grow: 0;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    color: #fff;
  }
`;

