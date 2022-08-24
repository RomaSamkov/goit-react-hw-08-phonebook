import { Container, HomeTitle, HomeText } from './HomePage.styled';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Link, NavLink } from 'react-router-dom';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import image from 'images';

const HomePage = () => {
  const el = useRef(null);
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Welcome to PHONEBOOK... '],
      startDelay: 1000,
      typeSpeed: 60,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Container
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          height: '100vh',
        }}
      >
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <HomeTitle ref={el}></HomeTitle>
        </motion.div>
        <HomeText
          as={motion.h1}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.9, delay: 2.5 }}
        >
          Text .................
        </HomeText>

        {!isLoggedIn && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 2.2 }}
          >
            <NavLink to="login">Log in</NavLink>
            <NavLink to="register">Sign Up</NavLink>
          </motion.div>
        )}
      </Container>
    </>
  );
};

export default HomePage;
