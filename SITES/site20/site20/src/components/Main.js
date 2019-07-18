import React from "react";
import Article from "./Article";
import articles from "../articles";

var allArticles = articles.map(article => (
  <Article key={article.id} title={article.title} id={article.id} />
));

const Main = () => <div>{allArticles}</div>;

export default Main;
