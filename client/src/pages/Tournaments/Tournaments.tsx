import * as React from 'react';
import { SmartTable } from '../../components';

interface ITournament {
  id: number;
  name: string;
  amount_teams: number;
  description: string;
  start_date: string;
}

const tourneys: ITournament[] = [
  {
    id: 1,
    name: 'MIRACLIS',
    amount_teams: 0,
    description:
      'In sunt officia nisi ullamco non ullamco nisi. Est excepteur nulla nulla officia eiusmod deserunt ad aliquip officia deserunt enim consectetur. Ex cillum sit tempor reprehenderit pariatur. Eu id qui Lorem quis consectetur et anim.\r\n',
    start_date: '2014-05-12T12:33:52',
  },
  {
    id: 7,
    name: 'FITCORE',
    amount_teams: 0,
    description:
      'Irure irure enim officia Lorem sunt qui labore. Adipisicing cupidatat incididunt proident id do in magna nulla duis. Duis voluptate incididunt occaecat aute reprehenderit aliqua enim. Aliqua eiusmod ut id occaecat est sint tempor cupidatat officia adipisicing cupidatat esse. Aute culpa minim sint sunt et in ea. Officia ipsum ullamco aliquip id. Irure sunt dolore qui dolor do.\r\n',
    start_date: '2016-01-26T05:12:59',
  },
  {
    id: 10,
    name: 'MUSIX',
    amount_teams: 6,
    description:
      'Occaecat laboris deserunt cillum voluptate ad tempor qui et. Exercitation id sit qui ut consequat ullamco nisi dolor. Eiusmod anim fugiat exercitation qui eu irure sunt elit sit. Tempor sunt sit non aute magna sit excepteur.\r\n',
    start_date: '2016-04-29T01:31:30',
  },
  {
    id: 7,
    name: 'ZORROMOP',
    amount_teams: 3,
    description:
      'Sunt labore aliqua magna proident qui eu excepteur aliqua. Ipsum nostrud in officia voluptate quis sit quis ullamco dolore elit id in excepteur fugiat. Sunt qui aliqua do commodo ea ut sint laborum excepteur esse elit. Sit labore esse velit proident in velit. Do laboris ex mollit aliqua elit. Nulla et nulla dolore eiusmod mollit anim.\r\n',
    start_date: '2014-02-24T10:07:39',
  },
  {
    id: 0,
    name: 'ZENTURY',
    amount_teams: 10,
    description:
      'Aute cillum nostrud consequat esse velit ipsum qui nisi incididunt excepteur. Amet et ad cillum sit proident officia eiusmod laborum Lorem. Quis aute in id adipisicing Lorem duis commodo in est eu amet ut qui.\r\n',
    start_date: '2016-04-12T03:09:01',
  },
  {
    id: 3,
    name: 'ORONOKO',
    amount_teams: 3,
    description:
      'Ullamco pariatur laborum velit officia do mollit elit incididunt consequat fugiat deserunt nostrud veniam. Quis amet ex ex velit eu enim exercitation aute consequat et aliquip quis ullamco cillum. Consectetur veniam officia et officia quis qui sint esse culpa incididunt ad ut officia consequat. Aliqua laborum laboris pariatur excepteur pariatur qui aute exercitation aute ipsum nulla laboris officia amet.\r\n',
    start_date: '2017-07-25T06:02:34',
  },
  {
    id: 7,
    name: 'TETAK',
    amount_teams: 2,
    description:
      'Consequat cillum reprehenderit ad veniam ex anim velit mollit quis quis veniam mollit. Proident ad cupidatat ea deserunt culpa ad voluptate consectetur officia aliquip exercitation. Sit laborum exercitation ex veniam. Cillum velit laborum non pariatur in consequat incididunt dolor cillum duis sit quis in. Elit cillum cupidatat duis voluptate laborum reprehenderit duis consectetur. Sint laborum ut sunt minim veniam cillum incididunt ullamco Lorem deserunt.\r\n',
    start_date: '2015-11-25T01:18:28',
  },
  {
    id: 0,
    name: 'GENEKOM',
    amount_teams: 0,
    description:
      'Consectetur anim commodo nostrud irure in aliquip cupidatat esse pariatur in exercitation officia dolore. Elit nulla ut consectetur cillum nisi do culpa magna cupidatat. Elit mollit quis id deserunt non ut in enim adipisicing nostrud. Nisi culpa adipisicing et est qui culpa mollit amet amet elit anim incididunt. Proident non amet excepteur excepteur officia Lorem adipisicing ex tempor occaecat ullamco laboris incididunt. Ea irure consectetur consequat ullamco tempor. Ea dolor duis dolor enim.\r\n',
    start_date: '2014-11-03T01:21:36',
  },
  {
    id: 3,
    name: 'PHOLIO',
    amount_teams: 1,
    description:
      'Cillum reprehenderit ea laborum quis laborum nostrud anim anim nisi. Tempor aliqua consectetur sit cupidatat exercitation reprehenderit incididunt do pariatur anim quis elit. Lorem dolore ut dolor consequat aliqua sit laboris.\r\n',
    start_date: '2017-07-21T07:30:37',
  },
  {
    id: 8,
    name: 'OCEANICA',
    amount_teams: 7,
    description:
      'Ad nisi ea culpa culpa eu labore veniam labore laboris. Elit qui officia nostrud occaecat cillum cupidatat. Esse elit et irure aliqua.\r\n',
    start_date: '2015-04-28T01:36:44',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '15%',
  },
  {
    title: 'Start Date',
    dataIndex: 'start_date',
    key: 'start_date',
    width: '15%',
  },
  {
    title: 'Amount Teams',
    dataIndex: 'amount_teams',
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

const Tournaments = () => (
  <SmartTable
    dataSource={tourneys}
    columns={columns}
    emit={emit}
    handleTableChange={handleTableChange}
    rowKey="id"
  />
);

export default Tournaments;
