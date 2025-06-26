function ArticleCard({ article }) {
  return (
    <div className='rounded-2xl bg-white shadow-lg overflow-hidden transform hover:scale-[1.03] transition-all duration-300 ease-in-out border border-gray-100'>
      <img
        src={article.urlToImage}
        alt={article.title}
        className='w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110'
      />
      <div className='p-5 flex flex-col gap-4'>
        <h2 className='text-lg font-bold text-gray-800 line-clamp-2'>
          {article.title}
        </h2>
        <p className='text-sm text-gray-600 line-clamp-3'>
          {article.description?.split(' ').slice(0, 15).join(' ') + '...'}
        </p>
        <a
          className='self-start bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:shadow-md transition-all'
          href={article.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;
