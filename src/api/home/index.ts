import axios from "axios"

class Get {
  public async execute() {
    // 記事一覧を取得する
    const response = await axios.get(
      "/api/articles?username=mesi&order=latest",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    console.log(response)
    return response.data.articles.map((blog: any) => {
      return {
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        comments_clount: blog.comments_count,
        liked_count: blog.liked_count,
        body_letters_count: blog.body_letters_count,
        article_type: blog.article_type,
        emoji: blog.emoji,
        is_suspending_private: blog.is_suspending_private,
        published_at: blog.published_at,
        body_updated_at: blog.body_updated_at,
        source_repo_updated_at: blog.source_repo_updated_at,
        pinned: blog.pinned,
        path: blog.path,
        user: {
          id: blog.user.id,
          name: blog.user.name,
          avatar_small_url: blog.user.avatar_small_url,
        },
      }
    })
  }
}

export default new Get()