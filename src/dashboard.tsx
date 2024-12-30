import { Admin, Resource } from "react-admin";

import { LoginPage } from "./security/components";
import { authProvider, dataProvider } from "./providers";
import { i18nProvider } from "./providers/i18n";
import { pfdsDarkTheme, pfdsLightTheme } from "./themes";
import { DUMMIES_UI } from "./operations/dummies";

export const Dashboard = () => {
  return (
    <Admin
      requireAuth
      loginPage={<LoginPage />}
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      darkTheme={pfdsDarkTheme}
      lightTheme={pfdsLightTheme}
    >
      <Resource name="dummies" {...DUMMIES_UI} />
      <Resource name="profiles" {...DUMMIES_UI} />
    </Admin>
  );
};
