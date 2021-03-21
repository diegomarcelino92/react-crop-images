/* eslint-disable no-undef */

import { shallow } from 'enzyme';

import App from '../../src/app';

test('Redere APP correctly', () => {
  const app = shallow(<App />);

  expect(app.text()).toEqual('<Layout />');
});
