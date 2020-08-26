import React from 'react';
import styled from 'styled-components';
import { ATagLink } from 'components/atoms/Link';
import GooBlobs from 'containers/animations/GooBlobs';

const Top: React.FC = (props) => {
  const { ...rest } = props;
  return (
    <Wrapper {...rest}>
      <H1>Threejs Works</H1>
      <Body>
        <Text>
          {`Based on `}
          <ATagLink
            path="https://github.com/react-spring/react-three-fiber#readme"
            pathName="react-three-fiber"
          />
        </Text>
        {/* <GooBlobs /> */}
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 30px;
`;

const H1 = styled.h1`
  font-size: 2.4rem;
`;

const Body = styled.div`
  margin-top: 40px;
`

const Text = styled.p`
`

export default Top;
