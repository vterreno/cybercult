import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const solutions = await getCollection('picoctf');

  return rss({
    title: 'CyberCult Solutions RSS Feed',
    description: 'Latest solutions from CyberCult',
    site: context.site,
    items: solutions
      .filter((solution) => solution.data.title && solution.data.summary)
      .map((solution) => {
        let pubDate = new Date();
        
        if (solution.data.date) {
          const dateStr = solution.data.date.toString();
          // Handle DD/MM/YYYY format
          if (dateStr.includes('/')) {
            const [day, month, year] = dateStr.split('/');
            pubDate = new Date(`${year}-${month}-${day}`);
          } else {
            pubDate = new Date(solution.data.date);
          }
        }
        
        return {
          title: solution.data.title,
          description: solution.data.summary,
          pubDate: pubDate,
          link: `/ctf/picocctf/${solution.slug}`,
        };
      }),
    customData: `<language>en-us</language>`,
  });
}