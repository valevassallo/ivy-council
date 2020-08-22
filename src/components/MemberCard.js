import React from 'react'

function MemberCard({ member }) {
  return(
    <div className="row individual-member-card">
			<img className="card-image" src={member.pic} alt="team member" />
			<div className="member-info">
				<strong className="card-title">{member.name} | {member.role} | {member.university}</strong>
				<a className="email-link" href="#">email goes here</a>
				<p className="member-bio">
				K-pop (short for Korean pop; Korean: 케이팝) is a genre of popular music originating in South Korea. It is influenced by styles and genres from around the world, such as experimental, rock, jazz, gospel, hip hop, R&B, reggae, electronic dance, folk, country, and classical on top of its traditional Korean music roots. The more modern form of the genre emerged with the formation of one of the earliest K-pop groups, Seo Taiji and Boys, in 1992. Their experimentation with different styles and genres of music and integration of foreign musical elements helped reshape and modernize South Korea's contemporary music scene.
				</p>
			</div>
		</div>
  )
}

export default MemberCard;