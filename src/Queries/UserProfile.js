import gql from 'graphql-tag'

const USER_PROFILE = gql`
	query ($fragment: String!){
		user(login: $fragment){
			name
			login
			avatarUrl
			gists(first: 100){
				totalCount
			}
			repositories(first: 100){
				totalCount
			}
		}
	}
`

export default USER_PROFILE;