import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Jumbotron, Button } from 'reactstrap';
import {
	FETCHING,
} from '../../shared/constants';
import {
	getPostById,
} from './actions';

class Post extends Component {
	componentDidMount() {
		this.props.getPostById(this.props.match.params.id)
	}

	render() {
		const { requestType, error, post } = this.props;
		if (requestType === FETCHING) {
			return (
				<div>
					Fetching Post...
				</div>
			);
		}
		return (
		  <div>
				{error !== false && (
					<div>{error}</div>
				)}
				{post && (
		      <Jumbotron>
		        <p className="lead">{post.title}</p>
		        <hr className="my-2" />
		        <p>{post.content}</p>
		        <p className="lead">
		          <Button color="danger">Delete</Button>
		        </p>
		      </Jumbotron>
				)}
		  </div>
		);
	}
}

const mapStateToProps = ({ postReducer }) => {
	const { requestType, error, post } = postReducer;
	return {
		requestType,
		error,
		post,
	};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    	getPostById,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
