type Article={
  author:string|null
  category:string
  country:string
  description:string
  image:string|null
  language:string
  source:string
  title:string
  url:string
  published_at:string
}

type Pagination = {
    count:Int
    limit:Int
    offset:Int
    total:Int
}


type NewsResponse ={
    pagination:Pagination
    data:Article[]
}


type Category =
    |"business"
    |"entertainment"
    |"general"
    |"health"
    |"science"
    |"sports"
    |"technology"


