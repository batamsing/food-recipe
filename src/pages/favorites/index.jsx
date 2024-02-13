import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context'
import RecipeItem from '../../component/recipe-item';

export default function Favorites() {
  const { favoriteList } = useContext(GlobalContext)

  
  return (
    <div className='flex flex-wrap py-6 justify-center'>
      {
        favoriteList && favoriteList.length > 0 ?
        favoriteList.map(item => {
          return <RecipeItem  key={item.id} item={item} />
        })
         :
        <p>Nothing to show. Please search for a recipe..</p>
      }
    </div>
  )
}
