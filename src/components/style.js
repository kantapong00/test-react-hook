import styled from 'styled-components'
import { Card, Table, Collapse, Menu, Dropdown } from 'antd'
import { HeartFilled, DownOutlined } from '@ant-design/icons'

const { Panel } = Collapse

// ----------------- common style ---------------- //
export const Flex = styled.div`
  display: flex;
`
export const Font = styled.div`
  font-weight: ${(props) => props.bold ? '700' : null}
`
export const Content = styled.div`
  display: flex 
  flex-direction: column; 
  width: 400;
  padding-left: 16px;
`
export const Background = styled.div`
  background-color: #F0F0F0;
  height: 100vh; 
  padding: 48px;
`
export const SpaceBetween = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-between;
`
// -------------------------------------------------- //

// ----------------- card collapse ---------------- //
export const CollapseStyle = styled(Collapse)`
  width: 70%;
  border-radius: 10px; 
  background-color: white;
`
export const PanelStyle = styled(Panel)`
  border: none !important;
`
export const CardStyle = styled(Card)`
.ant-card-body {
  padding: 0px;
}
`
// -------------------------------------------------- //

// ----------------- curve table ---------------- //
export const CellCurveLeft = styled.div`
  content: '';
  position: absolute;
  border-radius: 50em 0px 0px 50em;
  background-color: white;
  width: 12px;
  height: 100%;
  left: -12px;
  top: 0px;
`
export const CellCurveRight = styled.div`
  content: '';
  position: absolute;
  border-radius: 50em 0px 0px 50em;
  background-color: white;
  width: 12px;
  height: 100%;
  -webkit-transform: scaleX(-1);
  right: -12px;
  top: 0px;
`
export const TableStyle = styled(Table)`
table { 
  background: #F0F0F0;
  border-collapse: separate; 
  border-spacing: 0 13px; 
  margin-top: -10px; 
}
.ant-table-thead > tr > th {
  background: none;
  color: grey
}
tbody tr {
  border-radius: 20px;
  box-shadow: 1px 1px 3px 1px #d9d7d7;
  background: white
}
td {
  padding: 16px;
}
td:first-child {
  border-top-left-radius: 20px; 
  border-bottom-left-radius: 20px;
}
td:last-child {
  border-bottom-right-radius: 20px; 
  border-top-right-radius: 20px; 
}
`
// -------------------------------------------------- //

// ----------------- icon ---------------- //
export const HeartIcon = styled(HeartFilled)`
  color: #ff5170;
  padding-right: 8px;
  font-size: 18px;
`
export const DropdownArrow = styled(DownOutlined)`
  color: blue;
`
// -------------------------------------------------- //