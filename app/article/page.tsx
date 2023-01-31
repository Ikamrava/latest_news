'use client';

import { useSearchParams } from 'next/navigation'


type Props = {
    searchParams?:Article
}

function page() {
const searchParams = useSearchParams();
 const author = searchParams.get("author")
 const image = searchParams.get("image")
 const title = searchParams.get("title")
 const published_at = searchParams.get("published_at")
 const description = searchParams.get("description")
 const source = searchParams.get("source")

return (
  
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {image && (
          <img src={image}
          className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
          />
        )}
        <div className="px-10">
          <h1 className=" headerTitle px-0 no-underline pb-2">
            {title}
          </h1>
          <div className=" flex flex-col md:flex-row divide-x-2 space-x-4">
            <h2 className="font-bold">By: 
              {author}
            </h2>
            <h2 className="font-bold pl-4">Source: {source}</h2>
            <p className="pl-4">
              {published_at}
              </p>
          </div>
          <p className=" pt-4">{description}</p>
        </div>
      </section>
    </article>
  )
  
  
  
}

export default page