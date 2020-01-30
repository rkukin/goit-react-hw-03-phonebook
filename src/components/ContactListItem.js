import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";

const ListItem = styled.li`
margin-right: 30px;
max-width: 50%;
`;

const DeleteButton = styled.button`
max-width: 50%;
border-radius: 5px;
`;


export default function ContactListItem({handleDelete, contact: {id, name, number}}) {

  return (
    <>
      <ListItem key={id}>{name}: {number} </ListItem><DeleteButton
      onClick={() => handleDelete(id)}>Delete</DeleteButton>
    </>
  )
}

ContactListItem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired
}