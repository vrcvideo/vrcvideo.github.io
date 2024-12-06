import { text, type RequestHandler } from "@sveltejs/kit";
import type { EntryGenerator } from './$types';
import { RedirectList } from "$lib";

export const GET: RequestHandler = async ({ params }) => {
    if (params.slug === undefined) return new Response("Not Found", { status: 404 });
    console.log(`Hit ${params.slug}, redirecting to ${params.slug}2`);
    return text(`#EXTM3U
#EXT-X-VERSION:3
#EXT-X-INDEPENDENT-SEGMENTS

#EXTPLAYLIST
/${params.slug}2.m3u8`, { headers: { "Content-Type": "application/vnd" } });
};



export const entries: EntryGenerator = () => {
	return Object.keys(RedirectList).map(slug => ({ slug }));
};

export const prerender = true;