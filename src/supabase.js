import { createClient } from '@supabase/supabase-js'

const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabaseURL = process.env.REACT_APP_SUPABASE_URL

export const supabase = createClient(supabaseURL, supabaseKey)
