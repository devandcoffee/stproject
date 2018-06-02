import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import TournamentsTable from '../components/TournamentsTable';

const TOURNAMENTS_QUERY = gql`
  query TournamentsQuery {
    tournaments {
      id
      name
      description
      amountTeams
      startDate
    }
  }
`;

export default graphql(TOURNAMENTS_QUERY, { name: 'tournamentsQuery' })(
  TournamentsTable,
);
