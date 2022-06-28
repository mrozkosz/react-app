import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import logoIcon from 'assets/icons/logo.svg';
import bulbIcon from 'assets/icons/bulb.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const links = [
  { to: '/', icon: penIcon, name: 'home' },
  { to: '/twitters', icon: twitterIcon, name: 'twitters' },
  { to: '/articles', icon: bulbIcon, name: 'articles' },
];

const Sidebar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <StyledLogoLink to="/" />
    <StyledLinksList>

      {links.map(item => (
        <li key={`page_${item.name}`}>
          <ButtonIcon
            as={NavLink}
            to={item.to}
            icon={item.icon}
            className={isActive => isActive || 'active'}
          />
        </li>
      ))}

    </StyledLinksList>
    <StyledLogoutButton
      as={NavLink}
      to="/login"
      icon={logoutIcon}
      className={isActive => isActive || 'active'}
    />
  </StyledWrapper>
);

export default Sidebar;
