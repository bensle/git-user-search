import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';

export default function SearchBar() {
  return (
    <>
      <SearchLabelSR htmlFor="usersearch">Enter GitHub-Username</SearchLabelSR>
      <SearchBarWrapper>
        <SearchInput
          type="text"
          name="usersearch"
          id="usersearch"
        ></SearchInput>
        <SearchIcon />
      </SearchBarWrapper>
    </>
  );
}

const SearchBarWrapper = styled.section`
  display: flex;
  border: 2px solid white;
  padding: 0.5rem;
  border-radius: 10px;
  align-items: center;
  width: 60vw;
  margin-top: 1rem;
`;

const SearchIcon = styled(MdSearch)`
  font-size: 2rem;
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
  font-size: 1.5rem;
  color: var(--textcolor);
  padding: 10px;
`;
