import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeList extends Component {
  render(){
    console.log('props', this.props);

    return(
      <div>
        <h4>Recipe List</h4>
        <ul className='list-group'>
          {
            this.props.recipes.map((recipe, index) => {
              return(
                <li className='list-group-item' key={index}>
                  <div className='list-item'>{recipe.title}</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);