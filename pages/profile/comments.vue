<script setup lang="ts">
import UserProfileTop from '~/components/Profile/UserProfileTop.vue'
import {newArticles} from '~/models/sample'
import {Post} from "~/pages/classification/beginner.vue";

definePageMeta({
  layout: 'dashboard',
})

const recommendImages: Post[] = [
  {
    tags: [{name: "その他", url: "/search/?kwd=other"}],
    title: "新規Webサービスを独りで開発・運用する際に立ちはだかった壁とそれを乗り越えた方法まとめ【個人開発】",
    url: "https://qiita.com/terubooon/items/08c145aac0dd10ea8cbc",
    image: "https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9JUU2JTk2JUIwJUU4JUE2JThGV2ViJUUzJTgyJUI1JUUzJTgzJUJDJUUzJTgzJTkzJUUzJTgyJUI5JUUzJTgyJTkyJUU3JThCJUFDJUUzJTgyJThBJUUzJTgxJUE3JUU5JTk2JThCJUU3JTk5JUJBJUUzJTgzJUJCJUU5JTgxJThCJUU3JTk0JUE4JUUzJTgxJTk5JUUzJTgyJThCJUU5JTlBJTlCJUUzJTgxJUFCJUU3JUFCJThCJUUzJTgxJUExJUUzJTgxJUFGJUUzJTgxJUEwJUUzJTgxJThCJUUzJTgxJUEzJUUzJTgxJTlGJUU1JUEzJTgxJUUzJTgxJUE4JUUzJTgxJTlEJUUzJTgyJThDJUUzJTgyJTkyJUU0JUI5JTk3JUUzJTgyJThBJUU4JUI2JThBJUUzJTgxJTg4JUUzJTgxJTlGJUU2JTk2JUI5JUU2JUIzJTk1JUUzJTgxJUJFJUUzJTgxJUE4JUUzJTgyJTgxJUUzJTgwJTkwJUU1JTgwJThCJUU0JUJBJUJBJUU5JTk2JThCJUU3JTk5JUJBJUUzJTgwJTkxJnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9NTYmdHh0LWNsaXA9ZWxsaXBzaXMmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz03ZWYzNzFkYjY4YjY3ZDUyNTU2YzZiZTUxMzRmODkzMg&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwdGVydWJvb29uJnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9MzYmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz1jZDMzNjNmMTY4NTk2NDg5YzQ1Y2Q3NzFmM2NhMTY5YQ&blend-x=142&blend-y=491&blend-mode=normal&s=07b47de80da7b8cda4d03abf40347b50",
    date: "3年以上前",
    site: {image: "https://youliangdao.s3.ap-northeast-1.amazonaws.com/favicon.png", name: "qiita.com"},
    comment: 0,
    good: 3
  },
  {
    tags: [{name: "React", url: "/search/?kwd=react"}, {name: "JavaScript", url: "/search/?kwd=javascript"}, {name: "Nextjs", url: "/search/?kwd=nextjs"}],
    title: "個人開発にてWebサイトやWebサービスを作るときにだいたい使うもの【準備・開発・運用】",
    url: "https://qiita.com/terubooon/items/08c145aac0dd10ea8cbc",
    image: "https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9JUU1JTgwJThCJUU0JUJBJUJBJUU5JTk2JThCJUU3JTk5JUJBJUUzJTgxJUFCJUUzJTgxJUE2V2ViJUUzJTgyJUI1JUUzJTgyJUE0JUUzJTgzJTg4JUUzJTgyJTg0V2ViJUUzJTgyJUI1JUUzJTgzJUJDJUUzJTgzJTkzJUUzJTgyJUI5JUUzJTgyJTkyJUU0JUJEJTlDJUUzJTgyJThCJUUzJTgxJUE4JUUzJTgxJThEJUUzJTgxJUFCJUUzJTgxJUEwJUUzJTgxJTg0JUUzJTgxJTlGJUUzJTgxJTg0JUU0JUJEJUJGJUUzJTgxJTg2JUUzJTgyJTgyJUUzJTgxJUFFJUUzJTgwJTkwJUU2JUJBJTk2JUU1JTgyJTk5JUUzJTgzJUJCJUU5JTk2JThCJUU3JTk5JUJBJUUzJTgzJUJCJUU5JTgxJThCJUU3JTk0JUE4JUUzJTgwJTkxJnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9NTYmdHh0LWNsaXA9ZWxsaXBzaXMmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz1iNjA3NTY2Zjk0MzEwNDM2NmYyM2RkZjgwMGMwM2Y5OA&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwc2hpbnNoaW44NiZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9NjFhOWNhMTMyMzE0NzM1YWQ3NTgyZDJkNjIwNDI0MDM&blend-x=142&blend-y=491&blend-mode=normal&s=d3a4c7abf5869eff47b3b6fb3b1127cc",
    date: "4ヶ月前",
    site: {image: "https://youliangdao.s3.ap-northeast-1.amazonaws.com/favicon.png", name: "qiita.com"},
    comment: 1,
    good: 26
  }
]
const router = useRouter()
</script>

<template>
    <div class="w-[930px] mx-auto my-4">
        <UserProfileTop />

        <div class="my-6">
            <HeadTagSubTitle title="コメント中の記事" sub-title="コメント中の記事を見る" path="/articles/all" />
        </div>

        <div class="grid grid-cols-2 space-x-4">
            <div v-for="(recommendImage, index) in newArticles.slice(0, 8)" :key="index">
                <CardNormal :recommend-image="recommendImage" />
            </div>
        </div>
        <div @click="router.push('/articles/comments')" class="cursor-pointer text-center w-full border-y py-2 font-[600]">
            コメント中の記事を見る
        </div>
    </div>
</template>

<style scoped>

</style>
