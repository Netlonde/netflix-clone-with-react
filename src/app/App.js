/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from "react";
import Tmdb from "../database/Tmdb";
import MovieRow from "../components/movieRow/MovieRow";
import FeaturedMovie from "../components/featuredMovie/FeaturedMovie";
import Page from "./styled";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";

export default  () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(null);

  useEffect(() =>{
    const loadAll = async () =>{
      let list = await Tmdb.getHomeList();
      setMovieList(list);


      let originals = list.filter(item => item.slug === 'originals')
      let randomChosem = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosem];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeatureData(chosenInfo);
    }

    loadAll();
  },[])

  useEffect(()=>{
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false)
      }
    }

      window.addEventListener('scroll', scrollListener)
      return () =>{
        window.removeEventListener('scroll',scrollListener)
      }
  },[])

  return(
    <Page>

      <Navbar black={blackHeader}/>

      {featureData &&
        <FeaturedMovie item={featureData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow items={item.items} key={key} title={item.title} />
        ))}
      </section>

      <Footer />

      {movieList.length <= 0 &&
        <Loading />
      }
    </Page>
  )
}
