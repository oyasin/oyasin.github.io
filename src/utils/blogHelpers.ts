import { getCollection } from "astro:content";

export async function getAllPosts(opts: { includeDrafts?: boolean } = {}) {
  const includeDrafts = opts.includeDrafts;
  const posts = await getCollection(
    "blog",
    ({ data }) => includeDrafts || !data.draft
  );
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

export async function getRecentPosts(
  limit = 3,
  opts: { includeDrafts?: boolean } = {}
) {
  const posts = await getAllPosts(opts);
  return posts.slice(0, limit);
}

export async function getAllTags() {
  const posts = await getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.data.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
}

export async function getPostsByTag(tag: string) {
  const posts = await getAllPosts();
  return posts.filter((post) => post.data.tags?.includes(tag));
}

export async function getAllYears() {
  const posts = await getAllPosts();
  const years = new Set<number>();
  posts.forEach((post) => {
    years.add(post.data.pubDate.getFullYear());
  });
  return Array.from(years).sort((a, b) => b - a);
}
