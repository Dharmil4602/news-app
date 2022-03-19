import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="bg-primary">
          This Is News Component
       <NewsItem/>
          </div>
    )
  }
}

export default News