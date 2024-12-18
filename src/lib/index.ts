
/**
 * RedirectList
 * @description Record.Key is the slug, Record.Value is an array of two strings. String 1 is a url that we will get #EXT-X-STREAM-INF from, and String 2 is the url that we will redirect to.
 */
export const RedirectList: Record<string, [string, string]> = {
    "good-energy": ["https://radio.7z.wtf/good-energy/index.m3u8", "https://radio.7z.wtf/good-energy/main_stream.m3u8"],
    "subdued": ["https://radio.7z.wtf/subdued/index.m3u8", "https://radio.7z.wtf/subdued/main_stream.m3u8"],
    "lillith": ["https://mtx.lilyy.gay/lillith/index.m3u8", "https://mtx.lilyy.gay/lillith/stream.m3u8"]
};