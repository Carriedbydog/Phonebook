import { ContactList } from '../Contacts/ContactList';
import { Filter } from '../Filter/Filter';
import { nanoid } from 'nanoid';
import { Form } from '../ContactForm/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/phonebook/slice';
import { selectContacts, selectFilter } from 'redux/selectors';
import {
  addContactThunk,
  fetchContactsThunk,
} from 'redux/phonebook/operations';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleAddContact = (name, number) => {
    const item = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (item) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    dispatch(addContactThunk(contact));
  };

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen flex justify-center items-center">
      <div className="rounded-xl p-6 bg-red-100 ">
        <h1 className="text-4xl items-center justify-center flex mb-4 font-bold">
          PhoneBook
        </h1>
        <Form handleAddContact={handleAddContact} />
        <hr className="h-px my-8  bg-black border-0 rounded  dark:bg-gray-700" />
        <h2 className="text-4xl items-center justify-center flex mb-4 font-bold">
          Contacts
        </h2>
        <Filter inputFilterData={handleChangeFilter} />
        <ContactList contacts={filterContacts()} />
      </div>
    </div>
  );
};

export default App;
