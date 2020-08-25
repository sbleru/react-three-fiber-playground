import React from 'react'
import MediaQuery from "react-responsive";

export const SPView: React.FC = (props) => {
  return(
    <MediaQuery query="(max-width: 767px)">
      {props.children}
    </MediaQuery>
  )
}

export const PCView: React.FC = (props) => {
  return(
    <MediaQuery query="(min-width: 768px)">
      {props.children}
    </MediaQuery>
  )
}