import HeaderUser from './HeaderUser';
import { HeaderUserListProps } from "../lib/types";

export const HeaderUserList: React.FC<HeaderUserListProps> = ({ users, canRemove = false }) => {
  if (users.length === 0) {
    return <div>No users yet</div>;
  }

  return (
    canRemove ? (
      <>
        {users.map((user, index) => (
          <HeaderUser
            key={user.id + ' ' + index}
            user={user}
            index={index}
            canRemove={canRemove}
          />
        ))}
      </>
    ) : (
      <>Users</>
    )
  );

};

export default HeaderUserList;
