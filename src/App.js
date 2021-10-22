import React, { useEffect, useState } from 'react';
import './App.css'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);  // criando a lista para ser exibida
  const [featureData, setFeatureData] = useState(null);  //filme em destaque
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {   // quando a tela for carregada ele vai executar o que estiver aqui
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o Featured (Filme em destaque)
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1)); //gerando um numero aleatorio dos filmes
      let chosen = originals[0].items.results[randomChosen]; // pegando o numero escolhido
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);

    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featureData &&
        <FeaturedMovie item={featureData} />
      }


      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito  <span role="img" aria-label="coracao">por Evelyn Cleto</span>  <br />
      </footer>

      {movieList.length <= 0 && 
      <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"/>
      </div>
    }
    </div>
  );
}


