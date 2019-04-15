import React from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import USER_INFO from '../../Queries/UserInfo'


const User = ({ names }) => (
	<ul className='list-group-flush'>
		{names.map(([{ fragment }], idx) => (
			<li key={idx} className='list-group-item'>
				<Query query={USER_INFO} variables={{ fragment }}>
					{({ data, loading }) => {
						if (loading) {
							return 'loading'
						}

						// console.log(data)
						return (
							<Link to={{
								pathname: '/profile',
								state: { fragment }
							}}>
								<div className='d-flex' style={{ cursor: 'pointer' }}>
									<img className='rounded-circle' width='50' height='50' src={data ? data.user.avatarUrl : 'https://via.placeholder.com/50'} />

									<p className='lead align-self-center pl-3'>{fragment}</p>
								</div>
							</Link>
						)
					}}
				</Query>
			</li>
		))}
	</ul>
)

export default User
