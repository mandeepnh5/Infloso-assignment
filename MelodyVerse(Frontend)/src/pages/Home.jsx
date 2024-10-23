/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../components/Layout";
import AlbumItem from "../components/AlbumItem";
import SongItem from "../components/SongItem";

const Home = () => {
  return (
    <Layout>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {[...Array(8)].map((_, i) => (
            <AlbumItem
              key={i} 
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1iJOYYV7RiH6nI9Q6HmMnwQ-ZdfaX_DOmA&s"
              name={`Album ${i + 1}`} 
              desc={`Description ${i + 1}`} 
              id={i + 1} 
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Todays biggest hits</h1>
        <div className="flex overflow-auto">
          {[...Array(8)].map((_, i) => (
            <SongItem
              key={i} 
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1iJOYYV7RiH6nI9Q6HmMnwQ-ZdfaX_DOmA&s"
              name={`Song ${i + 1}`}
              desc={`Description ${i + 1}`} 
              id={i + 1} 
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
