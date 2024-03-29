import { UserType } from "./lib/types";
import useUsers from "./lib/hooks/useUsers";
import { useContext, useState } from "react";
import AutocompleteWrapper from "./components/AutocompleteWrapper";
import UserInfo from "./components/UserInfo";
import Header from "./components/foundational/header/Header";
import styles from "./styles/foundational/App.module.scss";
import ViewSwitch from "./components/foundational/ViewSwitch";
import { UserHeaderContext } from "./lib/UsersInHeaderContext";
import About from "./components/About";
import HeaderUserList from "./components/HeaderUserList";
import WithUniqueId from "./components/HOCs/WithUniqueId";
import HeaderAbout from "./components/foundational/header/About";
import HeaderAutocomplete from "./components/foundational/header/Autocomplete";


function App() {
  const users: UserType[] = useUsers(); // lifted state to prevent API call on view switch
  const [selectedUser, setSelectedUser] = useState<UserType | undefined>(undefined);
  const [selectedView, setSelectedView] = useState<number>(1);
  const { users: headerUsers } = useContext(UserHeaderContext);

  // Overkill HOC demonstration
  const HeaderAboutWithUniqueId = WithUniqueId(HeaderAbout);
  const HeaderAutocompleteWithUniqueId = WithUniqueId(HeaderAutocomplete);

  return (
    <div className={styles.main}>
      <Header
        selected={selectedView}
        setSelected={setSelectedView} >
        <HeaderAboutWithUniqueId />
        <HeaderAutocompleteWithUniqueId />
        <HeaderUserList users={headerUsers} />
      </Header>
      <ViewSwitch index={selectedView}>
        <About />
        <div>
          <h1>Autocomplete field</h1>
          <AutocompleteWrapper onUserSelect={setSelectedUser} users={users} />
          <UserInfo user={selectedUser} />
        </div>
        <div>
          <h1>Users</h1>
          <HeaderUserList
            users={headerUsers}
            canRemove />
        </div>
      </ViewSwitch>
    </div>
  );
}

export default App;
