import React from 'react'
import Request from 'axios-react'
import styled from 'styled-components'
import { numFormat } from '../utils/helpers'
import { Button, Grid, Segment } from 'semantic-ui-react'

const ButtonFetch = styled.div`
  display: flex;
  margin: 0 auto;
  flex: 1;
  text-align: center;
  margin-bottom: 20px;

  .button {
    margin: 0 auto;
    background-color: SLATEBLUE;
    border: 1px solid SLATEBLUE;
    color: #fff;

    &:hover,
    &:active,
    &:focus {
      background-color: #fff;
      color: SLATEBLUE;
    }
  }
`;

const StatsBody = styled.div`
    h4 {
      margin: 0;
      font-size: 1em;
      font-weight: bold;
      color: SLATEBLUE;
    }

    p {
      margin: 0;
      font-size: 2em;
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 1.5em;
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
`;

const SingleCountryContainer = styled.div`
    .grid {
      @media (max-width: 767px) {
        display: block;
        text-align: center;

        .column {
          display: block !important;
          margin: 0 auto;
        }
      }
    }
`;

const ErrorStyles = styled.div`
    margin: 0 auto;
    width: 100%;
`;

export default function CountryStat(props) {

  return (
    <Request
      config={{
        method: 'get',
        url: `https://covid19.mathdro.id/api/countries/${props.stat}`,
      }}
    >
      {({ response, error, loading, refetch }) => (
        <React.Fragment>
          {error && (
            <ErrorStyles>
              <span>{error.response.data}</span>
            </ErrorStyles>
          )}
          {response && (
            <React.Fragment>
              <ButtonFetch>
                <Button onClick={refetch} disabled={loading}>
                  {loading ? (
                    loading && <span>Searching...</span>
                  ) : (
                      <span>Search</span>
                    )}
                </Button>
              </ButtonFetch>
              {!loading ? (
                <SingleCountryContainer>
                  <Grid container columns={3}>
                    <Grid.Column>
                      <StatsBody>
                        <Segment>
                          <p className="confirmed-text">{response.data.confirmed.value ? numFormat(response.data.confirmed.value) : 0}</p>
                          <h4>Confirmed</h4>
                        </Segment>
                      </StatsBody>
                    </Grid.Column>
                    <Grid.Column>
                      <StatsBody>
                        <Segment>
                          <p className="recovered-text">{response.data.recovered.value ? numFormat(response.data.recovered.value) : 0}</p>
                          <h4>Recovered</h4>
                        </Segment>
                      </StatsBody>
                    </Grid.Column>
                    <Grid.Column>
                      <StatsBody>
                        <Segment>
                          <p className="deaths-text">{response.data.deaths.value ? numFormat(response.data.deaths.value) : 0}</p>
                          <h4>Deaths</h4>
                        </Segment>
                      </StatsBody>
                    </Grid.Column>
                  </Grid>
                </SingleCountryContainer>
              ) : ''}
            </React.Fragment>
          )}
        </React.Fragment>
      )
      }
    </Request>
  )
}
