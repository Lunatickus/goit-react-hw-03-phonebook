import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormContacts,
  FormButton,
  FromLabel,
  ErrorText,
  Input,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const ContactForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormContacts autoComplete="off">
        <FromLabel>
          <span>Name</span>
          <Input type="text" name="name" />
          <FormError name="name" />
        </FromLabel>

        <FromLabel>
          <span>Number</span>
          <Input type="tel" name="number" />
          <FormError name="number" />
        </FromLabel>

        <FormButton type="submit">Add contact</FormButton>
      </FormContacts>
    </Formik>
  );
};
