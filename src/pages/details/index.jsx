import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context';

export default function Details() {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, favoriteList, handleFavoriteList } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails(searchParam) {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const data = await response.json();

      if (data) {
        setRecipeDetails(data?.data?.recipe)
      } else console.log('data is not present')
    }

    getRecipeDetails(id)
  }, [id])

  return (
    <div className='container my-5 mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 overflow-hidden'>
      <div className='row-start-2 lg:row-start-auto'>
        <div className='h-96 overflow-hidden rounded-lg group'>
          <img src={recipeDetails?.image_url} alt={recipeDetails?.title} className='w-full h-full object-cover block hover:scale-105 duration-200' />
        </div>

      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between'>
          <div>
            <span className='text-blue-400 font-semibold'>{recipeDetails?.publisher}</span>
            <h2 className='text-2xl text-gray-600 font-bold'>{recipeDetails?.title}</h2>
          </div>
          <button className='bg-slate-800 w-36 p-2 font-semibold rounded-lg hover:text-gray-200 text-white'
            onClick={() => handleFavoriteList(recipeDetails)}
          >
            {
              favoriteList.findIndex(item => item.id === recipeDetails?.id) === -1 ?
              "Add to Favs" : "Remove From Favs"
            }
          </button>
        </div>

        <div>
          <span className='font-bold'>Ingredients:</span>
          <ul className='mx-2'>
            {
              recipeDetails?.ingredients?.map(item => <li>
                <span>{item.description} {item.quantity} {item.unit}</span>
              </li>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
