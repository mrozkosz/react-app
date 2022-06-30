import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImage = styled.img`
    width: 100%;
    height: auto;
`;

const Image = ({ url, width, alt }) => (
  <picture>
    <source srcSet={`https://prezentmarzen.com/cdn-cgi/image/format=avif,width=${width}${url}`} type="image/avif" />
    <StyledImage src={`https://prezentmarzen.com${url}`} alt={alt} />
  </picture>
);

Image.defaultProps = {
  width: 750,
};

Image.prototype = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
