import { CgUnavailable } from 'react-icons/cg';
import styled from 'styled-components';

import Favorite from './Favorite';

export default function Details({ user, onToggleFavoriteUser, favoriteUser }) {
  return (
    <UserDetailsWrapper>
      <UserWrapper>
        <Favorite
          onToggleFavoriteUser={onToggleFavoriteUser}
          favoriteUser={favoriteUser}
          users={user}
        />
        <UserImage src={user.avatar_url} alt="User Profile Picture" />
        <StyledHeading>{user.login}</StyledHeading>
      </UserWrapper>

      <DetailsList>
        <DetailsListItem>
          <h4>Link:</h4>
          <DetailsLink href={user.html_url} target="_blank" rel="noreferrer">
            {user.login} on Github
          </DetailsLink>
        </DetailsListItem>
        <DetailsListItem>
          <h4>Location:</h4>
          {user.location === null ? (
            <NotAvailableIcon />
          ) : (
            <p>{user.location}</p>
          )}
        </DetailsListItem>
        <DetailsListItem>
          <h4>Contact:</h4>
          {user.email === null ? (
            <NotAvailableIcon />
          ) : (
            <DetailsLink href={`mailto:${user.email}`}>E-Mail</DetailsLink>
          )}
        </DetailsListItem>
        <DetailsListItem>
          <h4>Location:</h4>
          {user.email === null ? (
            <NotAvailableIcon />
          ) : (
            <DetailsLink href={`mailto:${user.email}`}>E-Mail</DetailsLink>
          )}
        </DetailsListItem>

        <DetailsListItem>
          <h4>Followers:</h4>
          {user.followers === null ? (
            <NotAvailableIcon />
          ) : (
            <p>{user.followers}</p>
          )}
        </DetailsListItem>

        <DetailsListItem>
          <h4>Following:</h4>
          {user.following === null ? (
            <NotAvailableIcon />
          ) : (
            <p>{user.following}</p>
          )}
        </DetailsListItem>
        <DetailsListItem>
          <h4>Company:</h4>
          {user.company === null ? <NotAvailableIcon /> : <p>{user.company}</p>}
        </DetailsListItem>
        <DetailsListItem>
          <h4>Public Repos:</h4>
          {user.public_repos === null ? (
            <NotAvailableIcon />
          ) : (
            <p>{user.public_repos}</p>
          )}
        </DetailsListItem>
        <DetailsListItem>
          <h4>Created at:</h4>
          {user.created_at === null ? (
            <NotAvailableIcon />
          ) : (
            <p>{user.created_at}</p>
          )}
        </DetailsListItem>
      </DetailsList>
    </UserDetailsWrapper>
  );
}
const UserDetailsWrapper = styled.div`
  display: grid;
  justify-content: center;
`;
const UserWrapper = styled.div`
  position: relative;
  top: 0;
  padding: 10px;
`;
const DetailsList = styled.ul`
  margin-top: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
const DetailsListItem = styled.li``;

const DetailsLink = styled.a`
  color: white;
`;
const StyledHeading = styled.h2`
  text-align: center;
  font-size: 1rem;
`;
const UserImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const NotAvailableIcon = styled(CgUnavailable)`
  color: red;
`;
