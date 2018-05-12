import * as React from 'react';

import { Button, Table } from 'antd';

export const SHOW_RECORD = { action: 'show', icon: 'search' };
export const EDIT_RECORD = { action: 'edit', icon: 'edit' };
export const REMOVE_RECORD = { action: 'remove', icon: 'delete' };

const ACTIONS_OBJ = (emit: Function) => ({
  title: 'Action',
  dataIndex: '',
  key: 'x',
  render: (text: string, record: Object, index: any) => (
    <span>
      <Button
        icon="search"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => emit(text, record, index, SHOW_RECORD)}
      />
      <Button
        icon="edit"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => emit(text, record, index, EDIT_RECORD)}
      />
      <Button
        icon="delete"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => emit(text, record, index, REMOVE_RECORD)}
      />
    </span>
  ),
});

interface ISmartTableProps {
  columns: any[];
  dataSource: any[];
  emit: (e: any) => void;
  handleTableChange: (a: object, b: any[], c: any) => void;
  pagination?: object;
  rowKey: string;
}

interface IState {
  columns: any[];
  dataSource: any[];
  pagination?: object;
  rowKey: string;
}

class SmartTable extends React.Component<ISmartTableProps> {
  state: IState;

  constructor(props: any) {
    super(props);
    const { columns, dataSource, emit, pagination, rowKey } = this.props;
    this.state = {
      dataSource,
      rowKey,
      pagination,
      columns: columns.concat(ACTIONS_OBJ(emit)),
    };
  }

  componentWillReceiveProps(nextProps: any) {
    this.setState({
      dataSource: nextProps.dataSource,
      pagination: nextProps.pagination,
    });
  }

  handleTableChange = (pagination: object, filters: any[], sorter: any) => {
    this.props.handleTableChange(pagination, filters, sorter);
  };

  render() {
    const { columns, dataSource, pagination, rowKey } = this.state;
    return (
      <Table
        dataSource={dataSource}
        pagination={pagination}
        columns={columns}
        rowKey={rowKey}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default SmartTable;
