import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const CADR_TYPE = {

  note: 'note',
  twitter: 'twitter',
  article: 'article',
};

const StyledWrapper = styled.div`
   min-height: 380px;
   box-shadow: 0 10px 30px -10px hsla(0,0%,0%,0.1);
   border-radius: 10px;
   overflow: hidden;
   position:relative;
   display: grid;
   grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
    position:relative;
    padding: 0px 30px;
    background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

    :first-of-type{
      z-index: 99;
    }
    ${({ flex }) => flex && css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 17px 30px;
    `};
`;

const DateInfo = styled(Paragraph)`
    margin:0 0 10px;
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.xs}
`;

const StyledHeading = styled(Heading)`
    padding: 5px 0 0;
`;

const StyledAvatar = styled.img`
    width:86px;
    height:86px;
    border:3px solid ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
    position: absolute;
    right: 25px;
    top:25px;
    border-radius: 50%;

`;

const StyledLinkButton = styled.a`   
    display:block;
    width:47px;
    height:47px;
    border-radius: 50%;
    background: white url(${LinkIcon}) no-repeat;
    background-size: 50%;
    background-position: 50%;
    position: absolute;
    right: 25px;
    top:25px;
`;

const Card = ({ cardType }) => (
  <>
    <StyledWrapper>
      <InnerWrapper activeColor={cardType}>
        <StyledHeading>Hellow</StyledHeading>
        <DateInfo>3 days</DateInfo>

        {cardType === CADR_TYPE.twitter && <StyledAvatar src="https://unavatar.io/twitter/jack" activeColor={cardType} />}
        {cardType === CADR_TYPE.article && <StyledLinkButton href="https://wp.pl" />}

      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>fwefwefewefwe</Paragraph>
        <Button>ok</Button>
      </InnerWrapper>
    </StyledWrapper>
  </>
);

Card.prototypes = {
  cardType: PropTypes.string,
};

Card.defaultProps = {
  cardType: CADR_TYPE.twitter,
};

export default Card;
