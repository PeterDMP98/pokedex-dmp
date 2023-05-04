import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
  const [state, setState] = useState()
  const [hasError, sethasError] = useState(false)

  const getApi = () => {
    axios.get(url)
    .then(res => {
      setState(res.data)
      sethasError(false)
    })
    .catch(err => {
      console.log(err)
      sethasError(true)
    })

  }

  return [getApi, state, hasError]
}

export default useFetch