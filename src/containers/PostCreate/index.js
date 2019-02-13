import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row, Alert } from 'reactstrap';
import PostForm from './PostForm';
import { createPost }  from './actions';
import {
	CREATE_POST,
} from './constants';

class PostCreate extends Component {
	componentWillReceiveProps(nextProps) {
		if (nextProps.requestType === CREATE_POST) {
			nextProps.changePage(`/post/${nextProps.post.id}`);
		}
	}

  handleOnSubmit = post => {
    return new Promise(resolve => {
    	resolve(this.props.createPost(post));
    });
  }

  render() {
  	const { error } = this.props;
    return (
    	<Row>
    		<Col sm="12" md={{ size: 7, offset: 2 }}>
					{error !== false && (
						<Alert color="danger">{error}</Alert>
					)}
    			<PostForm onSubmit={this.handleOnSubmit} />
    		</Col>
    	</Row>
    );
  }
}

const mapStateToProps = ({ postCreateReducer }) => {
	const { requestType, post, error } = postCreateReducer;
	return {
		requestType,
		post,
		error,
	};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    	createPost,
    	changePage: (url) => push(url)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCreate);
