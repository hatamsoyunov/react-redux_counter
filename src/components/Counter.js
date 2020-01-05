import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../redux/actions';

const Counter = ({ counter, inc, dec, rnd }) => {
	return (
		<div className="jumbotron">
			<h2 id="counter">{counter}</h2>
			<button onClick={dec} className="btn btn-primary btn-lg">
				DEC
			</button>
			<button onClick={inc} className="btn btn-primary btn-lg">
				INC
			</button>
			<button onClick={rnd} className="btn btn-primary btn-lg">
				RND
			</button>
		</div>
	);
};

// Передаем состояние
const mapStateToProps = state => {
	return {
		counter: state,
	};
};

// Вторым параметром передаем все action'ы, сам connect будет их диспатчить и соединить с store
export default connect(mapStateToProps, actions)(Counter);
