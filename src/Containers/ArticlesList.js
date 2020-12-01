import React from 'react';
import ArticleCard from  '../Components/ArticleCard';

class ArticlesList extends React.Component{

    renderArticles= () => {
        return this.props.articlesArray.map(articleObj => <ArticleCard clickHandler={this.props.clickHandler} key={articleObj.id} articleObj={articleObj}/>);
    }
    
    render(){
        // console.log(this.props)
        // console.log(this.props.articlesArray)
        return(
            <div className="index">
            {this.renderArticles()}
          </div>
        )
    }
};

export default ArticlesList;