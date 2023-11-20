import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import DeleteDoctor from '../components/doctor/DeleteDoctor';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('DeleteDoctor Component', () => {
  it('renders DeleteDoctor component', () => {
    const { container } = render(<DeleteDoctor />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
