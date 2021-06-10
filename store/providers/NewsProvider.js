import React from 'react';
import NewsContext from '../contexts/NewsContext';

class NewsProvider extends React.Component {
    state = {
        allNews: [],
        headlines:[],
        sources: [],
        newsDetail: {}
    }

    getNewsFromAPI = () => {

    }

    getSourcesFromAPI = () => {

    }

    getHeadLinesFromAPI = () => {

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

