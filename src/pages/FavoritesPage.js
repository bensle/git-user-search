import User from '../components/User';

export default function FavoritePage({
  onToggleFavoriteUser,
  favoriteUser,
  fetchedFavoriteUser,
}) {
  return (
    <div>
      {fetchedFavoriteUser && fetchedFavoriteUser.length > 0 ? (
        fetchedFavoriteUser.map(fetchedUser => {
          return (
            <div key={fetchedUser.id}>
              <User
                user={fetchedUser}
                onToggleFavoriteUser={onToggleFavoriteUser}
                favoriteUser={favoriteUser}
              />
            </div>
          );
        })
      ) : (
        <h2>No Favorites set</h2>
      )}
    </div>
  );
}
