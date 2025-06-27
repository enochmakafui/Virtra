import supabase from './supabase';

export async function getDoctors() {
  const { data, error } = await supabase.from('doctors').select('*');

  if (error) {
    console.error(error);
    throw new Error('Doctors could not be fetched');
  }

  return data;
}
