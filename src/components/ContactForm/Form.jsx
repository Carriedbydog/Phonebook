import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonLoad from 'components/ButtonLoad/ButtonLoad';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/selectors';

export const Form = ({ handleAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isLoading = useSelector(selectLoading);

  const handleFormSubmit = e => {
    e.preventDefault();

    handleAddContact(name, number);
    setName('');
    setNumber('');
  };
  return (
    <form className="flex " onSubmit={handleFormSubmit}>
      <label className="font-semibold text-2xl">
        Name:
        <input
          className="input input-bordered rounded-xl max-w-xs mr-3 ml-3"
          type="text"
          name="name"
          value={name}
          placeholder="Enter your name"
          pattern="^([a-zA-Z]|\s)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className="font-semibold text-2xl">
        Tel:
        <input
          className="input input-bordered rounded-xl max-w-xs mr-3 ml-3"
          type="tel"
          name="number"
          placeholder="Enter your number"
          pattern="^[0-9]+$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <ButtonLoad isLoading={isLoading} title="Add Contact" />
    </form>
  );
};

Form.propTypes = {
  handleAddContact: PropTypes.func,
};
