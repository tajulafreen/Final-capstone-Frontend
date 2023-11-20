import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import MyReservations from '../components/pages/myReservations';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('MyReservations Component', () => {
  it('renders MyReservations component', () => {
    const { container } = render(<MyReservations />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
