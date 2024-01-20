import axios from "axios"

const request = async (url:string,method:string) =>{
    const options = {
        method: method,
        url: url,
        headers: {
          'X-RapidAPI-Key': 'b885b744e6mshd43a5d0938367f3p156ff5jsnfd850eaa6dd3',
          'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
        }
      }
      try {
        const response = await axios.request(options)       
        return response
      } catch (error) {
        console.error(error);
        return 0
      }
}
export default request