import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hicxlbnrzyslmynymldt.supabase.co";

const supabaseKey = "sb_publishable_MNfzwAYG-tbua9kAVZQwbw_R3laBgjb";

export const supabase = createClient(supabaseUrl, supabaseKey);