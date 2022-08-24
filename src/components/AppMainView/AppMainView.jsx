import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Title } from './AppMainView.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactLIst';
import Filter from 'components/Filter';
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
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <Title>Contacts</Title>
      <div>
        <Filter value={filter} onChange={handleFilterInput} />
        <h3>Total contacts: {filteredContacts.length}</h3>
      </div>

      {loader ? (
        Spinner.threeCircles
      ) : (
        <ContactList contacts={filteredContacts} />
      )}
    </Container>
  );
};

export default AppMainView;
