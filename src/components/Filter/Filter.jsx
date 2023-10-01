import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

export const Filter = ({ inputFilterData }) => {
  const filter = useSelector(selectFilter);

  return (
    <div className="mb-6">
      <label className="font-semibold text-2xl">
        Find contact by name:
        <input
          className="input input-bordered rounded-xl max-w-xs mr-3 ml-3"
          type="text"
          value={filter}
          placeholder="Enter contact name"
          onChange={inputFilterData}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  inputFilterData: PropTypes.func,
};
