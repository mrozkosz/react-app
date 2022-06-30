import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Image from 'components/atoms/Image/Image';

const Articles = () => {
  const width = typeof window !== 'undefined' ? window.innerWidth : null;

  return (
    <UserPageTemplate pageType="article">
      <>
        <h1>Articles</h1>
        <Image url="/img/pmcategorygallery/1/large_default-830-skok-ze-spadochronem-9bd4.jpg" width={width} alt="okokok" />
        <Image url="/47649-large_default/dream-jump-ekstremalny-skok-bungee.jpg" width={width} alt="okokok" />
      </>
    </UserPageTemplate>
  );
};

export default Articles;
