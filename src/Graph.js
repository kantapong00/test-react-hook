import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css'
import { Background } from './components/style'
import ReactApexChart from "react-apexcharts"
import moment from 'moment'
import _ from 'lodash'

const axios = require('axios').default

export default function Graph() {

  const [dataX, setDataX] = useState([])
  const [dataY, setDataY] = useState([])
  const [startSurvey, setStartSurvey] = useState('')

  useEffect(() => {
    getGraph()
  }, [])

  const getGraph = async () => {
    try {
      let res = await axios.get("https://594c155e-e460-480f-b8c1-75fda682f2e1.mock.pstmn.io/graphs");
      let data = res.data
      setDataX(data.date)
      setDataY(data.data)
      setStartSurvey(data.startSurvey)
    } catch (err) {
      console.log('error', err)
    }
  }

  const convertDate = dataX.map((item) => {
    let date = moment(item).format('DD MMM')
    return date
  })

  const lastX = _.findLast(dataX, function (n) {
    return n
  })

  const lastY = _.findLast(dataY, function (n) {
    return n
  })

  const data = {
    // define data of y axis //
    series: [{
      name: "Desktops",
      data: dataY
    }],

    options: {
      // grid style //
      grid: {
        padding: {
          top: 50,
          left: 50,
          right: 50
        }
      },

      // define data and style of x axis //
      xaxis: {
        categories: convertDate,
        labels: {
          style: {
            fontFamily: 'sans-serif',
            fontWeight: 600,
          }
        }
      },

      // define data and style of y axis //
      yaxis: [
        {
          opposite: true,
          labels: {
            style: {
              fontFamily: 'sans-serif',
              colors: "#527fe2",
              fontWeight: 800,
            }
          },
          title: {
            text: `No. of Responses`,
            rotate: 360,
            offsetY: -150,
            offsetX: -50,
            style: {
              color: "#527fe2",
              marginRight: 20,
              fontWeight: 400
            }
          },
        }
      ],

      // chart type //
      chart: {
        id: 'fb',
        group: 'social',
        type: 'line',
        zoom: {
          enabled: false,
          autoScaleYaxis: true
        },
        width: 50
      },

      // stroke of line //
      stroke: {
        width: 3
      },

      //graph line color *** color code type only ***//
      colors: ['#527fe2'],

      // data for each mark //
      dataLabels: {
        enabled: true,
        offsetY: -10,
        formatter: function (val, opts) {
          let comma = val.toLocaleString()
          return comma
        },
        style: {
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
          colors: ['black']
        },
        background: {
          enabled: false
        }
      },

      // annotation for some marker //
      annotations: {
        points: [{
          x: lastX,
          y: lastY,
          marker: {
            size: 8,
            fillColor: '#f05b55',
            strokeWidth: 0,
            hover: {
              size: undefined
            }
          },
          label: {
            borderColor: 'none',
            offsetY: 0,
            style: {
              color: '#f05b55',
              background: 'none'
            },
            text: lastY
          }
        }]
      },

      // mark all data //
      markers: {
        colors: ['black'],
        size: 6
      }
    }
  }

  return (
    <Background style={{ padding: '24px' }}>
      <div style={{ width: '60%' }}>
        <ReactApexChart options={data.options} series={data.series} type="line" height={350} />
      </div>
    </Background>
  );
}
