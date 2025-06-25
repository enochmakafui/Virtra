function ArticleCard({ article }) {
  return (
    <div className='rounded-lg bg-white shadow-md overflow-hidden hover:scale-105 transition duration-300 ease-in-out'>
      <img
        src={article.urlToImage}
        className='hover:scale-105 transition duration-300 ease-in-out'
      />
      <div className='p-4 flex flex-col gap-3'>
        <p className=''>
          <span className='font-semibold'>Title: </span> {article.title}.
        </p>
        <p>
          <span className='font-semibold'>Description: </span>
          {article.description.split(' ').slice(0, 10).join(' ') + '...'}
        </p>
        <a
          className='block bg-blue-500 text-white w-max px-2 py-2 rounded-lg'
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
