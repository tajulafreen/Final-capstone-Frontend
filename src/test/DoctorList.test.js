import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import DoctorList from '../components/doctor/DoctorList';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('DoctorList Component', () => {
  it('renders DoctorList component', () => {
    const { container } = render(<DoctorList />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
