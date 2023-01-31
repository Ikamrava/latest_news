import fetchNews from "../../lib/fetchNews"
import NewsList from "../NewsList"

type Props = {
    searchParams?:{term:string}
}

async function SearchPage({searchParams}:Props) {
    const news:NewsResponse = await fetchNews(
        "general",
         searchParams?.term,
    )
    console.log(searchParams?.term)
  return (
    <div>
        <NewsList news={news}/>
    </div>
  )
}

export default SearchPage
