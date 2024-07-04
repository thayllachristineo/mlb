import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Lupa from '../../assets/search.svg';

import * as Styled from './Search.styled';

const Search: FC = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const v = e.target.value;
    setValue(v);
  };

  const handleOnKeyDown = (e: KeyboardEvent): void => {
    if (e.key !== 'Enter' || !value.trim()) return setIsDisabled(true);
    else setIsDisabled(false);

    navigate(`/items?search=${value}`);
    setValue('');
  };

  const handleOnClick = (): void => {
    if (!value.trim()) return setIsDisabled(true);
    else setIsDisabled(false);

    navigate(`/items?search=${value}`);
    setValue('');
  };

  return (
    <Styled.Navigation>
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
        <Styled.Icon onClick={handleOnClick} disabled={isDisabled}>
          <img src={Lupa} alt="search icon" />
        </Styled.Icon>
      </Styled.Content>
    </Styled.Navigation>
  );
};

export default Search;
