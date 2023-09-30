import axios from 'axios'
import {LocationQuery} from 'vue-router'
import {useJwtTokenStore} from '~/stores/jwt_token'

type path = {
  name: string
  url: string
}
export type Post = {
  id: number
  image: string
  url: string
  title: string
  tags: path[]
  date: string
  site: {image: string, name: string}
  comment: number
  good: number
  book_marked: boolean
  good_num: number
  book_marked_num: number
  comment_num: number
  now_bookmarked: boolean
  now_liked: boolean
}
export const getLatestArticle = async (query: {page: number}): Promise<Post[]> => {
  const config = useRuntimeConfig();
  const jwtTokenStore = useJwtTokenStore()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwtTokenStore.jwtToken}`,
  };
  const res = await fetch(
      `${config.public.apiUrl}/article/latest?page=${query.page}`,
      { method: "GET", headers: headers}
  )
  const data: Post[] = await res.json()
  return data
};

export const searchArticleByTagName = async (query: {slug: string, page: number}): Promise<{data: Post[], search_tag_url: string, related_tags: {name: string, image: string}[]}> => {
  const config = useRuntimeConfig();
  const jwtTokenStore = useJwtTokenStore()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwtTokenStore.jwtToken}`,
  };
  const res = await fetch(
      `${config.public.apiUrl}/article?tag=${query.slug}&page=${query.page}`,
      { method: "GET", headers: headers}
  )
  const data: {data: Post[], search_tag_url: string, related_tags: {name: string, image: string}[]} = await res.json()
  return data
}

export const getUserLiked = async (query: {page: number}): Promise<Post[]> => {
  const config = useRuntimeConfig();
  const jwtTokenStore = useJwtTokenStore()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwtTokenStore.jwtToken}`,
  };
  const res = await fetch(
      `${config.public.apiUrl}/article-like?page=${query.page}`,
      { method: "GET", headers: headers}
  )
  const data: Post[] = await res.json()
  return data
};

export const getUserBookMarked = async (query: {page: number}): Promise<Post[]> => {
  const config = useRuntimeConfig();
  const jwtTokenStore = useJwtTokenStore()
  console.log(jwtTokenStore.jwtToken)
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwtTokenStore.jwtToken}`,
  };
  const res = await fetch(
      `${config.public.apiUrl}/book-mark?page=${query.page}`,
      { method: "GET", headers: headers}
  )
  const data: Post[] = await res.json()
  return data
};

export const postUserBookMarked = async (query: {articleId: number}) => {
  const config = useRuntimeConfig();
  const jwtTokenStore = useJwtTokenStore()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwtTokenStore.jwtToken}`,
  };
  const payload = JSON.stringify({
    article_id: query.articleId
  })
  const res = await fetch(
      `${config.public.apiUrl}/article/book-mark`,
      { method: "POST", headers: headers, body: payload}
  )
  console.log(res.json())
};

export const postUserLiked = async (query: {articleId: number})=> {
  const config = useRuntimeConfig();
  const jwtTokenStore = useJwtTokenStore()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwtTokenStore.jwtToken}`,
  };
  const payload = JSON.stringify({
    article_id: query.articleId
  })
  const res = await fetch(
      `${config.public.apiUrl}/article/like`,
      { method: "POST", headers: headers, body: payload}
  )
  console.log(res.json())

};
