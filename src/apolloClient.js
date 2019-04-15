import ApolloClient, { InMemoryCache } from 'apollo-boost'

const GITHUB_BASE_URL = 'https://api.github.com/graphql'

const client = new ApolloClient({
	uri: GITHUB_BASE_URL,
	request: operation => {
		const token = sessionStorage.getItem("token")
		if (token) {
			operation.setContext({
				headers: {
					authorization: `bearer ${token}`
				}
			});
		}
	},
	cache: new InMemoryCache()
});

export default client;