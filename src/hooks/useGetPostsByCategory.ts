import { useQuery } from 'react-query'
import { supabase } from '../client'
import { Post } from '../types/PostTypes'

const getPostByCategory = async (category: string) => {
  const { data: post, error } = await supabase.from<Post>('posts').select().eq('category', category)
  if (error) {
    console.log('error!')
  }
  return post
}
const useGetPostByCategory = (category: string | undefined) => {
  if (!category) return
  return useQuery(['postsByCategory', category], async () => {
    const posts = await getPostByCategory(category)
    return posts
  })
}

export { useGetPostByCategory }
