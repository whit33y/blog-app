import { useQuery } from 'react-query'
import { supabase } from '../client'
import { Post } from '../types/PostTypes'

const getetPostDetails = async (id: string) => {
  const { data: post, error } = await supabase.from<Post>('posts').select().eq('id', id).single()
  if (error) {
    console.log(error)
  }
  return post
}
const useGetPostDetails = (id: string | undefined) => {
  if (!id) return
  return useQuery(['postDetails', id], async () => {
    const post = await getetPostDetails(id)
    return post
  })
}

export { useGetPostDetails }
