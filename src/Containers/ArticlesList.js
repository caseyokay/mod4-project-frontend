import React from 'react';
import ArticleCard from  '../Components/ArticleCard';
import SearchForm from '../Components/SearchForm';


class ArticlesList extends React.Component{

    state = {
        searchValue: ""
    }

    searchChangeHandler=(e)=>{
        this.setState({searchValue: e.target.value});
      }

    renderArticles= () => {
        return this.props.articlesArray.map(articleObj => <ArticleCard clickHandler={this.props.clickHandler} key={articleObj.id} articleObj={articleObj}/>);
    }
    
    render(){
        // console.log(this.props)
        // console.log(this.props.articlesArray)
        return(
            <>
            <SearchForm searchValue={this.state.searchValue} changeHandler={this.searchChangeHandler}/>
            <div className="index">
            {this.renderArticles()}
          </div>
          </>
        )
    }
};

export default ArticlesList;