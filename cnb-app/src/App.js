import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './style.css';

class App extends Component {
	render() {
		return (
			<Fragment>
				<header className="cg-flexBox header">
					<h1 className="cg-ta-c">Current exchange rates from ČNB</h1>
				</header>
				<h2 className="cg-ta-c cg-w100">Data actual for date: #</h2>
				<div className="cg-table">
					<div className="cg-table__head">
						<div className="cg-tableHead__cell">1</div>
						<div className="cg-tableHead__cell">1</div>
						<div className="cg-tableHead__cell">1</div>
						<div className="cg-tableHead__cell">1</div>
						<div className="cg-tableHead__cell">1</div>
					</div>
					<div className="cg-table__body cg-tableBody">
						<div className="cg-tableBody__row">
							<div className="cg-tableBody__row__cell">2</div>
							<div className="cg-tableBody__row__cell">2</div>
							<div className="cg-tableBody__row__cell">2</div>
							<div className="cg-tableBody__row__cell">2</div>
							<div className="cg-tableBody__row__cell">2</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default App;
