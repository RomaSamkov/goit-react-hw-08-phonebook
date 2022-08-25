import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const glow = keyframes`
/* from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0077e6, 0 0 40px #2300e6, 0 0 50px #002ae6, 0 0 60px #0064e6, 0 0 70px #0400e6;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #a94dff, 0 0 40px #4d68ff, 0 0 50px #824dff, 0 0 60px #4d50ff, 0 0 70px #4d7cff, 0 0 80px #8b4dff;
  } */
from {
    text-shadow: 
  2px 2px 1px rgba(0,0,0,.4),
  0 0 10px #42A5F5,  
  0 0 30px rgba(33, 150, 243, .75),
  0 0 50px rgba(33, 150, 243, .75),
  0 0 60px rgba(33, 150, 243, .75);
  }
  to {
    text-shadow: 
  2px 2px 1px rgba(0,0,0,.4),
  0 10 20px #42A5F5,  
  0 8 40px rgba(33, 150, 243, .75),
  0 0 60px rgba(33, 150, 243, .75),
  0 0 80px rgba(33, 150, 243, .75);
  }
  `;

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthContainer = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const AuthLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  color: #fff;
  background-color: rgb(100, 70, 192);
  /* color: #0d6efd;
  background-color: rgb(221, 216, 236); */
  border-radius: 25px;
  width: 80px;
  &:hover,
  :focus {
    /* color: #fff;
    background-color: rgb(100, 70, 192); */
    color: #0d6efd;
    background-color: rgb(221, 216, 236);
  }
`;

export const HomeTitle = styled.h1`
  display: block;
  padding: 10px 25px;
  border-radius: 25px;
  margin: 0;
  color: #0d6efd;
  background-color: rgb(221, 216, 236);
  /* color: #fff;
  background-color: rgb(100, 70, 192); */
`;

export const HomeText = styled('p')`
  color: #f51909;
  margin-top: 50px;
  margin-bottom: 50px;
  animation: ${glow} 1s ease-in-out infinite alternate;
  /* animation-duration: 3s; */
  /* color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff,
    0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff; */
  /* font-size: 80px;
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;

  text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
    0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6; */

  /* color: #111a33;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa; */
  /* text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff,
    0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff; */
`;

export const ContactsLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  color: #fff;
  background-color: rgb(100, 70, 192);
  /* color: #0d6efd;
  background-color: rgb(221, 216, 236); */
  border-radius: 25px;
  &:hover,
  :focus {
    /* color: #fff;
    background-color: rgb(100, 70, 192); */
    color: #0d6efd;
    background-color: rgb(221, 216, 236);
  }
`;
