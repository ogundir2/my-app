import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://onuotqlbyounlcpkikcv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9udW90cWxieW91bmxjcGtpa2N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMzc4OTEsImV4cCI6MTk5MzcxMzg5MX0.gd3w6uoRMIom1djeTdkc2tPxekYMldOci2ytyvNkFAo";

export const supabase = createClient(supabaseUrl, supabaseKey);