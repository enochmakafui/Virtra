import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://vlqbfncbfdnsdhdasgkz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZscWJmbmNiZmRuc2RoZGFzZ2t6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwMjUxNjAsImV4cCI6MjA2NjYwMTE2MH0.B2TGTXIZJBY2BIlV8nsyV7ANBCgi75vXeZtEP_S1IOo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
