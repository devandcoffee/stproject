import * as React from 'react';
import {
  Card,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Button,
  Row,
  Col,
} from 'antd';

const { TextArea } = Input;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const TournamentsForm: React.SFC<any> = ({ match }) => {
  const title = match.params.id
    ? `Tournament ${match.params.id}`
    : 'New Tournament';

  return (
    <div>
      <Card title={title}>
        <FormItem {...formItemLayout} label="Tournament Name">
          <Input placeholder="Tournament Name" />
        </FormItem>
        <FormItem {...formItemLayout} label="Description">
          <TextArea placeholder="Description" />
        </FormItem>
        <FormItem {...formItemLayout} label="Amount of Teams">
          <InputNumber />
        </FormItem>
        <FormItem {...formItemLayout} label="Start Date">
          <DatePicker />
        </FormItem>

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
      </Card>
    </div>
  );
};

export default TournamentsForm;
