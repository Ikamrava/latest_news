import React from 'react'
import fetchNews from '../../../lib/fetchNews'
import NewsList from '../../NewsList'

type Props = {
    params:{categories:Category}
}

async function NewsCat({params:{categories}}:Props) {
    const news:NewsResponse = await fetchNews(categories)
  return (
    <div>
      <h1 className=' headerTitle'>{categories}</h1>
        <NewsList news={news}/>
    </div>
  )
}

export default NewsCat

export async function generateStaticParams(){

}