export async function getArticles() {
  const res = await fetch(
    'https://newsapi.org/v2/everything?q=health&apiKey=469cf9023ca343f49c0a6532cebf6017'
  );

  if (!res.ok) throw new Error('Failed to fetch articles');

  const data = await res.json();

  return data.articles.slice(0,20);
}
