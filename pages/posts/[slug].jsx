import PostLayout from '../../_layouts/blog/post'
import { getPostBySlug, getAllPosts } from '../../api'

export default function Post(props) {
  return <PostLayout {...props} />
}

export async function getStaticProps(context) {
  return {
    props: await getPostBySlug(context.params.slug)
  }
}

export async function getStaticPaths() {
  let paths = await getAllPosts()
  paths = paths.map((post) => ({
    params: { slug: post.slug }
  }))
  return {
    paths,
    fallback: false
  }
}
