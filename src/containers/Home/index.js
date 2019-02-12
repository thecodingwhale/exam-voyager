import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import {
	FETCHING,
	DELETING,
} from './constants';
import {
	getPosts,
	deletePostById,
} from './actions';

class Home extends Component {
	componentDidMount() {
		const params = queryString.parse(this.props.location.search);
		this.props.getPosts(params.page, params.limit);
	}

	deletePost = (postId) => {
		this.props.deletePostById(postId);
	}

	render() {
		const { requestType, posts, totalPosts, error } = this.props;
		if (requestType === FETCHING) {
			return (
				<div>
					Fetching Blog Posts
				</div>
			);
		}
		if (posts.length === 0) {
			return (
				<div>
					No Posts
				</div>
			);
		}
		return (
			<div>
				Number of posts: {totalPosts}
				{error !== false && (
					<div>{error}</div>
				)}
				{posts.map(( post, index ) => (
					<div key={post.id}>
						<div>{post.title} : {post.id}</div>
						<div>{post.content}</div>
						<button
							type="button"
							onClick={this.deletePost.bind(this, post.id)}
							disabled={requestType === DELETING}
						>
							delete
						</button>
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = ({ homeReducer }) => {
	const { requestType, posts, totalPosts, error } = homeReducer;
	return {
		totalPosts,
		requestType,
		posts,
		error,
	};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    	getPosts,
    	deletePostById,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
