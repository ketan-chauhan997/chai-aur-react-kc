import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams();
  return (
    <div>
      <div>User: {id}</div>
    </div>
  )
}

export default User