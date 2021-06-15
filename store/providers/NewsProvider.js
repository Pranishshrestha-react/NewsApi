import React from 'react';
import NewsContext from '../contexts/NewsContext';
import axios from 'axios';
const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "0bbe885d29d8460d8ac4ece98af81d64";
class NewsProvider extends React.Component {
    state = {
        allNews: [],
        headlines:[],
        sources: [],
        newsDetail: {}
    }

    getNewsFromAPI = async() => {
        try{
            const response = await axios.get(`${BASE_URL}/everything?q=bitcoin&apiKey=${API_KEY}`);
            this.setState({
                ...this.state,
                allNews: response.data.articles
            })

        }
        catch(error) {
            console.log(error )
        }
    }

    getSourcesFromAPI = async() => {
        try{
            const sourApi = await axios.get(`${BASE_URL}/sources?apiKey=${API_KEY}`);
            this.setState({
                ...this.state,
                sources: sourApi.data.sources
            })
        }
        catch(err){
            console.log('sources', err)
        }
    }

    getHeadLinesFromAPI = async() => {
        try{
            const headNews= await axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
            this.setState({
                ...this.state,
                headlines: headNews.data.articles
            })
        }
        catch(error) {
        }
    }

    setNewsDetail = (news) => {
        this.setState ({
            ...this.state,
            newsDetail: news
        })
    }

    render() {
        return (
            <NewsContext.Provider value={{
                ...this.state,
                getNews: this.getNewsFromAPI,
                getSources: this.getSourcesFromAPI,
                getHeadLines: this.getHeadLinesFromAPI,
                setNewsDetail: this.setNewsDetail,

            }}>
                {this.props.children}
            </NewsContext.Provider>
        )
    }
}

export default NewsProvider;

