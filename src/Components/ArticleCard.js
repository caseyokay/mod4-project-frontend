import React from  'react';

class  ArticleCard extends React.Component{

    localClickHandler = () => {
    let clickHandler = this.props.clickHandler
    clickHandler(this.props.articleObj)
    }

    openArticleWindow = () => {
        const url = this.props.articleObj.url;
        window.open(url, '_blank');
    }

    render(){
        // console.log(this.props.articleObj.media[0]["media-metadata"]);
        return(
            <div className="card" >
                <span className="content">
                <h2>{this.props.articleObj.title}</h2>
                </span>
                <span className="like">
                <button onClick={this.localClickHandler}>🖤</button>
                </span>
                <span className="open">
                    <button onClick={this.openArticleWindow}>🔗</button>
                </span>
            </div>
        )
    }
};

export default ArticleCard;