import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/phonebook/operations';
import { selectContacts, selectError, selectLoading } from 'redux/selectors';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal/Modal';
import { Pencil } from 'lucide-react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const { open, close, isModalOpen, content } = useModal();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const handleContactDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1 className="text-xl">Something went wrong...😢</h1>}
      <ol className="flex flex-col justify-between gap-6 list-decimal">
        {contacts.map(contact => (
          <li
            className="flex justify-between items-center text-2xl rounded-lg hover:bg-rose-200 border-2 border-gray-400/50 p-2"
            key={contact.id}
          >
            <span className="text-xl text-gray-400">Name:</span>
            {contact.name}
            <span className="text-xl text-gray-400">Number:</span>
            {contact.number}
            <div className="flex justify-center items-center gap-1">
              <button
                className="p-2 font-semibold rounded-xl text-xl text-white bg-yellow-400 hover:bg-yellow-500 "
                onClick={() => open(contact)}
              >
                <Pencil color="#050505" />
              </button>
              <button
                className="p-2 font-semibold rounded-xl text-xl text-white bg-red-400 hover:bg-red-600 border-2 "
                onClick={() => handleContactDelete(contact.id)}
                type="button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
        {isModalOpen && <Modal close={close} contact={content} />}
      </ol>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
