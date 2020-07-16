import React from 'react'
import MemberCard from './MemberCard'

function Board({ members, colMdSize }) {
  return(
    <div class="container-fluid padding">
      <div className="row padding">
        {members.map((member, idx) => {
          return <MemberCard member={member} key={idx} colMdSize={colMdSize} />
        })}
      </div>
    </div>
  )
}

export default Board;