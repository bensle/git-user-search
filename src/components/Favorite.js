import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { MdOutlineFavorite } from 'react-icons/md';
import styled from 'styled-components';

export default function Favorite({
  favoriteUser,
  onToggleFavoriteUser,
  users,
}) {
  return (
    <>
      {favoriteUser.includes(users.login) ? (
        <FavoriteAdded onClick={() => onToggleFavoriteUser(users.login)} />
      ) : (
        <AddFavorite onClick={() => onToggleFavoriteUser(users.login)} />
      )}
    </>
  );
}

const FavoriteAdded = styled(MdOutlineFavorite)`
  /* background-color: transparent; */
  position: absolute;
  font-size: 2.2rem;
  color: red;
  right: 0;
  top: 0;
  padding: 5px;
`;
const AddFavorite = styled(MdOutlineFavoriteBorder)`
  /* background-color: transparent; */
  position: absolute;
  font-size: 2.2rem;
  color: red;
  right: 0;
  top: 0;
  padding: 5px;
`;
