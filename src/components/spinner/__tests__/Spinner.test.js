import React from 'react';
import { render } from "@testing-library/react";
import Spinner from "../Spinner";

describe('Spinner', () => {
  test('should match snapshot', () => {
    const { baseElement } = render(<Spinner />);
    expect(baseElement).toMatchSnapshot();
  });
});
