// import { React, useEffect } from "react";
// // import DonutChart from 'react-donut-chart';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     LineElement,
//     PointElement,
//     Title,
//     Tooltip,
//     Legend
// );


// const RankChart = () => {
//     const getCryptoPrice = () => {
//         const coin = 'alien-inu';
//         var url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=" + coin;

//         var requestOptions = {
//             method: 'GET',
//             uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//             qs: {
//                 start: 1,
//                 limit: 5000,
//                 convert: 'USD'
//             },
//             headers: {
//                 'X-CMC_PRO_API_KEY': '5f133357-7af4-43c3-8e9c-e4169e8ae648'
//             },
//             json: true,
//             gzip: true
//         };

//         var httpRequest = UrlFetchApp.fetch(url, requestOptions);
//         var getContext = httpRequest.getContentText();

//         var parseData = JSON.parse(getContext);
//         console.log(parseData.data.GVT.quote.USD.price)
//         return parseData.data.GVT.quote.USD.price;
//     }
//     const labels = ['Monday', 'Tueesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: "Price",
//                 data: [250, 225, 200, 150, 100, 250, 225],
//                 borderColor: 'rgb(65 245 12)',
//                 backgroundColor: 'rgba(2, 231, 2, 1)',
//             },

//         ],

//     };

//     useEffect(() => {
//        // getCryptoPrice();
//     }, []);
//     return (
//         <>
//             <Line data={data} />
//         </>
//     );
// };

// export default RankChart;


/* eslint-disable */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import moment from 'moment'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';

import {
    AreaChart, Area, Line,
    ResponsiveContainer,
    Bar,
    BarChart,
    ComposedChart,
    CartesianGrid,
    Tooltip,
    LineChart,
    XAxis,
    YAxis
} from 'recharts';

// format dayjs with the libraries that we need
dayjs.extend(utc)
dayjs.extend(weekOfYear)

const StyledPriceChartCard = styled.div`
margin-top:20px;
position : relative;
  align-items: center;
  width: 100%;
  // flex: 1;

  & .highcharts-xaxis > path {
    stroke: '#ffffff';
    stroke-width : 0.5!important;
  }
 
  & .highcharts-navigator-mask-inside{
    fill : ${({ isDark }) => isDark ? "white" : "rgba(86, 43, 248, 0.1)"};
  }
  
  & .highcharts-navigator-handle{
    fill: '#ffffff';
    stroke: ${({ isDark }) => isDark ? "rgba(36, 35, 78, 1)" : "rgba(157, 159, 195, 1)"};
    stroke-width : 0.5!important;
  }

  & .highcharts-navigator > rect{
    stroke : none!important;
  }

  & .highcharts-xaxis-labels > text{
    fill : '#ffffff'!important;
  }

  & .highcharts-navigator-xaxis > path{
    stroke : ${({ isDark }) => isDark ? "#555C95" : "#9D9FC3"}!important;
    stroke-width : 0.5!important;
  }

  & .highcharts-navigator-outline{
    stroke : ${({ isDark }) => isDark ? "#555C95" : "#9D9FC3"}!important;
    stroke-width : 0.5!important;
  }

  & .highcharts-areaspline-series :nth-child(1){
    display : none!important
  }

  & .highcharts-range-input > rect{
    fill : ${({ isDark }) => isDark ? "#09091B" : "#E6E7F9"}!important;
    rx: 7px!important;
    ry: 7px!important;
    x : -10px!important;
    y : -2px!important;
    width : 95px!important;
    height : 25px!important;
  }

  & .highcharts-range-input > text{
    fill : ${({ isDark }) => isDark ? "white" : "white"}!important;
    font-family: "Montserrat"!important;
  }

  & .highcharts-input-group :nth-child(4){
    transform: translate(140px, 0px);
  }

  & .from{
    position : absolute;
    right : 325px;
    top : 15px;
    color : ${({ isDark }) => isDark ? "rgba(196, 196, 246, 1)" : "rgba(157, 159, 195, 1)"}!important;
    font-size : 11px;
  }

  & .to{
    position : absolute;
    right : 185px;
    top : 15px;
    color : ${({ isDark }) => isDark ? "rgba(196, 196, 246, 1)" : "rgba(157, 159, 195, 1)"}!important;
    font-size : 11px; 
  }

  @media screen and (max-width : 465px){
    & .from{
      right : 245px;
    }
  
    & .to{
      right : 105px;
    }

    .highcharts-range-selector-group >g:nth-of-type(2){
      transform: translate(calc(100% - 229px),10px)!important;
    }

    .highcharts-range-input > text{
      transform: translate(0, 0)!important;
    } 
  }

  & .recharts-cartesian-axis-tick {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700; 
    
    & text {
      fill: ${({ isDark }) => isDark ? "#C4C4F6" : "#ADAFC5"};
    }
  }

  & .price-letter > div {
    font-size: 28px;
  }
`


let zoomindex = 4;
const PriceChartCard = () => {
    const [tokenPriceList, setTokenPriceList] = useState([]);
    const [selectedzoom, setSelectedZoom] = useState(4);
    const [marginx, setMarginX] = useState(0);
    const [marginy, setMarginY] = useState(0);

    async function fetchData() {
        // historical stuff for chart
        let temp = 24 * 30;
        if (zoomindex !== 0)
            temp = 3600 * 24 * 30;
        const start = moment().format('YYYY-MM-DD 00:00:00');
        const end = moment().subtract(temp, 'hours').format('YYYY-MM-DD H:M:S');
        const startDate = Date.now() / 1000;
        let endDate = 0;
        if (zoomindex === 0)
            endDate = startDate - 24 * 30 * 3600;
        const cakePriceCoinGeckoApi = `https://api.coingecko.com/api/v3/coins/alien-inu/market_chart/range?vs_currency=usd&from=${endDate}&to=${startDate}`;

        while (true) {
            const res = await fetch(cakePriceCoinGeckoApi);
            const responseData = await res.json();
            console.log(responseData.prices);
            if (responseData.prices.length > 0) {
                setTokenPriceList(responseData.prices);
                break;
            }
        }
        // client.query({
        //   query: TOKEN_DAILY_DATA,
        //   variables: {
        //     address: "0xd6fdde76b8c1c45b33790cc8751d5b88984c44ec",
        //     startTime: startTime,
        //     skip: 0
        //   }
        //   // fetchPolicy: 'cache-first',
        // }).then(result => {    
        //   setChartData(result.data.tokenDayDatas)
        // });

    }

    useEffect(() => {
        fetchData()
    }, [zoomindex]);

    useEffect(() => {
        var list = document.getElementsByClassName('highcharts-label highcharts-range-input');
        if (list.item(0)) {
            var me = list[0];
            var s = me.clientHeight;
            // if (s.left != marginx) {
            //   setMarginX(s.left);
            //   setMarginY(s.top);
            // }
        }
    })
    const isDark = false;
    const getOption1 = () => {

        const option = {
            xAxis: [
                {
                    labels: {
                        style: { color: "#ffffff" }
                    },
                }],
            yAxis: {
                gridLineColor: '#ffffff',
                labels: {
                    format: '${value:.4f}',
                    style: { color: "#ffffff" }
                },
                offset: 60,
                tickLength: 60,
                tickPosition: "outside",
            },
            chart: {
                backgroundColor: 'transparent',

            },
            credits: {
                enabled: false
            },

            scrollbar: { enabled: false },
            rangeSelector: {
                inputEnabled: true,
                inputLabel: true,
                labelStyle: {
                    display: 'none'
                },
                allButtonsEnabled: true,
                xAxis: {
                    minRange: 3600000,
                },
                selected: zoomindex,
                buttons: [
                    {
                        type: 'hour',
                        count: 24,
                        text: '1d',
                        events: {
                            click() {
                                zoomindex = 0;
                                fetchData()
                            }
                        }
                    },
                    {
                        type: 'day',
                        count: 7,
                        text: '7d',
                        events: {
                            click() {
                                zoomindex = 1;
                                fetchData()
                            }
                        }
                    }, {
                        type: 'month',
                        count: 1,
                        text: '1m',
                        events: {
                            click() {
                                zoomindex = 2;
                                fetchData()
                            }
                        }

                    }, {
                        type: 'month',
                        count: 3,
                        text: '3m',
                        events: {
                            click() {
                                zoomindex = 3;
                                fetchData()
                            }
                        }
                    }, {
                        type: 'all',
                        text: 'All',
                        events: {
                            click() {
                                zoomindex = 4;
                                fetchData()
                            }
                        }
                    }],

            },

            plotOptions: {
                series: {
                    showInLegend: false
                }
            },
            tooltip: {
                split: false,
                shared: true,
                x: XAxis,
                y: YAxis,
                formatter: function () {
                    var tooltip = '<div style="color:#ffffff;">' + '$' + Number(this.y).toFixed(4) + '</div><br/>';
                    var temp = Highcharts.dateFormat('%b %eth %Y, %H:%M', Number(this.x));
                    tooltip += `<div style = "color : white; padding-top : 10px;">${temp}</div>`;
                    return tooltip;
                },
                style: { opacity: 0.9 },
                padding: 10,
                backgroundColor: "#040218",
            },
            series: [{
                // type: 'line',
                data: tokenPriceList
            }],
            colors: ['#7dd662', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#040218', '#040218', '#6AF9C4'],
        };

        return option
    }

    return (
        <StyledPriceChartCard>
            <ResponsiveContainer>
                {tokenPriceList.length ? <HighchartsReact containerProps={{ style: { height: "100%" } }} highcharts={Highcharts} options={getOption1()} constructorType='stockChart' />
                    : <></>}

            </ResponsiveContainer>
            {/* <div className='from'>From</div>
            <div className='to'>To</div> */}
        </StyledPriceChartCard>
    )
}

export default PriceChartCard;

