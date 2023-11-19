import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import DoctorDetails from '../components/doctor/DoctorDetails';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('DoctorDetails Component', () => {
  it('renders DoctorDetails component', () => {
    const { container } = render(<DoctorDetails />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
