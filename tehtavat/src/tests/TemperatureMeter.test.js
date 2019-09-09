import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TemperatureMeter from '../tehtava4/TemperatureMeter';
import TemperatureIcon from '../tehtava4/TemperatureIcon';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders TemperatureMeter without crashing', () => {
  const wrapper = shallow(<TemperatureMeter />);
  expect(wrapper).toBeTruthy();
});

test('renders TemperatureIcon', () => {
  const wrapper = shallow(<TemperatureMeter />);
  const icon = wrapper.find(TemperatureIcon);
  expect(icon.length).toBe(1);
});

const mockFetch = (temperature, done) => {
  const mockResponse = { temperature: temperature };
  const mockJsonPromise = Promise.resolve(mockResponse);
  const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

  const wrapper = shallow(<TemperatureMeter />);
  const expectedTempProp = (temperature + 30) / 60;

  process.nextTick(() => {
    const tempElement = wrapper.findWhere(x => x.text().includes(temperature.toString()));
    expect(tempElement.length > 0).toBeTruthy();
    const icon = wrapper.find(TemperatureIcon);
    expect(icon.prop('temperature')).toBe(expectedTempProp);
    global.fetch.mockClear();
    done();
  });
}

test('renders fetched temperature', done => {
  const temperature = 24;
  mockFetch(temperature, done);
});

test('renders another fetched temperature', done => {
  const temperature = -15;
  mockFetch(temperature, done);
});

