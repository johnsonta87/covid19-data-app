import React, { useState } from 'react'
import Request from 'axios-react'
import styled from 'styled-components'
import CountryStat from './CountryStat'
import { Dropdown } from 'semantic-ui-react'

const CountriesListStyles = styled.div`
  background: rgba(150, 60, 98, 0.1);
  padding: 1rem;
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
  const [countryName, setCountryName] = useState('');

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
                        value: countryItem.iso3
                      }
                    })
                  }
                  onChange={handleDropdownChange}
                />
              </DropdownListStyles>

              {countryCode ?
                <CountryStat stat={countryCode} />
                : ''
              }
            </CountriesListStyles>
          )}
        </div>
      )}
    </Request>
  )
}
