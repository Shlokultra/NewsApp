import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageurl,newsurl} = this.props;
    return (
      <div className='my-3'>
        <>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageurl} />
            <Card.Body>
              <Card.Title> {title}... </Card.Title>
              <Card.Text>
                {description}...
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
