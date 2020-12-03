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
        let filteredArray = this.props.articlesArray.filter(element => element.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        return filteredArray.map(articleObj => <ArticleCard clickHandler={this.props.clickHandler} key={articleObj.id} articleObj={articleObj}/>);

        // return this.props.articlesArray.map(articleObj => <ArticleCard clickHandler={this.props.clickHandler} key={articleObj.id} articleObj={articleObj}/>);
    }
    
    render(){
        // console.log(this.props)
        // console.log(this.props.articlesArray)
        return(
            <>
            <SearchForm searchValue={this.state.searchValue} changeHandler={this.searchChangeHandler}/>
            <div className="index">
            <h1>Articles</h1>
            {this.renderArticles()}
          </div>
          </>
        )
    }
};

export default ArticlesList;