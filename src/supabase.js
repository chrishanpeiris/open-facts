import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://wsfvsascwrtegxyzsdqk.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzZnZzYXNjd3J0ZWd4eXpzZHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNTM2NjAsImV4cCI6MjA5MDgyOTY2MH0.peVdLaXwzOYEy1L8ggd1uBa2mbq8zohJEcJdBCVYRLE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
