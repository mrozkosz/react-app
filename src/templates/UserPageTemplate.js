import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/molecules/Sidebar/Sidebar';


const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

UserPageTemplate.prototype = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
