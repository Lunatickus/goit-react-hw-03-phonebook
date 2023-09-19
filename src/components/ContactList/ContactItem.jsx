import { ContactListItem, DeleteButton } from './ContactItem.styled';

export const ContactItem = ({ contact, handleDelete }) => {
  return (
    <ContactListItem>
      {contact.name}: {contact.number}
      <DeleteButton type="button" onClick={() => handleDelete(contact.id)}>
        Delete
      </DeleteButton>
    </ContactListItem>
  );
};
