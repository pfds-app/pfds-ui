import { Admin, CustomRoutes, Resource } from "react-admin";

import { Layout } from "./layout";
import { LoginPage } from "./security/components";
import { ProfileShow } from "./operations/profiles";
import { authProvider, dataProvider } from "./providers";
import { i18nProvider } from "./providers/i18n";
import { pfdsLightTheme } from "./themes";
import { DUMMIES_UI } from "./operations/dummies";
import { Route } from "react-router-dom";
import { AboutPage } from "./operations/about";

export const Dashboard = () => {
  return (
    <Admin
      requireAuth
      layout={Layout}
      dashboard={ProfileShow}
      loginPage={<LoginPage />}
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      theme={pfdsLightTheme}
    >
      <Resource name="dummies" {...DUMMIES_UI} />
      <Resource name="profiles" />
      <CustomRoutes>
        <Route path="/about" element={<AboutPage />} />
      </CustomRoutes>
    </Admin>
  );
};
