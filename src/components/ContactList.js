import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";

const List = styled.ul`
max-width: 400px;
display: flex;
flex-direction: row;
`;


export default function ContactList({children}) {

  return (
    <List>
      {children}
    </List>
  )
}

ContactList.propTypes = {
  children: PropTypes.object.isRequired
}
