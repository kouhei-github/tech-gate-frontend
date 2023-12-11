import type {Post} from '~/models/article'

export function serachTagResponseMocData():{data: Post[], search_tag_url: string, related_tags: {name: string, image: string}[]} {
  return {
    data: [{
      id: 1,
      image: "/images/download.webp",
      url: "",
      title: "",
      tags: [{name: "", url: ""}],
      date: "",
      site: {image: "/images/download.webp", name: ""},
      comment: 0,
      good: 0,
      book_marked: false,
      good_num: 0,
      comment_num: 0,
      now_bookmarked: false,
      now_liked: false,
    }],
    search_tag_url: "",
    related_tags: [{name: "", image: "/images/download.webp"}]
  }
}
