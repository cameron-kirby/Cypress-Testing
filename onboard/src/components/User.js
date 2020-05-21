import React from 'react'
import styled from 'styled-components'

const UserCard = styled.div`
    border: 2px black;
    padding: 5%;
    h2 {

    }
`

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your user details...</h3>
  }

  return (
    <UserCard>
        <h2>{details.username}</h2>
        <p>Email: {details.email}</p>
        <p>Password: {details.password}</p>
    </UserCard>
  )
}

export default User