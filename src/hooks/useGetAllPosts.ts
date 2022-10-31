import { useQuery } from 'react-query'
import { supabase } from '../client'
import { Post } from '../types/PostTypes'

const getAllPosts = async () => {
  const { data: posts, error } = await supabase.from<Post>('posts').select()
  if (error) {
    console.log('error')
  }
  return posts
}
const useGetAllPosts = () => {
  return useQuery(['allPosts'], async () => {
    const posts = await getAllPosts()
    return posts
  })
}

export { useGetAllPosts }
