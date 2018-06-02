import * as React from 'react';
import { Field } from 'react-final-form';
import {
  Input,
  TextArea,
  InputNumber,
  DatePicker,
} from '../../../components/FormFields';

import { Card, Button, Row, Col } from 'antd';

const TournamentsForm: React.SFC<any> = ({
  handleSubmit,
  pristine,
  invalid,
  id,
}) => {
  const title = id ? `Tournament ${id}` : 'New Tournament';

  return (
    <Card title={title}>
      <form onSubmit={handleSubmit}>
        <Row>
          <Field
            name="name"
            placeholder="Tournament Name"
            label="Tournament Name"
            component={Input}
          />
          <Field
            name="description"
            placeholder="Description"
            label="Description"
            component={TextArea}
          />
          <Field
            name="amountTeams"
            placeholder="Amount of Teams"
            label="Amount of Teams"
            component={InputNumber}
          />
          <Field
            name="startDate"
            placeholder="Start Date"
            label="Start Date"
            component={DatePicker}
          />
        </Row>
        <Row>
          <Col span={8} offset={8}>
            <Button type="default" htmlType="submit">
              Cancel
            </Button>
          </Col>
          <Col>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Col>
        </Row>
      </form>
    </Card>
  );
};

export default TournamentsForm;
