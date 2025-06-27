
import { createClient } from "@supabase/supabase-js/dist/module"

const supabaseUrl = 'https://lspvkltuwmollpswiuxj.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzcHZrbHR1d21vbGxwc3dpdXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwNDA2MTYsImV4cCI6MjA2NjYxNjYxNn0.NMJLUDvBhiEogeVLcPj4DTZ-QHCW8LXDPwFeVjTmoiE'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }