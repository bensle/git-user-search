import { useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';

export default function SearchBar({
  onHandleChange,
  searchInput,
  onFetchData,
}) {
  useEffect(() => {
    if (searchInput.length > 2) {
      onFetchData();
    }
  }, [searchInput]);

  return (
    <SearchForm>
      <SearchLabelSR htmlFor="usersearch">Enter GitHub-Username</SearchLabelSR>
      <SearchInput
        type="text"
        name="usersearch"
        id="usersearch"
        placeholder="Enter username..."
        value={searchInput}
        onChange={onHandleChange}
      ></SearchInput>
      <SearchIcon />
    </SearchForm>
  );
}

const SearchForm = styled.form`
  display: flex;
  border: 1px solid white;
  padding: 5px;
  border-radius: 10px;
  align-items: center;
  width: 60vw;
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