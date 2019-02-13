import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Alert, Row, Col } from 'reactstrap';
import PostForm from '../../components/PostForm';
import { FETCHING } from '../../shared/constants';
import { getPostById } from '../Post/actions';
import { updatePost } from './actions';

class PostEdit extends Component {
	componentDidMount() {
		this.props.getPostById(this.props.match.params.id);
	}

  handleOnSubmit = post => {
    return new Promise(resolve => {
    	resolve(this.props.updatePost(this.props.match.params.id, post));
    });
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
		    	<Row>
		    		<Col sm="12" md={{ size: 7, offset: 2 }}>
							{error !== false && (
								<Alert color="danger">{error}</Alert>
							)}
				      <PostForm
				      	postId={this.props.match.params.id}
				      	initialValues={post}
				      	onSubmit={this.handleOnSubmit}
				      />
		    		</Col>
		    	</Row>
				)}
		  </div>
		);
	}
}

const mapStateToProps = ({ postReducer, postEditReducer }) => {
	const { error, post } = postReducer;
	return {
		requestType : postReducer.requestType || postEditReducer.requestType,
		error,
		post,
	};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    	getPostById,
    	updatePost,
    	changePage: (url) => push(url)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEdit);