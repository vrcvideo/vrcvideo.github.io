import { RedirectList } from '$lib';
import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((slug: string) => {
    return RedirectList[slug] !== undefined;
}) satisfies ParamMatcher;