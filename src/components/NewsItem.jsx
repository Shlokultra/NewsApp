import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageurl, newsurl } = this.props;
    return (
      <div className='my-3'>
        <>
          <Card >
            <Card.Img variant="top" src={!imageurl ? "https://cdn.arstechnica.net/wp-content/uploads/2026/05/starshipflight12_inflight-1152x648.jpg" : imageurl} />
            <Card.Body>
              <Card.Title> {title} </Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Button href={newsurl} target='_blank' variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </>
      </div>
    )
  }
}

export default NewsItem
