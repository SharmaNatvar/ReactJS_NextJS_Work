import React, { useState } from "react";
import Star from "../Star";
import { GoTriangleRight } from "react-icons/go";
import { useParams } from "react-router";
import { useGetMovieQuery } from "../../services/Api";
import { Link } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci"


function Modal({data , modalActive, modalClose}){
  if(!modalActive) return null;

  return(
    <div onClick={()=>modalClose()} className="fixed inset-0 grid place-content-center bg-black bg-opacity-50 backdrop-blur-lg">
       {
        data?.videos?.results?.length > 0 && (
          <iframe autoPlay className="aspect-video h-[150px] sm:h-[250px] md:h-[350px] lg:h-[500px]" title="Trailer" src={`https://youtube.com/embed/${data.videos.results[0].key}`} allow="autoplay"/>
        )
       }
    </div>
  )
}

const MovieInfo = () => {

  const [modalActive , setModalActive] = useState(false)

  const { id } = useParams();

  const { data, isFetching, error } = useGetMovieQuery(id);

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full max-w-[1700px] lg:flex-row lg:items-start">
        <div className="w-1/2 flex justify-center items-center lg:w-[50%]">
          <div className=" w-[50%] my-5 rounded-lg overflow-hidden">
            <img
              src={
                data?.poster_path
                  ? `http://image.tmdb.org/t/p/w500/${data?.poster_path}`
                  : "https://www.fillmurray.com/200/300"
              }
              alt={data?.title}
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-center p-5 lg:w-[50%]">
          <div className="w-[70%] lg:flex-row">
            <div className="text-center w-full">
              <h1 className="font-black text-2xl ">{data?.title}</h1>
              <p className="text-sm mt-2">{data?.tagline}</p>
            </div>
            <div className="mt-3 w-full flex flex-col justify-center items-center lg:justify-between lg:flex-row">
              <Star />
              <p className="mt-3 ">
                {data?.runtime} min / {data?.release_date} /{" "}
                {data?.original_language}
              </p>
            </div>
            <div className="mt-3 w-full">
              <h2 className="font-bold mb-3">Genre</h2>
              <div className="flex gap-4">
                <button className="px-4 py-2  flex justify-center items-center gap-2 rounded-lg">
                  {
                    data?.genres.map((genre , index) =>{
                      return(
                        <p key={index} className="mb-4 mr-4 flex items-center justify-center rounded-lg border-[1px] border-slate-900 px-3 py-2 text-sm">
                          <span className="mr-2 uppercase">{genre?.name}</span>
                          <CiLocationArrow1 className="text-sm"/>
                        </p>
                      )
                    })
                  }
                </button>
              </div>
            </div>
            <div className="mt-3">
              <h2 className="font-bold">Information :</h2>
              <p className="mt-3">{data?.overview}</p>
            </div>
            <div className=" w-full mt-5">
              <h2 className="font-bold mb-3">top cast</h2>
              <div className="flex flex-wrap justify-center items-center gap-3">
                {data?.credits?.cast
                  .map((character, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-center"
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${character?.profile_path}`}
                          alt={character.name}
                          className="w-[100px] rounded-lg overflow-hidden"
                        />
                        <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                          {character?.name}
                        </p>
                      </div>
                    );
                  })
                  .slice(0, 6)}
              </div>
            </div>
            <div className="w-full mt-3 flex justify-start items-center">
              <button className="px-3 py-2 border border-black rounded-lg mr-4 flex justify-center items-center gap-2">
                <Link to={data?.homepage} target="_blank">
                  <span className="flex justify-center items-center">
                    webside <GoTriangleRight />
                  </span>
                </Link>
              </button>
              <button onClick={()=>{setModalActive(true)}} className="px-3 py-2 border border-black rounded-lg  flex justify-center items-center gap-2">
                <span className="flex justify-center items-center">
                  trailer <GoTriangleRight />
                </span>
              </button>
              <Modal data={data} modalActive={modalActive} modalClose={()=> setModalActive(false)}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieInfo;
