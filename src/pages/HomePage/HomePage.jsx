import { Container, HomeTitle, HomeText } from './HomePage.styled';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const HomePage = () => {
  const el = useRef(null);
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Welcome to ContactsBook... '],
      startDelay: 1200,
      typeSpeed: 60,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Container>
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
            <button as={Link} to="/register" variant="secondary">
              Sign Up
            </button>
            <button as={Link} to="/login" variant="secondary">
              Sign In
            </button>
          </motion.div>
        )}
      </Container>
    </>
  );
};

export default HomePage;
