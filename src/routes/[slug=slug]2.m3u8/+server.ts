import { text, type RequestHandler } from "@sveltejs/kit";
import type { EntryGenerator } from './$types';
import { RedirectList } from "$lib";

export const GET: RequestHandler = async ({ params }) => {
    if (params.slug === undefined) return new Response("Not Found", { status: 404 });
    const [infUrl, redirect] = RedirectList[params.slug];
    console.log(`Hit ${params.slug} with ${redirect}`);
    const allInf = await fetch(infUrl).then(res => res.text());
    const xStreamInf = allInf.split("\n").find(line => line.startsWith("#EXT-X-STREAM-INF"));
    return text(`#EXTM3U
#EXT-X-VERSION:3
#EXT-X-INDEPENDENT-SEGMENTS
${xStreamInf}
${redirect}`, { headers: { "Content-Type": "application/vnd" } });
};



export const entries: EntryGenerator = () => {
	return Object.keys(RedirectList).map(slug => ({ slug }));
};

export const prerender = true;