const movieLink= 'http://www.omdbapi.com/?s=wild&apikey=796ba183'
const newsLink = 'http://newsapi.org/v2/everything?sources=the-next-web&q=movie&from=2020-11-5&to=2020-11-13&sortBy=publishedAt&apiKey=92667024d01a45f4965ef90275f65703'
 
export const getData =  (domain, page,results ) => {
   return async ()=> {
    let arr = [];
    for (let i = 1; i <= page; i++) {
      const link = `${domain}&page=${i}`;
      let res = await fetch(link);
      let data = await res.json();
      arr.push(...data[results]);
    }
    return arr;
  }
  };
  export const fetchMovies = getData(movieLink,20,'Search')
  export const fetchSliderMovies = getData(movieLink,1,'Search')
  export const fetchNews = getData(newsLink,5,'articles')