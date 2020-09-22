import React from "react"
import Request from 'axios-react'
import 'semantic-ui-css/semantic.min.css'
import { Loader } from 'semantic-ui-react'

import SEO from "../components/seo"
import Layout from "../components/layout"
import GlobalStats from "../components/GlobalStats"
import Stats from "../components/Stats"


const App = () => {

  return (
    <Layout>
      <SEO title="Welcome" />
      <Request
        config={{
          method: 'get',
          url: 'https://covid19.mathdro.id/api',
        }}
      >
        {({ loading, response, error }) => (
          <div>
            {loading && <Loader active>Loading</Loader>}
            {error && <span>{error.response.data}</span>}
            {response && (
              <React.Fragment>
                <GlobalStats data={response.data} />
                <Stats countries={response.data.countries} />
              </React.Fragment>
            )}
          </div>
        )}
      </Request>

    </Layout>
  )
}

export default App
