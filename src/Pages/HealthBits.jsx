import ArticleCard from '../features/articles/ArticleCard';
import { getArticles } from '../services/apiArticles';
import { useQuery } from '@tanstack/react-query';

function HealthBits() {
  const {
    isLoading,
    data: articles,
    error,
  } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  return (
    <>
      <h2 className='text-3xl text-gray-600 font-semibold mb-8'>
        Trending Health Articles
      </h2>
      <div className='p-4 grid grid-cols-4 gap-8 '>
        {articles.map((article) => (
          <ArticleCard article={article} key={article.title} />
        ))}
      </div>
    </>
  );
}

export default HealthBits;
