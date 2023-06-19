import React, { Component } from 'react';
import { Header } from './Searchbar.styled';
import { Form } from './Searchbar.styled';
import { BtnSubmint } from './Searchbar.styled';
import { BtnLabel } from './Searchbar.styled';
import { BtnInput } from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

class SearchBar extends Component {
  state = {
    searchName: '',
  };

  handleChangeName = (event) => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
      event.preventDefault();

      if (this.state.searchName.trim() === ''){
          alert("Please use text");
      return;
        }
      
      this.props.onSubmit(this.state.searchName)
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <BtnSubmint type="submit" >
          <ImSearch size="25" />
            <BtnLabel></BtnLabel>
          </BtnSubmint>

          <BtnInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.searchName}
            onChange={this.handleChangeName}
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

export default SearchBar;




