import { ContactForm, ContactList, Filter } from 'components';

const Contacts = () => {
  return (
    <>
      <div className="phoneBookContainer">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default Contacts;
