import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Jumbotron, Button, Alert } from 'reactstrap';
import {
	FETCHING,
	DELETING,
} from '../../shared/constants';
import {
	getPostById,
	deletePostById,
} from './actions';
import {
	DELETE_POST,
} from './constants';

class Post extends Component {
	componentDidMount() {
		this.props.getPostById(this.props.match.params.id);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.requestType === DELETE_POST) {
			nextProps.changePage('/');
		}
	}

	deletePost = (postId) => {
		this.props.deletePostById(postId);
	}

	editPost = (postId) => {
		this.props.changePage(`/post/${postId}/edit`);
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
					<Alert color="danger">{error}</Alert>
				)}
				{post && (
		      <Jumbotron>
		        <p className="lead">{post.title}</p>
		        <hr className="my-2" />
		        <p>{post.content}</p>
		        <p className="lead">
		          <Button
		          	color="danger"
		          	onClick={this.deletePost.bind(this, post.id)}
		          	disabled={requestType === DELETING}
		          >
		          	{requestType === DELETING ? 'Deleting...' : 'Delete'}
		          </Button>{' '}
		          <Button
		          	color="primary"
		          	onClick={this.editPost.bind(this, post.id)}
		          >
		          	Edit
		          </Button>
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
    	deletePostById,
    	changePage: (url) => push(url)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
