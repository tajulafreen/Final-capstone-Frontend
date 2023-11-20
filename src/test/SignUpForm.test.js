import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUpForm from '../components/forms/SignUpForm';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    <Router>
      {component}
    </Router>
  </Provider>,
);

describe('SignUpForm Component', () => {
  it('renders SignUpForm component', () => {
    const { container } = render(<SignUpForm />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
