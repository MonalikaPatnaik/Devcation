import { Link } from 'react-scroll'
import styled from 'styled-components'

export const Button = styled(Link)`
    border-radius: 60px;
    background: ${({primary})=> (primary ? '#12263f' : '#12486B')};
    white-space: nowrap;
    color: ${({dark})=> (dark ? '#fff' : '#010606')};
    padding: ${({big})=> (big? '14px 48px' : '12px 30px')};
    font-size: ${({fontBig})=> (fontBig ? '28px' : '28px')};
    outline: none;
    border: 2px solid #403e08;
    box-shadow: 0 3px 0 black, 0px 3px 6px #fff;
    text-decoration: none;
    cursor: pointer;
    width: 291px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate3d(0, 0.75em, -1em);
    transition: all 175ms cubic-bezier(0, 0, 1, 1);transition: 0.7s;

    &:hover {
        color: #fff;
        background: #827e76;
        border: 2px solid #403e08, 0px 4px 6px #fff; 
        background: ${({ primary }) => (primary ? '#12486B' : '#12486B')};
        box-shadow: 0 0 #e3bc54;
    }

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
        width: 20rem;
        height: 3.5rem;
    }

    @media screen and (max-width: 480px){
        font-size: 1.3rem;
        width: 18rem;
        height: 3.2rem;
    }
`