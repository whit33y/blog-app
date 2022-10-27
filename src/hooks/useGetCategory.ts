import { supabase } from '../client'
type CategoryType = {
  categories_name: string
}
async function useGetCategory(category: string | undefined) {
  if (!category) return
  else {
    const { data } = await supabase
      .from<CategoryType>('categories')
      .select('categories_name')
      .eq('categories_name', category)
      .single()
    return data
  }
}
export { useGetCategory }
