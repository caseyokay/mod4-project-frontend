import './App.css';
import React from 'react';
import ArticlesList from './Containers/ArticlesList';
import Favorites from './Containers/Favorites';

class App extends React.Component{
  state = {
    api: [],
    favArticlesArray: [],
  };

  componentDidMount(){
    fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=56MgrKxew3edDK716GpGAnUEUNflNzXu")
    .then(resp => resp.json())
    .then(data => this.setState({ api: data.results }));
  };

  addToFav = (article) => {
    console.log("Adding to Favorites:",  article)
    const found = this.state.favArticlesArray.some(e => e.id === article.id);
    if (!found) this.setState({
      favArticlesArray: [...this.state.favArticlesArray, article]
    })
    
    console.log("Updated array:", this.state.favArticlesArray)
    // let favArticlesArray = []
    // favArticlesArray.push(article);
    // if then: if the object exists in the favArtclesArray 
    
      // if (this.state.favArticlesArray.filter(e => e.id === article.id)){
      //   this.setState({
      //     favArticlesArray: this.state.favArticlesArray
      //   });
      // }
      //   else {
      //     console.log("ELSE")
      // this.setState({
      //   favArticlesArray: [...this.state.favArticlesArray, article]
      // })}
  }

  // removeFromFav = (article) => {
  //   console.log("Removing from favorites:", article)
  //   let foundObj = this.state.favArticlesArray.find(element => element === article)
  //   console.log("Grabbed from Fav Array:", foundObj);
  // }

  removeFromFav = (article) => {
    let filteredArray = this.state.favArticlesArray.filter(item => item !== article)
    this.setState({
      favArticlesArray: filteredArray
    });
}
  
 

  render(){
    console.log(this.state.api)
    // console.log(this.state)
    // lets see
    return (
      <div className="App">
      <ArticlesList articlesArray={this.state.api} clickHandler={this.addToFav}/>
      <Favorites favArticlesArray={this.state.favArticlesArray} clickHandler={this.removeFromFav}/>
      </div>
    );
    }
};

export default App;
