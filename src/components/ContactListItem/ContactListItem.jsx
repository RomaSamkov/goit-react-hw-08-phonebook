import { useState } from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useContacts } from 'hooks';
import { Box } from 'components/Box/Box';
import toast from 'react-hot-toast';

const ContactListItem = ({ id, name, number }) => {
  const [currentId, setCurrentId] = useState(null);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);
  const [isEdited, setIsEdited] = useState(false);
  const { contacts, loader, deleteContact, editContact } = useContacts();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'editedName':
        return setEditedName(value);
      case 'editedNumber':
        return setEditedNumber(value);
      default:
        return;
    }
  };

  const updateContact = () => {
    if (isEdited) {
      if (name === editedName && number === editedNumber) {
        setIsEdited(state => !state);
        return;
      }
      if (
        contacts.find(
          contact =>
            contact.name.toLowerCase() === editedName.toLowerCase() &&
            contact.id !== id
        )
      ) {
        toast(`Name ${editedName} exist`);
        return;
      }
      editContact({ id, name: editedName, number: editedNumber });
    }
    setIsEdited(state => !state);
  };

  return (
    <Item>
      {isEdited ? (
        <>
          <input
            typeof="text"
            name="editedName"
            value={editedName}
            onChange={handleChange}
          />
          <input
            typeof="text"
            name="editedNumber"
            value={editedNumber}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <span>{name}:</span>
          <span>{number}</span>
        </>
      )}
      <Box>
        <Button onClick={updateContact}>{isEdited ? 'Save' : 'Edit'}</Button>
        <Button
          disabled={currentId}
          onClick={() => {
            deleteContact(id);
            setCurrentId(id);
          }}
        >
          {loader && currentId ? 'Deleting...' : 'Delete'}
        </Button>
      </Box>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
