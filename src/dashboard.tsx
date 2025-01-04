import { Admin, CustomRoutes, Resource } from "react-admin";

import { Layout } from "./layout";
import { LoginPage } from "./security/components";
import { authProvider, dataProvider } from "./providers";
import { i18nProvider } from "./providers/i18n";
import { jfdsLightTheme } from "./themes";
import { Route } from "react-router-dom";
import { AboutPage } from "./operations/about";
import { CreationPage } from "./operations/creation";

export const Dashboard = () => {
  return (
    <Admin
      requireAuth
      layout={Layout}
      dashboard={AboutPage}
      loginPage={<LoginPage />}
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      theme={jfdsLightTheme}
    >
      <Resource name="profile" />
      <Resource name="sacrament" />
      <Resource name="region" />
      <Resource name="assocation" />
      <Resource name="committee" />

      <CustomRoutes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/creations" element={<CreationPage />} />
      </CustomRoutes>
    </Admin>
  );
};
