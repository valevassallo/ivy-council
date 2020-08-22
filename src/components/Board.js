import React from 'react'
import MemberCard from './MemberCard'

function Board({ members, colMdSize }) {
  return(
    <div className="container-fluid padding">
      <div className="padding members-container">
        {members.map((member, idx) => {
          return <MemberCard member={member} key={idx} />
        })}
      </div>
    </div>
  )
}

export default Board;