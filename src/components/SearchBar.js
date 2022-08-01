// import { useEffect } from 'react';
import { useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';

export default function SearchBar({ onHandleChange, query, getUsers }) {
  useEffect(() => {
    if (query.length > 2) {
      getUsers();
    }
  }, [query]);

  return (
    <SearchForm>
      <SearchLabelSR htmlFor="usersearch">Enter GitHub-Username</SearchLabelSR>
      <SearchInput
        type="text"
        name="usersearch"
        id="usersearch"
        placeholder="Enter username..."
        value={query}
        onChange={onHandleChange}
      ></SearchInput>
      <SearchIcon />
    </SearchForm>
  );
}

const SearchForm = styled.form`
  display: flex;
  border: 2px solid white;
  padding: 5px;
  border-radius: 10px;
  align-items: center;
  width: 55%;
  margin-top: 1rem;
`;

const SearchIcon = styled(MdSearch)`
  font-size: 1.5rem;
  cursor: pointer;
`;

const SearchLabelSR = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 1.75rem;
  outline: none;
  background-color: transparent;
  border: 0px none;
  font-size: 1rem;
  color: var(--textcolor);
  padding: 5px;
`;
