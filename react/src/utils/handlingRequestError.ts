import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

const DEFAULT_ERROR_MESSAGE = 'Não foi possível comunicar com o servidor.'

const handlingRequestError = (error: AxiosError | Error | unknown) => {
  // Error 😨 🚀

  if (axios.isAxiosError(error)) {
    // console.log(error.toJSON());

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { data, status, headers } = error.response

      const message = DEFAULT_ERROR_MESSAGE

      // console.log(error.response.status);
      // console.log(error.response.headers);
      // console.log(error.response.data);
      return { message, status }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // console.log(error.request);
      toast.error(DEFAULT_ERROR_MESSAGE)
    } else if (axios.isCancel(error)) {
      // eslint-disable-next-line no-console
      console.log('Request cancelled...')
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log("Error", error.message);
      toast.error(DEFAULT_ERROR_MESSAGE)
    }
  } else {
    toast.error(DEFAULT_ERROR_MESSAGE)
  }
}

export default handlingRequestError
