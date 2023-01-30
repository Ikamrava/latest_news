import Article from "./Article"

type Props={
    news:NewsResponse

}

function NewsList({news}:Props) {
    
  return (
    <main className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-3 ">
        {
            news.data.map(item=>(<Article key = {item.title} article = {item}></Article>))
        }
    </main>
  )
}

export default NewsList  