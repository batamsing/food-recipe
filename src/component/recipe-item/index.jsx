import { Link } from 'react-router-dom';

export default function RecipeItem({item}) {
    return <div className='flex flex-col w-80 p-4 border border-solid m-2 shadow-md rounded overflow-hidden'>
        <div className="overflow-hidden rounded-sm h-40">
            <img src={item?.image_url} alt={item?.title} className="block w-full" />
        </div>
        <div>
            <span>{item?.publisher}</span>
            <h3>{item?.title}</h3>
            <Link to={`/recipe-item/${item?.id}`}
                className='inline-block text-lg font-semibold leading-none hover:text-blue-300 bg-gray-900 text-white px-3 py-2 rounded-lg duration-50' 
            >
                Recipe Details
            </Link>
        </div>
        
    </div>
}