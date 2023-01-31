import Loading from "../Loading"


type Props = {
    searchParams?:Article
}

function page(props:Props) {
   const {searchParams} = props

   
  if(searchParams){
return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {searchParams.image && (
          <img src={searchParams.image}
          className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
          />
        )}
        <div className="px-10">
          <h1 className=" headerTitle px-0 no-underline pb-2">
            {searchParams.title}
          </h1>
          <div className=" flex flex-col md:flex-row divide-x-2 space-x-4">
            <h2 className="font-bold">By: 
              {searchParams.author}
            </h2>
            <h2 className="font-bold pl-4">Source: {searchParams.source}</h2>
            <p className="pl-4">
              {searchParams.published_at}
              </p>
          </div>
          <p className=" pt-4">{searchParams && searchParams.description}</p>
        </div>
      </section>
    </article>
  )
  }else{
    return(
      <h1>There is no data</h1>
    )
  }
  
  
}

export default page