import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://askjcegbwgptlikbklia.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFza2pjZWdid2dwdGxpa2JrbGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI5NzI0NjEsImV4cCI6MTk3ODU0ODQ2MX0.v3NV62vy8GaGYpyh20JZ3pnvTmr4RjLrx_3Dxd6PUGw'
);
