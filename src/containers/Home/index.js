import React, { Component, Fragment } from 'react';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import ReactPaginate from 'react-paginate';
import {
	FETCHING,
} from '../../shared/constants';
import {
	getPosts,
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

	handlePaginationClick = ({ selected }) => {
		this.props.changePage(selected);
	}

	render() {
		const { requestType, posts, totalPosts, error } = this.props;
		return (
			<div>
				{error !== false && <div>{error}</div>}
				{requestType === FETCHING && <div>Fetching...</div>}
				{totalPosts !== 0 && <div>Number of posts: {totalPosts}</div>}
				{posts.length !== 0 && (
					<Fragment>
						{posts.map(( post, index ) => (
							<div key={post.id}>
								<Link to={`/post/${post.id}`}>
									{post.title}
								</Link>
								<p>{post.content}</p>
							</div>
						))}
					</Fragment>
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
    	changePage: (page) => push(`?page=${page + 1}`)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
