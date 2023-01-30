import { catergories } from "../constants"
import fetchNews from "../lib/fetchNews"


async function Homepage() {
  const allnews:NewsResponse = await fetchNews(catergories.join(","))

  console.log(allnews)

  return (
    <h1>hello</h1>
  )
}

export default Homepage