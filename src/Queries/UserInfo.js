import gql from 'graphql-tag'

const USER_INFO = gql`
	query ($fragment: String!){
		user(login: $fragment){
			name
			login
			avatarUrl
		}
	}
`

export default USER_INFO;