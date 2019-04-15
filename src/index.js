import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import client from './apolloClient'
import {ApolloProvider} from 'react-apollo'
import './custom.scss'
import './index.css';
import * as serviceWorker from './serviceWorker';
require('dotenv').config()

const jsx = (
	<ApolloProvider client={client}>
		<AppRouter />
	</ApolloProvider>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
