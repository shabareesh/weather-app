import React from 'react';
import { render } from "@testing-library/react";
import CitiesDropdown from "../CitiesDropdown";

describe('CitiesDropdown', () => {
  const props = {
    onChange: jest.fn(),
    selectedValue: 'San Antonio'
  };

  test('should match snapshot', () => {
    const { baseElement } = render(<CitiesDropdown {...props} />);

    expect(baseElement).toMatchSnapshot();
  });

});
