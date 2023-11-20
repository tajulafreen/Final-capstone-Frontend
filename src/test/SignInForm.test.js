import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import SignInForm from '../components/forms/SignInForm';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    <Router>
      {component}
    </Router>
  </Provider>,
);

describe('SignInForm Component', () => {
  it('renders SignInForm component', () => {
    const { container } = render(<SignInForm />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
