import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { FormConatiner } from './SearchForm.styled';

const schema = yup.object({
  query: yup.string().required(),
});

const SearchForm = ({ setSearchParams, searchParams }) => {
  const initialValues = {
    query: `${searchParams.get('query') ?? ''}`,
  };

  const handleSubmit = value => {
    setSearchParams({ query: value.query.trim() });
  };

  return (
    <FormConatiner>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Field type="text" name="query" placeholder="Please, enter a query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </FormConatiner>
  );
};

SearchForm.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
  searchParams: PropTypes.object,
};

export default SearchForm;
