import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Title } from './AppMainView.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactLIst';
import Filter from 'components/Filter';
import { Box } from 'components/Box/Box';
import Spinner from 'components/Spinner';
import { useContacts } from 'hooks';
import { contactsOperations } from 'redux/contacts';

const AppMainView = () => {
  const dispatch = useDispatch();
  const { contacts, filter, loader, setFilter } = useContacts();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const handleFilterInput = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContacts = () => {
    if (contacts.length !== 0 && typeof contacts !== 'string') {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return [];
  };

  const filteredContacts = filterContacts();

  return (
    <Box>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />

        <Title>Contacts</Title>
        <Box>
          <Filter value={filter} onChange={handleFilterInput} />
          <h3>Total contacts: {filteredContacts.length}</h3>
        </Box>

        {loader ? (
          Spinner.threeCircles
        ) : (
          <ContactList contacts={filteredContacts} />
        )}
      </Container>
    </Box>
  );
};

export default AppMainView;
