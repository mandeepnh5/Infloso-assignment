/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const AlbumItem = ({ image, name, desc, id }) => {
  // const navigate = useNavigate();
  return (
    <div
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img src={image} className="rounded w-[160px]" alt="" />
      <p className="font-bold mt-2 mb-1">{name.slice(0, 12)}..</p>
      <p className="text-slate-200 text-sm">{desc}..</p>
    </div>
  );
};

export default AlbumItem;
