import { Admin, Resource } from "react-admin";

import { LoginPage } from "./security/components";
import { authProvider, dataProvider } from "./providers";
import { DUMMIES_UI } from "./operations/dummies";

export const Dashboard = () => {
  return (
    <Admin
      requireAuth={true}
      authProvider={authProvider}
      dataProvider={dataProvider}
      loginPage={<LoginPage />}
    >
      <Resource name="dummies" {...DUMMIES_UI} />
    </Admin>
  );
};
