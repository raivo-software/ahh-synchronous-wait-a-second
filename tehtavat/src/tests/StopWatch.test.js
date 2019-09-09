import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import StopWatch from '../tehtava3/StopWatch';

Enzyme.configure({ adapter: new EnzymeAdapter() });
jest.setTimeout(50000);

test('renders StopWatch without crashing', () => {
  const wrapper = shallow(<StopWatch />);
  expect(wrapper).toBeTruthy();
});

test('renders Start button in StopWatch', () => {
  const wrapper = shallow(<StopWatch />);
  const startButton = wrapper.find('button').filterWhere(x => x.text() === 'Start');
  expect(startButton.length).toBe(1);
});

test('renders Stop button in StopWatch', () => {
  const wrapper = shallow(<StopWatch />);
  const stopButton = wrapper.find('button').filterWhere(x => x.text() === 'Stop');
  expect(stopButton.length).toBe(1);
});

test('renders time display as 0:0:0, or 00:00:00 at startup', () => {
  const wrapper = shallow(<StopWatch />);
  const displayText = wrapper.find('h1').text();
  const digits = displayText.split(':');
  expect(digits.length).toBe(3);
  digits.forEach(x => expect(parseInt(x)).toBe(0));
});


test('StopWatch buttons works correctly', async () => {
  const wrapper = shallow(<StopWatch />);
  const startButton = wrapper.find('button').filterWhere(x => x.text() === 'Start');
  const stopButton = wrapper.find('button').filterWhere(x => x.text() === 'Stop');

  const getLastDigitFromDisplay = () => parseInt(wrapper.find('h1').text().split(':')[2]);

  startButton.simulate('click');
  await (new Promise(resolve => setTimeout(resolve, 3500)));
  expect(getLastDigitFromDisplay()).toBe(3);
  
  stopButton.simulate('click');
  await (new Promise(resolve => setTimeout(resolve, 3500)));
  expect(getLastDigitFromDisplay()).toBe(3);
  
  startButton.simulate('click');
  await (new Promise(resolve => setTimeout(resolve, 3000)));
  expect(getLastDigitFromDisplay()).toBe(6);
});
