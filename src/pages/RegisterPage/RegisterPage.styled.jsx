import { Form, Field } from 'formik';
import { Button } from '@mui/material';
import styled from 'styled-components';

export const RegBtn = ({ children }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      size="medium"
      sx={{
        '&:hover': {
          boxShadow: 4,
        },
      }}
    >
      {children}
    </Button>
  );
};

export const RegForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  padding: 20px;
  margin: 0 auto;
`;

export const RegInput = styled(Field)`
  position: relative;
  width: 90%;
  height: 35px;
  font-size: 22px;
  background: transparent;

  &::placeholder {
  }
  &:hover,
  &:focus {
    width: 100%;
  }
`;

export const ErrorMsg = styled('div')``;

export const AvatarText = styled('h3')``;
