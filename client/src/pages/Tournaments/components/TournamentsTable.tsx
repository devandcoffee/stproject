import * as React from 'react';
import { SmartTable } from '../../../components';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '15%',
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
    key: 'start_date',
    width: '15%',
  },
  {
    title: 'Amount Teams',
    dataIndex: 'amountTeams',
    key: 'amount_teams',
    width: '10%',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: '55%',
  },
];

const emit = (e: any) => console.log('emiting', e);
const handleTableChange = () => console.log('handling change');

const Tournaments: React.SFC<any> = ({ tournamentsQuery: { tournaments } }) => {
  return (
    <SmartTable
      dataSource={tournaments}
      columns={columns}
      emit={emit}
      handleTableChange={handleTableChange}
      rowKey="id"
    />
  );
};

export default Tournaments;
