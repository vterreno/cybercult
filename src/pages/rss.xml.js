import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const solutions = await getCollection('picoctf');

  return rss({
    title: 'CyberCult Solutions RSS Feed',
    description: 'Latest solutions from CyberCult',
    site: context.site,
    items: solutions.map((solution) => ({
      title: solution.data.title,
      pubDate: solution.data.date,
    })),
    customData: `<language>en-us</language>`,
  });
}