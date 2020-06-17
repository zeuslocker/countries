import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList as ReactTabList, TabPanel } from 'react-tabs'
import axios from 'axios'
import CountryDetails from '../CountryDetails'
import styles from './index.module.scss'

function TabList(props) {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all?fields=name')
      .then(function (response) {
        setCountries(response.data.map(c => c.name))
      })
  }, [])

  return <Tabs>
    <ReactTabList className={styles.tabList}>
      {countries.map((c) => <Tab
        key={c}
        className={styles.tab}
      >
        {c}
      </Tab>)}
    </ReactTabList>
      {
        countries.map((c) => (
          <TabPanel>
            <CountryDetails country={c}/>
          </TabPanel>
        ))
      }
  </Tabs>
}

export default TabList