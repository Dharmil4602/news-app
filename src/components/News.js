import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
        // Constructor will run first, then render method will run and then remaining methods will run

    constructor()
    {
        super(); // We need to call super class in order to run the constructor properly.
        console.log('Hello, I am from News Component');
        this.state = {
           articles: [], // Provided Empty array for the news that will fetched through the url
           loading: false,
           page: 1
        }
    }

    // componentDidMount will run after the render method will run

    async componentDidMount() {
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4871d65e1293480d8d9991b06259253e&page=1"

      let data = await fetch(url) 
      let djson = await data.json()
      console.log(djson)
      this.setState({articles: djson.articles})
    }
    
    prevNews = async ()=>{
        console.log("Previous Clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4871d65e1293480d8d9991b06259253e&page=${this.state.page - 1}`

      let data = await fetch(url) 
      let djson = await data.json()
      console.log(djson)
      this.setState({
          articles: djson.articles,
          page: this.state.page - 1
        })
    }

    nextNews = async ()=>{
        console.log("Next Clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4871d65e1293480d8d9991b06259253e&page=${this.state.page + 1}`

      let data = await fetch(url) 
      let djson = await data.json()
      console.log(djson)
      this.setState({
          articles: djson.articles,
          page: this.state.page + 1
        })
    }
    render() {
        return (
            <>
            <div>
                <div className="container my-4">
                    <h2>Top Headlines</h2>
                    <div className="row">
                    {this.state.articles.map((element)=>{

                        // Here we have used the "key" because as we have used map method, we need to specify the key in that. element.title and all that are fetched from the object/json we provided above

                        return <div className="col-md-4" key={element.url}>
                            {/* Here ternary operator is used to check whether the title or any element from the fetched url is null or not */}
                        <NewsItem title={element.title?element.title.slice(0,48):""} description={element.description?element.description.slice(0, 54):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                    })}
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-between mb-4">
             <button className="btn btn-dark" onClick={this.prevNews}>Previous</button>
             <button className="btn btn-dark" onClick={this.nextNews}>Next</button>
            </div>
            </>
        )
    }
}

export default News