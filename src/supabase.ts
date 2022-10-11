import { createClient } from '@supabase/supabase-js';

if (
	!process.env.REACT_APP_SUPABASE_URL ||
	!process.env.REACT_APP_SUPABASE_KEY
) {
	throw new Error('Env doesnt exist');
}

const supabase = createClient(
	process.env.REACT_APP_SUPABASE_URL,
	process.env.REACT_APP_SUPABASE_KEY
);

export { supabase };