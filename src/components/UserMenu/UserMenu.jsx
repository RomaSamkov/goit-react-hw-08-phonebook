import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

import LogoutIcon from '@mui/icons-material/Logout';
import { ImgWrap, Container, Button } from './UserMenu.styled';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();
  return (
    <Container>
      <ImgWrap>
        <img src="" alt="avatar" />
      </ImgWrap>
      <span>Welcome, {name}</span>
      <Button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        <LogoutIcon sx={{ color: 'white' }} />
      </Button>
    </Container>
  );
};

export default UserMenu;
