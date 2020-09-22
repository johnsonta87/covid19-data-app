import React from 'react'
import styled from 'styled-components'
import { numFormat } from '../utils/helpers'
import CountUp from 'react-countup';

const GlobalStatsStyles = styled.div`
  background: rgba(205, 92, 92, 0.25);
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
    color: #CD5C5C;
    font-weight: bold;
  }

  h2 {
    text-align: center;
    color: #555;
    margin-bottom: 30px;
  }

  .total-stats-container {
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;

    .stats-block {
      width: 33.33%;
      margin-left: auto;
      margin-right: auto;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      display: block;
    }

    h4 {
      font-size: 1em;
      margin: 0;
      color: #555;

      @media (max-width: 768px) {
        margin-bottom: 1.5em;
      }
    }

    span {
      display: block;
      margin: 0 auto 15px;
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
          <CountUp
            className="confirmed-text"
            start={0}
            end={confirmed.value}
            duration={1}
            delay={1}
            useEasing={true}
            useGrouping={true}
            separator=","
            decimal=","
            onEnd={() => console.log('Ended! 👏')}
            onStart={() => console.log('Started! 💨')}
          />
          <h4>Confirmed</h4>
        </div>

        <div className="stats-block recovered">
          <CountUp
            className="recovered-text"
            start={0}
            end={recovered.value}
            duration={1}
            delay={1}
            useEasing={true}
            useGrouping={true}
            separator=","
            decimal=","
            onEnd={() => console.log('Ended! 👏')}
            onStart={() => console.log('Started! 💨')}
          />
          <h4>Recovered</h4>
        </div>

        <div className="stats-block deaths">
          <CountUp
            className="deaths-text"
            start={0}
            end={deaths.value}
            duration={1}
            delay={1}
            useEasing={true}
            useGrouping={true}
            separator=","
            decimal=","
            onEnd={() => console.log('Ended! 👏')}
            onStart={() => console.log('Started! 💨')}
          />
          <h4>Deaths</h4>
        </div>
      </div>
      <p className="lastUpd"><small>{`Last updated: ${new Date(lastUpdate).toJSON().slice(0, 10)}`}</small></p>

    </GlobalStatsStyles>
  )
}
