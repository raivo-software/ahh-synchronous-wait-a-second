import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../App';
import TextCard from '../tehtava1/TextCard';
import AnyCard from '../tehtava2/AnyCard';
import StopWatch from '../tehtava3/StopWatch';
import TemperatureMeter from '../tehtava4/TemperatureMeter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders App without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});

test('renders three TextCards', () => {
  const wrapper = shallow(<App />);
  const textCards = wrapper.find(TextCard);
  expect(textCards.length).toBe(3);
});

test('renders two AnyCards', () => {
  const wrapper = shallow(<App />);
  const anyCards = wrapper.find(AnyCard);
  expect(anyCards.length).toBe(2);
});

test('renders a StopWatch', () => {
  const wrapper = shallow(<App />);
  const stopWatch = wrapper.find(StopWatch);
  expect(stopWatch.length).toBe(1);
});

test('renders a TemperatureMeter', () => {
  const wrapper = shallow(<App />);
  const temperatureMeter = wrapper.find(TemperatureMeter);
  expect(temperatureMeter.length).toBe(1);
});