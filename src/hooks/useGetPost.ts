import { supabase } from '../client'
import { Post } from '../types/PostTypes'

async function useGetPostDetails(id: string | undefined) {
  if (!id) return
  else {
    const { data } = await supabase.from<Post>('posts').select().eq('id', id).single()
    return data
  }
}

export { useGetPostDetails }
