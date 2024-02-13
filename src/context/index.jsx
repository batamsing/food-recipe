import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);


export default function GlobalState({ children }) {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [favoriteList, setFavoriteList] = useState([]);
    const navigate = useNavigate();

    async function handleSearch(event) {

        event.preventDefault();
        setLoading(true);
        try {
            let res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
            if (!res.ok) throw new Error(res.statusText);
            const data = await res.json();
            setLoading(false);
            console.log(data);
            if (data?.data?.recipes) {
                setRecipeList(data.data.recipes);
                setError(null);
                setSearch('');
                navigate('/');
            }

            document.getElementById('searchInput').blur();

        }
        catch (e) {
            setLoading(false);
            setError(e.message);
            setSearch('');
        }
    


    }

    function handleFavoriteList(recipe) {
        let cpyFavoriteList = [...favoriteList];
        const index = cpyFavoriteList.findIndex(item => item.id === recipe.id)

        if (index ===-1) {
            cpyFavoriteList.push(recipe)
        } else {
            cpyFavoriteList.splice(index)
        }

        setFavoriteList(cpyFavoriteList)
    }

    console.log('favorite', favoriteList)

    return <GlobalContext.Provider
        value={{ 
            search,
            setSearch,
            handleSearch,
            loading,
            recipeList,
            error,
            recipeDetails,
            setRecipeDetails,
            favoriteList,
            setFavoriteList,
            handleFavoriteList
        }}>
        {children}
    </GlobalContext.Provider>
}