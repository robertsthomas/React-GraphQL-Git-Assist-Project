import gql from 'graphql-tag'


const SEARCH_USER = gql`
query SearchUser($searchResult: String!) {
	search(type: USER, query: $searchResult, first: 5){
		edges{
			cursor
			textMatches{
				property
				fragment
				highlights{
					text
				}
			}
		}
	}
}
`

export default SEARCH_USER;