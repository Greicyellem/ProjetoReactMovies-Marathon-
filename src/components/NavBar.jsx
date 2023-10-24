import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiMovie, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

import { Button } from "./Button/Button";


const NavBar = ({ onClickButtonMenu }) => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiMovie /> Marathon{" "}
        </Link>
      </h2>
      <h2>
        <Link to="/series">
          <BiCameraMovie /> Filmes e Séries{" "}
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme ou série"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <Button onClick={onClickButtonMenu} title={<AiOutlineMenu/>}> </Button>
      </nav>

  );
};

export default NavBar;
