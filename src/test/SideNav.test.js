import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import SideNav from '../components/navbar/SideNav';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('SideNav Component', () => {
  it('renders SideNav component', () => {
    const { container } = render(<SideNav />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
