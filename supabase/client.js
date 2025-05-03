import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://datwxjfpobzyuuvldsir.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhdHd4amZwb2J6eXV1dmxkc2lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1ODM1MTIsImV4cCI6MjA2MTE1OTUxMn0.aH_XpQFDNaCooYPEhMxoFMjEu5_nFP25e9zvhb6CxAs';
export const supabase = createClient(supabaseUrl, supabaseKey);
