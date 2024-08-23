import { createClient } from '@supabase/supabase-js';
import {
    SUPABASE_PROJECT_URL,
    SUPABASE_PUBLIC_KEY,
} from '../utils/constants/config';

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_PUBLIC_KEY);

export default supabase;
