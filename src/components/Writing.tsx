import { PostList } from './PostList';
import React from 'react';
import styled from 'styled-components';

const PageStyles = styled.section`
  padding: 3rem 0;
`;

const Writing = (): JSX.Element => {
  return (
    <PageStyles>
      <h2>
        my<span className="yellow">.</span>
        <span className="cyan">writing</span>
      </h2>
      <div className="content">
        <div className="text">
          Prior to persuing a career in code, I was a subpar Creative Writing
          student, so you&apos;ll occationally find me posting verbose and
          adverb riddled takes on my life and code below.
        </div>
      </div>
      <PostList />
    </PageStyles>
  );
};

export default Writing;
