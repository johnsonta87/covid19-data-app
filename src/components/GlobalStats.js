import React from 'react'
import styled from 'styled-components'
import { numFormat } from '../utils/helpers'
import { Grid, Segment } from 'semantic-ui-react'
import ChartConfirmed from './ChartConfirmed'

const GlobalStatsStyles = styled.div`
  background: SLATEBLUE;
  padding: 1rem;
  -webkit-border-bottom-right-radius: 5px;
  -webkit-border-bottom-left-radius: 5px;
  -moz-border-radius-bottomright: 5px;
  -moz-border-radius-bottomleft: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-bottom: 15px;

  .lastUpd {
    text-align: center;
    margin-top: 2em;
    color: #fff;
  }

  h2 {
    text-align: center;
    color: #fff;
  }

  .total-stats-container {
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;

    .stats-block {
      width: 33.33%;
    }

    @media (max-width: 768px) {
      display: block;
    }

    h4 {
      font-size: 1em;
      margin: 0;
      color: #fff;

      @media (max-width: 768px) {
        margin-bottom: 1.5em;
      }
    }

    p {
      margin: 0;
      font-size: 2.5em;
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 2em;
      }

      &.confirmed-text {
        color: DARKORANGE;
      }

      &.recovered-text {
        color: LIMEGREEN;
      }

      &.deaths-text {
        color: CRIMSON;
      }
    }
  }
`;

export default function GlobalStats(props) {
  const { confirmed, recovered, deaths, lastUpdate } = props.data;

  return (
    <GlobalStatsStyles>
      <h2>Global Stats</h2>

      <div className="total-stats-container">
        <div className="stats-block confirmed">
          <p className="confirmed-text">{numFormat(confirmed.value)}</p>
          <h4>Confirmed</h4>
        </div>

        <div className="stats-block recovered">
          <p className="recovered-text">{numFormat(recovered.value)}</p>
          <h4>Recovered</h4>
        </div>

        <div className="stats-block deaths">
          <p className="deaths-text">{numFormat(deaths.value)}</p>
          <h4>Deaths</h4>
        </div>
      </div>

      <p className="lastUpd"><small>{`Last updated: ${new Date(lastUpdate).toJSON().slice(0, 10)}`}</small></p>

    </GlobalStatsStyles>
  )
}
