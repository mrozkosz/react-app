import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';

const StyledWrapped = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledCardWrapped = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
  padding: 25px 150px 25px 70px;
  
  @media only screen and (max-width: 1439px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
   @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
  
   @media only screen and (max-width: 550px) {
    padding: 25px !important;
  }
`;

const data = [
  { title: 'Hellow', description: 'okokok', createdAt: '2022-06-28' },
  { title: 'Hellow1', description: 'okokok', createdAt: '2022-06-28' },
  { title: 'Hellow2', description: 'okokok', createdAt: '2022-06-28' },
  { title: 'Hellow3', description: 'okokok', createdAt: '2022-06-28' },
  { title: 'Hellow4', description: 'okokok', createdAt: '2022-06-28' },
  { title: 'Hellow5', description: 'okokok', createdAt: '2022-06-28' },
  { title: 'Hellow6', description: 'okokok', createdAt: '2022-06-28' },
  { title: 'Hellow7', description: 'okokok', createdAt: '2022-06-28' },
];

const Notes = () => (
  <UserPageTemplate pageType="note">
    <StyledWrapped>
      <Input search placeholder="search" />
      <h1>Notes</h1>
    </StyledWrapped>
    <StyledCardWrapped>
      {data.map(item => <Card cardType="note" {...item} key={item.title} />)}
    </StyledCardWrapped>
  </UserPageTemplate>
);


export default Notes;
