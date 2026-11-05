import { getCollection } from 'astro:content';

/**
 * Posts in display order. Posts still at `outline` status (not yet written
 * by Reyna) appear in the dev preview only, never in a production build.
 */
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) =>
    import.meta.env.PROD ? data.status !== 'outline' : true,
  );
  return posts.sort((a, b) => a.data.order - b.data.order);
}
