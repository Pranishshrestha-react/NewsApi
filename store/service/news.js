import {BASE_URL, API_KEY, country_code} from '../../config/config';

export async function getArticles(category='general') {

    try{
        let article = await fetch(`${BASE_URL}/top-headlines?country=${country_code}&category=${category}&apiKey=${API_KEY}`);

        let result = await article.json();

        return result.articles;
    }
    catch(error) {
        throw error;
    }
} 