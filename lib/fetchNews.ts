import { gql } from "graphql-request"
import { useState } from "react"
import { catergories } from "../constants"
import sortNewsByImage from "./sortnewasbyimage"
const API_KEY = process.env.API_KEY 
type Props = {
    "Content-Type":string,
    "Authorization":string
  
}

const fetchNews = async (
    category?:Category|string,
    keywords?:string,
    isDynamic?:boolean
)=>{



let headers:Props = {
"Content-Type":"application/json",
"Authorization":`apikey ${process.env.STEP_ZEN_API}`
};

let graphql = JSON.stringify({
  query: `  query myQuery($access_key: String!, $categories: String!, $countries: String, $limit: String, $sort: String ,$keywords:String) {
    myQuery(
      access_key: $access_key
      categories: $categories
      countries: $countries
      limit: $limit
      sort: $sort
      keywords:$keywords
      
    ) {
      data {
        author
        category
        country
        description
        image
        language
        published_at
        source
        title
        url
      }
      pagination {
        count
        limit
        offset
        total
      }
    }
  }`,
  variables: {"access_key":process.env.API_KEY,"categories":category,"countries":"gb","limit":"10","sort":"published_desc", "keywords":keywords}
})



// let requestOptions = {
//   method: "POST",
//   headers: headers,
//   body: graphql,
// };

 const res = await fetch(`https://coburg.stepzen.net/api/ponderous-shrimp/__graphql`,{
    method:"POST",
    cache: isDynamic ? "no-cache" : "default",
    next:isDynamic?{revalidate:0}:{revalidate:60},
    headers:headers,
    body:graphql
 })
 

 

 const newsResponse = await res.json()
 const news = sortNewsByImage(newsResponse.data.myQuery)
 return news



// const res = await fetch(
//   "https://coburg.stepzen.net/api/ponderous-shrimp/__graphql",
//   requestOptions
// ).then(response => response.json())
// .then(result => (setdata(result)))

}















// stepzen import curl http://api.mediastack.com/v1/news?access_key=a40d1841afa5f688fca20939be14cfa6&sources=business,sport
export default fetchNews



