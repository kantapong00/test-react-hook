/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'antd/dist/antd.css'
import { Menu, Dropdown } from 'antd'
import { CellCurveLeft, TableStyle, CellCurveRight, HeartIcon, Background, DropdownArrow } from './components/style'
import { DownOutlined } from '@ant-design/icons'

export default function Leaderboard() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  )

  const dataSource = [
    {
      key: '1',
      name: '1  Shin Wangkaewhuran',
      empID: 'S127',
      business: 'Human Resource',
      totalScore: 100,
      totalSurveys: 58,
      totalQuestion: 358
    },
    {
      key: '2',
      name: '2  Shin Wangkaewhuran',
      empID: 'S127',
      business: 'Human Resource',
      totalScore: 100,
      totalSurveys: 59,
      totalQuestion: 340
    },
    {
      key: '3',
      name: '3  Shin Wangkaewhuran',
      empID: 'S127',
      business: 'Human Resource',
      totalScore: 100,
      totalSurveys: 58,
      totalQuestion: 358
    },
    {
      key: '4',
      name: '4  Shin Wangkaewhuran',
      empID: 'S127',
      business: 'Human Resource',
      totalScore: 100,
      totalSurveys: 59,
      totalQuestion: 340
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center'
    },
    {
      title: 'Employee ID',
      dataIndex: 'empID',
      key: 'empID',
      align: 'center'
    },
    {
      title: 'Business Unit/Department',
      dataIndex: 'business',
      key: 'business',
      align: 'center'
    },
    {
      title: (
        <Dropdown overlay={menu}>
          <a style={{color:'grey'}} onClick={e => e.preventDefault()}>
            Total Score <DropdownArrow />
          </a>
        </Dropdown>
      ),
      dataIndex: 'totalScore',
      key: 'totalScore',
      align: 'center',
      render: (text) => (
        <>
          <HeartIcon />
          {text}
        </>
      )
    },
    {
      title: 'Total Surveys',
      dataIndex: 'totalSurveys',
      key: 'totalSurveys',
      align: 'center'
    },
    {
      title: 'Total Question',
      dataIndex: 'totalQuestion',
      key: 'totalQuestion',
      align: 'center'
    }
  ];

  return (
    <Background>
      <TableStyle dataSource={dataSource} columns={columns} size="small" pagination={false} />
    </Background>
  );
}
