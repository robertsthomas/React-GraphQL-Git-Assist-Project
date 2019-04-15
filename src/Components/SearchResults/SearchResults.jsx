import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import SEARCH_USER from '../../Queries/SearchUser'
import User from './User';



const SearchResults = ({ searchResult }) => {
	return (
		<Query query={SEARCH_USER} variables={{ searchResult }}>
			{({ data: searchData, loading: loadingSearch }) => {
				if (loadingSearch) {
					return 'loading'
				}
				console.log(searchData)
				let res = []
				let user = []

				searchData.search.edges.map(({ textMatches: matches }) => {
					res.push(matches.filter(res => res.property === 'login'))
					user = res.filter(result => result[0] != null)
					// console.log(user)
				})

				return (
					<div>
						<User names={user} />
					</div>
				)
			}}
		</Query>
	)
}

export default SearchResults
