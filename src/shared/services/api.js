import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    api_key: 'b73de80df2ed50327adfc0ab4da97097',
  },
});

export const filmSearch = async (page = 1) => {
  const { data } = await instance.get('/trending/all/day?', {
    params: {
      page,
    },
  });
  return data.results;
};

export default filmSearch;
