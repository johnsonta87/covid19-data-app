import React, { useState } from 'react'
import axios from 'axios'
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts'
import styled from 'styled-components'

const ChartWrapper = styled.div`
  @media (max-width: 479px) {
    display: none;
  }
`;

export default function Chart(props) {
  const [data, setData] = useState([]);

  const propsCountry = props.country;
  const strCountry = propsCountry.substring(0, 2);

  const url = `https://corona-api.com/countries/${strCountry}`
  axios.get(url)
    .then(function (response) {
      // handle success
      // console.log(response.data.data.timeline);
      const data = [
        ...response.data.data.timeline
      ].reverse().map(({ date, recovered }) => {
        return { date, recovered }
      });

      setData(data);
    })
    .catch(function () {
      // handle error
      return <span>No data available at the moment.</span>
    })
    .then(function () {
      // always executed
    });

  return (
    <ChartWrapper>
      <AreaChart width={300} height={200} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorRecovered" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#32CD32" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#32CD32" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Area type="monotone" dataKey="recovered" stroke="#32CD32" fillOpacity={1} fill="url(#colorRecovered)" />
      </AreaChart>
    </ChartWrapper>
  )
}
