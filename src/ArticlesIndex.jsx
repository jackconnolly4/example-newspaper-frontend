export function ArticlesIndex(props) {
  return (
    <div>
      <h1>Articles:</h1>
      {props.articles.map((article) => (
        <div key={"article"}>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.description}</p>
          <p>{article.urlToImage}</p>
        </div>
      ))}
    </div>
  );
}
