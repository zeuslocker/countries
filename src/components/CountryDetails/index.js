import React, { useEffect, useState } from 'react'
import axios from 'axios'

import styles from './index.module.scss'

function CountryDetails(props) {
  const [details, setDetails] = useState(null)

    useEffect(() => {
      axios.get(`https://restcountries.eu/rest/v2/name/${props.country}`)
        .then(function (response) {
          setDetails(response.data[0])
        })
    }, [])

  return details && <div>
    <p>name: {details.name}</p>
    <p>capital: {details.capital}</p>
    <p>flag: <img src={details.flag} className={styles.flag} alt='flag'/></p>
    <div>
      <p>languages:</p>
      <div className={styles.langList}>
        {details.languages.map(l => <p>{l.name}</p>)}
      </div>
    </div>
  </div>
}

export default CountryDetails