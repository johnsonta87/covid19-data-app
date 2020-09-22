import React, { useState } from 'react'
import Request from 'axios-react'
import styled from 'styled-components'
import CountryStat from './CountryStat'
import { Dropdown } from 'semantic-ui-react'

const CountriesListStyles = styled.div`
  background: rgba(150, 60, 98, 0.1);
  padding: 1.5rem;
  border-radius: 3px;
`;

const DropdownListStyles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto 15px;

  @media (min-width: 768px) {
    max-width: 60%;
  }
`;

export default function CountriesStats(props) {
  const [countryCode, setCountryCode] = useState('');

  const handleDropdownChange = (e, data) => {
    setCountryCode(data.value);
  }

  return (
    <Request
      config={{
        method: 'get',
        url: props.countries,
      }}
    >
      {({ response }) => (
        <div>
          {response && (
            <CountriesListStyles>

              <DropdownListStyles>
                <Dropdown
                  placeholder='Select your country'
                  fluid
                  search
                  selection
                  name="country"
                  options={
                    response.data.countries.map((countryItem, code) => {
                      return {
                        key: code,
                        name: countryItem.name,
                        text: countryItem.name,
                        value: countryItem.iso2
                      }
                    })
                  }
                  onChange={handleDropdownChange}
                />
              </DropdownListStyles>

              {countryCode ?
                <div>
                  <CountryStat stat={countryCode} />
                </div>
                : ''
              }
            </CountriesListStyles>
          )}
        </div>
      )}
    </Request>
  )
}
