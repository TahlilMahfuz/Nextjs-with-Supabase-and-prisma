
import { createClient } from "@supabase/supabase-js/dist/module"

const supabaseUrl = 'https://lspvkltuwmollpswiuxj.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
if (!supabaseKey) {
  throw new Error('SUPABASE_KEY environment variable is not set');
}
// const supabase = createClient(supabaseUrl, supabaseKey)
const supabase = createClient(supabaseUrl, supabaseKey) 

export { supabase }