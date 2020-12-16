import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import './style.css';

const SearchBar: FunctionComponent = () => {
  const [search, setSearch] = useState('');

  const onHandleChange = (value: string) => {
    setSearch(value);
  };

  return (
    <div id="search-content">
      <form>
        <input
          type="text"
          placeholder="Buscar receita"
          id="search-input"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onHandleChange(e.target.value)}
        />
        <div>
          <label htmlFor="name-radio">
            <input type="radio" value="Nome" name="search" id="name-radio" />
            Nome
          </label>
          <label htmlFor="ingredient-radio">
            <input
              type="radio"
              value="Ingrediente"
              name="search"
              id="ingredient-radio"
            />
            Ingrediente
          </label>
        </div>
        <button type="button" id="search-button">
          Buscar
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  repositories: state.RepositoriesReducer.data,
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
