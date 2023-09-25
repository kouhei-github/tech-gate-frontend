import axios from 'axios'
import {LocationQuery} from 'vue-router'

type path = {
  name: string
  url: string
}
export type Post = {
  image: string
  url: string
  title: string
  tags: path[]
  date: string
  site: {image: string, name: string}
  comment: number
  good: number
  book_marked: boolean
}
export const getLatestArticle = async (query: {page: number}): Promise<Post[]> => {
  const config = useRuntimeConfig();
  return axios
      .get(`${config.public.apiUrl}/article/latest`, {params: query})
      .then((response) => {
        const result: Post[] = response.data
        return result;
      });
};

export const searchArticleByTagName = async (query: {slug: string, page: number}): Promise<{data: Post[], search_tag_url: string, related_tags: {name: string, image: string}[]}> => {
  const config = useRuntimeConfig();
  const headers = {
    "method": "GET",
    'Content-Type': 'application/json',
  };
  const res = await fetch(
    `${config.public.apiUrl}/article?tag=${query.slug}&page=${query.page}`,
    headers
  )
  const data: {data: Post[], search_tag_url: string, related_tags: {name: string, image: string}[]} = await res.json()
  return data
}
