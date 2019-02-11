import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { getPosts } from './actions';

class Home extends Component {
	componentDidMount() {
		const params = queryString.parse(this.props.location.search);
		this.props.getPosts(params.page, params.limit);
	}

	render() {
		const { fetching, posts, totalPosts } = this.props;
		if (fetching) {
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
				{posts.map(( post, index ) => (
					<div key={post.id}>
						<div>{post.title} : {post.id}</div>
						<div>{post.content}</div>
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = ({ homeReducer }) => {
	const { fetching, posts, totalPosts } = homeReducer;
	return {
		totalPosts,
		fetching,
		posts,
	};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    	getPosts,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
