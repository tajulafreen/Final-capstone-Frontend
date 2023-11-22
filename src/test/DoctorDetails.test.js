import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import DoctorDetails from '../components/doctor/DoctorDetails';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    <Router>
      {component}
    </Router>
  </Provider>,
);

describe('DoctorDetails Component', () => {
  it('renders DoctorDetails component', () => {
    const { container } = render(<DoctorDetails />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
