import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import AnyCard from '../tehtava2/AnyCard';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders AnyCard without crashing', () => {
  const wrapper = shallow(<AnyCard />);
  expect(wrapper).toBeTruthy();
});

test('renders title in AnyCards', () => {
  const title1 = 'testiotsikko';
  const title2 = 'toinentestiotsikko';
  const testTitle = (title) => {
    const wrapper = shallow(<AnyCard title={title} />);
    const renderedTitle = wrapper.find('h1').first().text();
    expect(renderedTitle).toBe(title);
  }
  testTitle(title1);
  testTitle(title2);
});

test('renders paragraph in an AnyCard', () => {
  const paragraphText = 'Testikappale';
  const wrapper = shallow(<AnyCard>
    <p>{paragraphText}</p>
  </AnyCard>);
  const renderedSection = wrapper.find('section');
  expect(renderedSection).toBeTruthy();
  const renderedParagraph = renderedSection.find('p').first().text();
  expect(renderedParagraph).toBe(paragraphText);
});

test('renders list in an AnyCard', () => {
  const listItemText = 'Testiriviteksti';
  const wrapper = shallow(<AnyCard>
    <ul>
      <li>{listItemText}</li>
    </ul>
  </AnyCard>);
  const renderedSection = wrapper.find('section');
  expect(renderedSection).toBeTruthy();
  const renderedList = renderedSection.find('ul');
  expect(renderedList).toBeTruthy();
  const renderedRow = renderedList.find('li').first().text();
  expect(renderedRow).toBe(listItemText);
});