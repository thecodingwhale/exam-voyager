import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import ReactPaginate from 'react-paginate';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
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

	componentWillReceiveProps(nextProps) {
		if (this.props.location.search !== nextProps.location.search) {
			const params = queryString.parse(nextProps.location.search);
			nextProps.getPosts(params.page, params.limit);
		}
	}

	deletePost = (postId) => {
		this.props.deletePostById(postId);
	}

	handlePaginationClick = ({ selected }) => {
		this.props.changePage(selected);
	}

	render() {
		const { requestType, posts, totalPosts, error } = this.props;
		return (
			<div>
				<div>Number of posts: {totalPosts}</div>
				{error !== false && (
					<div>{error}</div>
				)}
				{requestType === FETCHING ? (
					<div>
						Fetching Posts
					</div>
				) : (
					<div>
						{posts.length !== 0 && (
							<div>
								{posts.map(( post, index ) => (
					        <Card key={post.id} body outline style={{ marginBottom: '8px' }}>
					          <CardTitle>{post.title}</CardTitle>
					          <CardText>{post.content}</CardText>
					          <Button
											onClick={this.deletePost.bind(this, post.id)}
											disabled={requestType === DELETING}
					          >
					          	Delete
					          </Button>
					        </Card>
								))}
							</div>
						)}
					</div>
				)}
				{posts.length !== 0 && (
	        <ReactPaginate
	          previousLabel={'Previous'}
	          nextLabel={'Next'}
	          pageCount={Math.floor(totalPosts / 5) + 1}
	          marginPagesDisplayed={2}
	          pageRangeDisplayed={1}
	          onPageChange={this.handlePaginationClick}
	          containerClassName={'pagination'}
	          breakClassName="page-item"
	          breakLabel={<a className="page-link">...</a>}
	          pageClassName="page-item"
	          previousClassName="page-item"
	          nextClassName="page-item"
	          pageLinkClassName="page-link"
	          previousLinkClassName="page-link"
	          nextLinkClassName="page-link"
	          activeClassName="page-item active"
	        />
				)}
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
    	changePage: (page) => push(`?page=${page + 1}`)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
