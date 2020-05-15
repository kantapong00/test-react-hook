import React from 'react'
import 'antd/dist/antd.css'
import { Background, CollapseStyle, PanelStyle, SpaceBetween, Flex, Content, Font } from './components/style'

export default function SurveyCard() {

  function callback(key) {
    console.log(key);
  }

  return (
    // <Background>
      <CollapseStyle
        onChange={callback}
        expandIconPosition='right'
        bordered={false}
      >
        <PanelStyle
          key="1"
          header={
            <SpaceBetween>
              <Flex>
                {/* กล่องเปล่า */}
                <div style={{ backgroundColor: 'grey', width: '140px', height: '100px' }} />
                {/*  */}
                <Content>
                  <Font bold>2020 Company Annual Conference</Font>
                  <Flex>
                    <div>
                      <p>Start Date: 12/01/2020 - 29/02/2020</p>
                      <p>Total Survey: 1</p>
                    </div>
                    <div style={{ paddingLeft: '24px' }}>
                      <p>Question: 84</p>
                      <p>Responders: 127</p>
                    </div>
                  </Flex>
                </Content>
              </Flex>
              <Font bold>View</Font>
            </SpaceBetween>
          }
        >
          <div>
            555
          </div>
        </PanelStyle>
      </CollapseStyle>
    // </Background>
  );
}


