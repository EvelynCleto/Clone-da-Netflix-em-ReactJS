/*
Tmdb.js - 
Arquivo que vai lidar com qualquer tipo de requisição ao tmdb --- ele é que vai pegar as informações de filmes e etc, e mandar para aplicação
*/


const API_KEY = 'fccf19a50853d1aaef6857318e559832';
const API_BASE = 'https://api.themoviedb.org/3'


/*
    -originais da netflix
    - recomendados (trending)
    - em alta (top rated)
    - ação
    - comédia
    - terror
    - romance
    - documentários
*/

//Essa função eu mando o endpoint, ele vai pegar o resultado e vai retornar o Json
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`); // ele vai fazer a requisição 
    const json = await req.json(); //pega o json da requisição
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':   //filmr
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);  //pega as informações de 1 filme expecifico
                    break;
                case 'tv':       //seriado
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                default:
                    info = null;
                    break;
            }
        }

        return info;
    }
}