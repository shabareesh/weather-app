import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import {citiesOptions, getOptionValue} from "../../utils/utils";

const CitiesDropdown = ({ selectedValue, onChange }) => (
  <Select
    options={citiesOptions}
    className="cities-dropdown"
    value={getOptionValue(selectedValue, citiesOptions)}
    isSearchable={false}
    onChange={onChange}
  />
);

CitiesDropdown.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CitiesDropdown;
