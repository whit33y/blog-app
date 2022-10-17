import { supabase } from "../client";
import {Post} from '../types/PostTypes'

async function fetchPostAll() {
    const { data } = await supabase
        .from<Post>('posts')
        .select()
    return data
}

export {fetchPostAll}