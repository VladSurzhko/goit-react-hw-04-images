import React, { useState } from 'react';
import { Header } from './Searchbar.styled';
import { Form } from './Searchbar.styled';
import { BtnSubmint } from './Searchbar.styled';
import { BtnLabel } from './Searchbar.styled';
import { BtnInput } from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';


const SearchBar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState("")

  const handleChangeName = ({currentTarget: {value} }) => {
    setSearchName(value.toLowerCase())
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchName.trim() === "") {
      alert("Please use text")
      return
    }
    onSubmit(searchName);
    setSearchName("")
  } 


 return (
      <Header>
        <Form onSubmit={handleSubmit}>
          <BtnSubmint type="submit" >
          <ImSearch size="25" />
            <BtnLabel></BtnLabel>
          </BtnSubmint>

          <BtnInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            value={searchName}
            onChange={handleChangeName}
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  };

export default SearchBar;




