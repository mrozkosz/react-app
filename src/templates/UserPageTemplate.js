import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/molecules/Sidebar/Sidebar';


const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageContext={pageType} />
    {children}
  </>
);

UserPageTemplate.prototype = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default UserPageTemplate;
