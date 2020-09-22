import React, { useState } from 'react'
import axios from 'axios'
import { AreaChart, Tooltip, Area, CartesianGrid, XAxis, YAxis } from 'recharts'

export default function Chart(props) {
  const [data, setData] = useState([]);

  const url = `https://api.covid19api.com/country/afghanistan/status/confirmed/live`;
  axios.get(url)
    .then(function (response) {
      // handle success
      setData(response.data);
    })
    .catch(function (error) {
      // handle error
      return <span>No data available at the moment.</span>
    })
    .then(function () {
      // always executed
    });

  return (
    <div>
      <AreaChart width={350} height={200} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FF8C00" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FF8C00" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="Date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="Cases" stroke="#FF8C00" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </div>
  )
}
