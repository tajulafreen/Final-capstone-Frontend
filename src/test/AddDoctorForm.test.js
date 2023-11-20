import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddDoctorForm from '../components/doctor/AddDoctorForm';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('AddDoctorForm Component', () => {
  it('renders AddDoctorForm component', () => {
    const { container } = render(<AddDoctorForm />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
