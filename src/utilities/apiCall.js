import axios from "axios";


//Get all the categories________
export const categories = async () => {
    try{

        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');

        return { success: true, data: data.categories };

    }catch(e){
       return { success: false }
    }
}


//Get filter by category_________
export const filterCateg = async (filter) => {
    try{
        const { data } = await axios.get(`${filter !== 'All' ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`:'https://www.themealdb.com/api/json/v1/1/search.php?f=c' }`);

        let dataMealF = data.meals;

        if(filter === 'All') dataMealF = dataMealF.slice(0, 20);

        return { success: true, data: dataMealF };

    }catch(e){
        return { success: false }
    }
}


//Get full meal details by id_______
export const detailsById = async (id) => {
    try{
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

        return { success: true, data: data.meals[0] };
    }catch(e){
        return { success: false }
    }
}