import gql from 'graphql-tag'

const USER = gql`
query {
  viewer {
		name
		avatarUrl
  }
}
`

export default USER