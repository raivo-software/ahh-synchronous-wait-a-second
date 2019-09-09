import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TextCard from '../tehtava1/TextCard';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders TextCard without crashing', () => {
  const wrapper = shallow(<TextCard />);
  expect(wrapper).toBeTruthy();
});

test('renders title in TextCards', () => {
  const title1 = 'testiotsikko';
  const title2 = 'toinentestiotsikko';
  const testTitle = (title) => {
    const wrapper = shallow(<TextCard title={title} />);
    const renderedTitle = wrapper.find('h1').first().text();
    expect(renderedTitle).toBe(title);
  }
  testTitle(title1);
  testTitle(title2);
});

test('renders paragraph in TextCards', () => {
  const paragraph1 = 'testikappale';
  const paragraph2 = 'toinentestikappale';
  const testTitle = (paragraph) => {
    const wrapper = shallow(<TextCard content={paragraph} />);
    const renderedParagraph = wrapper.find('p').first().text();
    expect(renderedParagraph).toBe(paragraph);
  }
  testTitle(paragraph1);
  testTitle(paragraph2);
});