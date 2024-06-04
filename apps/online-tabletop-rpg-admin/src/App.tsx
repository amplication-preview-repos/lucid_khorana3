import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CharacterSheetList } from "./characterSheet/CharacterSheetList";
import { CharacterSheetCreate } from "./characterSheet/CharacterSheetCreate";
import { CharacterSheetEdit } from "./characterSheet/CharacterSheetEdit";
import { CharacterSheetShow } from "./characterSheet/CharacterSheetShow";
import { RoomList } from "./room/RoomList";
import { RoomCreate } from "./room/RoomCreate";
import { RoomEdit } from "./room/RoomEdit";
import { RoomShow } from "./room/RoomShow";
import { CombatGridList } from "./combatGrid/CombatGridList";
import { CombatGridCreate } from "./combatGrid/CombatGridCreate";
import { CombatGridEdit } from "./combatGrid/CombatGridEdit";
import { CombatGridShow } from "./combatGrid/CombatGridShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"OnlineTabletopRPG"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CharacterSheet"
          list={CharacterSheetList}
          edit={CharacterSheetEdit}
          create={CharacterSheetCreate}
          show={CharacterSheetShow}
        />
        <Resource
          name="Room"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          show={RoomShow}
        />
        <Resource
          name="CombatGrid"
          list={CombatGridList}
          edit={CombatGridEdit}
          create={CombatGridCreate}
          show={CombatGridShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
