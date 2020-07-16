import React from 'react'

function MemberCard({ member, colMdSize }) {
  return(
    <div className={`col-md-${colMdSize} col-sm-6`}>
			<div className="card">
				<img className="card-img-top" src="https://www.clker.com/cliparts/L/C/Q/c/G/1/head-of-person-md.png" alt="team member" />
				<div className="card-body">
					<h4 className="card-title">{member.name}</h4>
					<p className="card-text">{member.role}</p>
					<p className="card-text">{member.university}</p>
				</div>
			</div>
		</div>
  )
}

export default MemberCard;