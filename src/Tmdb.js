const API_KEY = '703c9c83897231e58b679f98760a9613';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários
*/

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: []
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: []
            }
        ];
    }
}