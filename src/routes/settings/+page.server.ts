import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ locals: { supabase } }) => {
	const { data: reading_plans } = await supabase
		.from('reading_plans')
		.select('name, description')
		.order('name');
	return { reading_plans: reading_plans ?? [] };
};
