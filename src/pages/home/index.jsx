import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import RecipeItem from '../../component/recipe-item'

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext)

  if (loading) {
    return <div className='flex justify-center text-2xl font-semibold'>
      Loading...Please Wait
    </div>
  }
  return (
    <div className='flex flex-wrap py-6 justify-center'>
      {
        recipeList && recipeList.length > 0 ?
        recipeList.map(item => {
          return <RecipeItem  key={item.id} item={item} />
        })
         :
        <p>Nothing to show. Please search for a recipe..</p>
      }
    </div>
  )
}
