import React from 'react';
import ArticleCard from  '../Components/ArticleCard';

class Favorites extends React.Component{

    renderArticles= () => {
        return this.props.favArticlesArray.map(articleObj => <ArticleCard clickHandler={this.props.clickHandler} key={articleObj.id} articleObj={articleObj}/>);
    }

    
    render(){
        // console.log(this.props)
        // console.log(this.props.articlesArray)
        return(
            <div className="favorites">
            <h1>Favorites</h1>
            {this.renderArticles()};
          </div>
        )
    }
};

export default Favorites;