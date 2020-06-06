import React from 'react';
import styled from 'styled-components';

const StyleATagLink = styled.a`
  color: #01baa5;
  text-decoration: underline;
`
export const ATagLink = (props: {path: string, pathName: string}) => {
  return (
    <StyleATagLink href={props.path} target="_blank" rel="noopener noreferrer">
      {props.pathName}
    </StyleATagLink>
  )
}