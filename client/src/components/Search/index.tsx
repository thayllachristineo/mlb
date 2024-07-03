import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './Search.styled';

const Search: FC = (): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const navigate = useNavigate();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const v = e.target.value;
    setValue(v);
  };

  const handleOnKeyDown = (e: KeyboardEvent): void => {
    if (e.key !== 'Enter' || !value.trim()) return;
    navigate(`/items?search=${value}`);
  };

  const handleOnClick = (): void => {
    navigate(`/items?search=${value}`);
  };

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Link to="/">
          <Styled.Logo
            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.1/mercadolibre/logo__small@2x.png"
            alt="Logo de Mercado Libre"
          />
        </Styled.Link>

        <label htmlFor="inputSearch" />
        <Styled.Input
          id="inputSearch"
          type="text"
          placeholder="Nunca dejes de buscar"
          value={value}
          onChange={e => handleOnChange(e)}
          onKeyDown={e => handleOnKeyDown(e)}
        />
        <Styled.Icon onClick={handleOnClick}>
          <img src="/assets/search.svg" alt="search icon" />
        </Styled.Icon>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Search;
