import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactItem
            contact={contact}
            handleDelete={() => handleDelete(contact.id)}
            key={contact.id}
          />
        );
      })}
    </ul>
  );
};
