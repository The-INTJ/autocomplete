import { HeaderUserProps } from "../lib/types";
import { useContext } from "react";
import { UserHeaderContext } from "../lib/UsersInHeaderContext";
import styles from "../styles/components/HeaderUser.module.scss";

const HeaderUser: React.FC<HeaderUserProps> = ({ user, index, canRemove }) => {
    const { removeUser } = useContext(UserHeaderContext);

    return (
        <div className={styles.userCard}>
            <br />
            <strong>{user.name}</strong>
            <button onClick={() => removeUser(index)}>Remove User</button>
        </div>
    );
};

export default HeaderUser;
