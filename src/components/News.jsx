import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static deafaultProps = {
    country: 'us',
    pageSize: 18,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  constructor(props) {
    let articles = [
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "The Associated Press",
        "title": "Trump administration to force foreigners in the U.S. to apply for a green card abroad - NPR",
        "description": "Foreigners in the U.S. who want a green card will need to leave and apply in their home country, the Trump administration announced Friday, in a surprise change to a longstanding policy.",
        "url": "https://www.npr.org/2026/05/23/nx-s1-5832399/trump-administration-green-card-abroad",
        "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4908x2761+0+175/resize/1400/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F44%2Fc5%2F948b751a42dc81f34696c4b40680%2Fap26142769231232.jpg",
        "publishedAt": "2026-05-23T05:11:23Z",
        "content": "WASHINGTON Foreigners in the U.S. who want a green card will need to leave and apply in their home country, the Trump administration announced Friday, in a surprise change to a longstanding policy."
      },

      {
        "source": {
          "id": "cbs-news",
          "name": "CBS News"
        },
        "author": "Tucker Reals, Frank Andrews",
        "title": "Live Updates: U.S. preparing for possible strikes against Iran",
        "description": "The secretary of state tempered optimism for a deal to end the Iran war.",
        "url": "https://www.cbsnews.com/live-updates/iran-war-trump-us-peace-talks-strait-of-hormuz-control/",
        "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2026/05/22/f55d53d8-7290-4f3e-bf45-dbe4620a7fcd/thumbnail/1200x630/729070e38c628e95748af563f5cec3b3/strait-of-hormuz-ships-may-22.jpg",
        "publishedAt": "2026-05-23T04:31:00Z",
        "content": "Secretary of State Marco Rubio said Friday that it would be lamentable if a United Nations Security Council resolution on the Strait of Hormuz didn't pass."
      },

      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "The Associated Press",
        "title": "'It Takes Two' rapper Rob Base dies at 59 - NPR",
        "description": "Rapper Rob Base has died after a battle with cancer.",
        "url": "https://www.npr.org/2026/05/23/nx-s1-5832030/it-takes-two-rapper-rob-base-who-helped-bring-hip-hop-mainstream-dies-at-59",
        "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5272x2966+0+228/resize/1400/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F2a%2F45%2Ffd7d182949c4a1597e08b22bc151%2Fap26142839921634.jpg",
        "publishedAt": "2026-05-23T04:09:33Z",
        "content": "Rob Base, a rapper and one half of the Harlem hip-hop duo Rob Base & DJ E-Z Rock, has died after a battle with cancer."
      }
    ]
    super(props);
    console.log("Hello i am a constructor from news components")
    this.state = {
      articles: articles,
      loading: true,
      page: 1,
      totalResults: 0,
      hasMore: true
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}  - Infosentinel News`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b280b13befee4144a4331c6eda48aae3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(15);
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json()
    this.props.setProgress(50);
    console.log(parsedData);
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles, totalResults: parsedData.totalResults,
      loading: false
      
    })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  // handleprevclick = async () => {

  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b280b13befee4144a4331c6eda48aae3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();

  //   // console.log(parsedData);

  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parsedData.articles || [],
  //   //   loading: false
  //   // });
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }

  // handlenextclick = async () => {
  //   // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b280b13befee4144a4331c6eda48aae3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   //   this.setState({ loading: true });

  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();

  //   //   console.log(parsedData);

  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parsedData.articles || [],
  //   //     loading: false
  //   //   });
  //   // }
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();

  // }

 fetchMoreData = async () => {

  const nextPage = this.state.page + 1;

  this.setState({ page: nextPage });

  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b280b13befee4144a4331c6eda48aae3&page=${nextPage}&pageSize=${this.props.pageSize}`;

  let data = await fetch(url);
  let parsedData = await data.json();

  this.setState({
    articles: this.state.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults

    
  });
  console.log(
  "Articles:",
  this.state.articles.length,
  "Total:",
  this.state.totalResults
);
  
};
  render() {
    return (
      <div className='container my-3'>
        <>
          <h1 className="text-center" style={{ margin: '50px 0px' }}>InfoSentinel News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">

              <div className="row">
                {this.state.articles.map((element) => {
                  return <div className="col-md-4" key={element.imageurl}>
                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
                })}
              </div>

            </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between my-3">
            <Button disabled={this.state.page <= 1} variant="info" onClick={this.handleprevclick}>&larr; Previous</Button>
            <Button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} variant="info" onClick={this.handlenextclick}>Next &rarr;</Button>
          </div> */}
        </>
      </div>
    )
  }
}

export default News
