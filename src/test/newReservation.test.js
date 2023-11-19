import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import NewReservation from '../components/pages/newReservation';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('NewReservation Component', () => {
  it('renders NewReservation component', () => {
    const { container } = render(<NewReservation />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
