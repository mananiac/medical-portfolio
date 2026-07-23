import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });

  const sortedArticles = articles.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  return rss({
    title: 'Dr. Drishti Sagar, MD — Clinical Microbiology & Research Feed',
    description: 'Evidence-based insights on clinical microbiology, hospital infection control, and diagnostic surveillance.',
    site: context.site || 'https://dralexvance.com',
    items: sortedArticles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.pubDate,
      description: article.data.description,
      categories: [article.data.category, ...article.data.tags],
      link: `/articles/${article.slug}/`,
      author: article.data.author,
    })),
    customData: `<language>en-us</language>`,
  });
}
