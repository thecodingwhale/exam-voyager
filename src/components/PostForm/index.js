import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import api from '../../api';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 100) {
    errors.title = 'Must be 100 characters or less.';
  }

  if (!values.content) {
    errors.content = 'Required';
  } else if (values.content.length < 150) {
    errors.content = 'Must be 150 characters or more.';
  }

  return errors;
};

const asyncValidate = (values, dispatch, props) => {
  return api.validatePost(props.postId, values.title)
    .catch(err => {
      const error = {
        title: err.message,
      };
      throw error;
    });
};

const renderField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error, warning, submitting }
}) => {
  const props = {};
  if (asyncValidating) {
    props.disabled = true;
  } else {
    if (touched) {
      if (error || warning) {
        props.invalid = true;
      } else {
        props.valid = true;
      }
    }
  }

  return (
    <FormGroup row >
      <Label sm={2}>{label}</Label>
      <Col sm={10}>
        <Input {...props} {...input} type={type} rows={4} disabled={submitting} />
        {touched &&
          ((error && <FormFeedback>{error}</FormFeedback>) ||
            (warning && <FormText>{warning}</FormText>))}
      </Col>
    </FormGroup>
  );
};

let PostForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="title"
        type="text"
        component={renderField}
        label="Title"
      />
      <Field
        name="content"
        type="textarea"
        component={renderField}
        label="Content"
      />
      <FormGroup row>
        <Label sm={2}></Label>
        <Col sm={10}>
          <Button color="primary" type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
          </Button>{' '}
          <Button color="primary" type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

PostForm = reduxForm({
  form: 'post',
  validate,
  asyncValidate,
  asyncBlurFields: ['title']
})(PostForm);

export default PostForm;