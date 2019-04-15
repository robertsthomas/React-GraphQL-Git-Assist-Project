import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import USER from '../../Queries/User'
import { Query } from 'react-apollo'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI
const GITHUB_AUTH = process.env.REACT_APP_GITHUB_AUTH
const token = sessionStorage.getItem('token')


const Nav = () => {

	if (token) {
		return (
			<Query query={USER}>
				{({ data, loading }) => {
					const { viewer } = data
					if (loading) {
						return <p>Loading...</p>
					}

					return (
						<nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
							<div className="container-fluid">
								<a href="#" className="navbar-brand">Gister</a>
								<div className="collapse navbar-collapse">
									<ul className="navbar-nav">
										<li className="nav-item active"><NavLink to='/' className="nav-link">Home</NavLink></li>
										<li className="nav-item"><NavLink to='/profile' className="nav-link">Profile</NavLink></li>
									</ul>
								</div>
								<img src={viewer.avatarUrl} className="img-fluid rounded-circle float-right ml-auto p-1" width={50} ></img>
								<button type='button' className="btn btn-outline-link">
									<a href='/' onClick={() => sessionStorage.removeItem("token")}> Logout</a>
								</button>
							</div>
						</nav>
					)
				}}
			</Query>
		)
	} else {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a href="#" className="navbar-brand">Gister</a>
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav">
							<li className="nav-item active"><a href="" className="nav-link">Home</a></li>
							<li className="nav-item"><a href="" className="nav-link">Profile</a></li>
						</ul>
					</div>
					{/* <img src={viewer.avatarUrl} className="img-fluid rounded-circle float-right ml-auto p-1" width={50} ></img> */}
					<button type='button' className="btn btn-outline-link">
						<a
							href={`${GITHUB_AUTH}?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
						>Login</a>
					</button>
				</div>
			</nav>
		)
	}
}

export default withRouter(Nav)
