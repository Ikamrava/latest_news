
import ReadMore from "./ReadMore"
type Props={
    article:Article

}

function Article({article}:Props) {
    
  return (
    <article className=" bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out shadow-lg">

        {article.image && 
        <img src = {article.image} alt={article.title} className=" h-56 w-full object-cover rounded-t-lg shadow-md"/>
        }
        <div className=" flex flex-1 flex-col">
            <div className="flex flex-1 flex-col p-5">
                <h2 className=" font-bold font-serif">{article.title}</h2>
                <section className=" mt-2 flex-1">
                    <p className="text-sm line-clamp-2">{article.description}</p>
                </section>
                <footer className="text-sm text-right ml-auto flex space-x-1 pt-5 italic text-gray-500">
                    <p>{article.source} -</p>
                    <p>
                      {article.published_at}
                    </p>
                </footer>
            </div>
            <ReadMore article={article}/>
        </div>

    </article>
  )
}

export default Article