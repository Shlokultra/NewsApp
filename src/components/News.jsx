import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
// import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
 
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(0)
        // document.title = `${this.capitalizeFirstLetter(props.category)}  - Infosentinel News`;

 const capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  

 const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(15);
    setLoading(true)
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json()
    props.setProgress(50);
    console.log(parsedData);
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }


  useEffect(() =>{
     updateNews();
  },[])

 const handleprevclick = async () => {
    setPage(page-1)
    updateNews();
  }

 const handlenextclick = async () => {
  const nextPage = page + 1;
setPage(nextPage);

  }

 const fetchMoreData = async () => {

  setPage(page+1)
  const nextPage = page + 1;

  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;

  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(articles.concat(parsedData.articles))
  setTotalResults(parsedData.totalResults)

  
  console.log(
  "Articles:",
  articles.length,
  "Total:",
  totalResults
);
  
};
    return (
      <div className='container my-3'>
        <>
          <h1 className="text-center" style={{ margin: '50px 0px' }}>InfoSentinel News - Top {capitalizeFirstLetter(props.category)} Headlines </h1>
          {loading && <Spinner />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          >
            <div className="container">

              <div className="row">
                {articles.map((element) => {
                  return <div className="col-md-4" key={element.imageurl}>
                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
                })}
              </div>

            </div>
          </InfiniteScroll>
          
        </>
      </div>
    )
  
}



 News.defaultProps = {
    country: 'us',
    pageSize: 18,
    category: 'general'
  }

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

export default News
