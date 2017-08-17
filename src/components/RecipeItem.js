import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe } from '../actions'

class RecipeItem extends Component {
  constructor(){
    super();

    this.state = {
      favorited: false
    }
  }

  favorite(recipe) {
    this.props.favoriteRecipe(recipe);
    this.setState({
      favorited: !this.state.favorited
    });
  }

  render(){
    let { recipe } = this.props;

    return (
      <div className='recipe-item'>
        { 
          this.props.favoriteButton ? 
            <div 
              className='star'
              onClick={() => this.favorite(recipe)}>
              { 
                this.state.favorited ? 
                  <div>&#9733;</div> 
                : 
                  <div>&#9734;</div> 
              }
            </div>
          :
          <div></div>
        }
        <div className='recipe-text'>
          <a href={recipe.href}>
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        <img 
          className='recipe-img'
          src={recipe.thumbnail} 
          alt={recipe.title}
        />
      </div>
    )
  }
}

export default connect(null, { favoriteRecipe })(RecipeItem);