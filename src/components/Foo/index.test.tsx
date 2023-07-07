import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import Foo from './index';

describe('组件测试: Button', function () {
  test('render correctly', () => {
    const { asFragment } = render(<Foo title="11" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
