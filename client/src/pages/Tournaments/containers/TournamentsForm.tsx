import * as React from 'react';
import { Form } from 'react-final-form';
import Tournament from '../components/TournamentsForm';

const TournamentsForm: React.SFC<any> = ({ match }) => {
  return (
    <Form
      onSubmit={values => console.log('values', values)}
      render={({ handleSubmit, pristine, invalid }) => (
        <Tournament
          handleSubmit={handleSubmit}
          pristine={pristine}
          invalid={invalid}
          id={match.params.id}
        />
      )}
    />
  );
};

export default TournamentsForm;
