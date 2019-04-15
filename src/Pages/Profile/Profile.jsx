import React from 'react'
import { Query } from 'react-apollo'
import USER_PROFILE from '../../Queries/UserProfile';

const Profile = ({ location: { state } }) => {
	const { fragment } = state

	return (
		<Query query={USER_PROFILE} variables={{ fragment }}>
			{({ data, loading }) => {

				if (loading) {
					return 'loading'
				}

				console.log(data)
				return (
					<div className=''>
						<div className='d-flex flex-column align-items-center'>
							<img className='rounded-circle' width='200' height='200' src={data ? data.user.avatarUrl : 'https://via.placeholder.com/50'} />

							<p className='h2 font-weight-light'>{data.user.name}</p>
						</div>

						<hr className='w-75' />
					</div>
				)
			}}
		</Query>
	)
}

export default Profile
