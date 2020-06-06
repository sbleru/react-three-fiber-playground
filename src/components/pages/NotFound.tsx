import React from 'react';
import styled from 'styled-components';

const NotFound: React.FC = (props) => {
  const { ...rest } = props;
  return <Wrapper {...rest}>Not Found</Wrapper>;
};

const Wrapper = styled.div``;

export default NotFound;
