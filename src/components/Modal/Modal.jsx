import { Send, XCircle } from 'lucide-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContactThunk } from 'redux/phonebook/operations';

export const Modal = ({ contact, close }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const id = contact.id;
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    dispatch(updateContactThunk({ id, name, number }));
    close();
  };

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };
  return (
    <div
      className="inset-0 fixed flex justify-center items-center bg-black/50"
      onClick={handleBackDropClick}
    >
      <div className="border p-4 relative bg-red-100 rounded-xl ">
        <button className=" absolute top-2 right-3" onClick={close}>
          <XCircle color="#050505" />
        </button>
        <form className="flex flex-col py-4 gap-2" onSubmit={handleSubmit}>
          <label className="text-xl font-semibold">Name:</label>
          <input
            className="input input-bordered w-full max-w-xs rounded-lg p-1"
            autoFocus
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label className="text-xl font-semibold">Number:</label>
          <input
            className="input input-bordered w-full max-w-xs rounded-lg p-1 mb-2"
            id="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <button className="flex justify-center items-center bg-green-600 hover:bg-green-700 px-1 py-1  text-black hover:text-white">
            <span className="mx-1 text-xl font-semibold">Confirm</span>{' '}
            <Send color="#fafafa" />
          </button>
        </form>
      </div>
    </div>
  );
};
