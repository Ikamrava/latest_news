import fetchNews from "../../lib/fetchNews"
import NewsList from "../NewsList"



type Props = {
    searchParams?:{term:string}

}

export const dynamic='force-dynamic';

async function SearchPage({searchParams}:Props) {
    const news:NewsResponse = await fetchNews(
        "general",
         searchParams?.term,
    )

  return (
    <div>
        <NewsList news={news}/>
    </div>
  )
}

export default SearchPage

// export async function getServerSideProps(context:ContextProps) {
//       const term = context.query?.term;
//   try {
//     const news:NewsResponse = await fetchNews("general",term)
//     return {
//       props: {
//         results: news,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//   }
// }
