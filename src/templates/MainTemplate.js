import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';


const StyledWrapper = styled.div`
  padding-left: 100px;
`;

const MainTemplate = ({ children }) => (
  <StyledWrapper>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </StyledWrapper>
);

MainTemplate.prototype = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
