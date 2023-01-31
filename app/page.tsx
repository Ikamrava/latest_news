import { catergories } from "../constants"
import fetchNews from "../lib/fetchNews"
import NewsList from "./NewsList"
import { data } from "../res"


async function Homepage() {
  const allnews:NewsResponse = await fetchNews(catergories.join(","))


  return (
    <div>
      <NewsList news = {allnews}></NewsList>
    </div>
  )
}

export default Homepage