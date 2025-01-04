import { Admin, CustomRoutes, Resource } from "react-admin";

import { Layout } from "./layout";
import { LoginPage } from "./security/components";
import { ProfileShow } from "./operations/profiles";
import { authProvider, dataProvider } from "./providers";
import { i18nProvider } from "./providers/i18n";
import { jfdsLightTheme } from "./themes";
import { DUMMIES_UI } from "./operations/dummies";
import { Route } from "react-router-dom";
import { AboutPage } from "./operations/about";
import { CreationPage } from "./operations/creations";

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
      theme={jfdsLightTheme}
    >
      <Resource name="dummies" {...DUMMIES_UI} />
      <Resource name="profiles" />
      <Resource name="sacraments" />
      <CustomRoutes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/creations" element={<CreationPage />} />
      </CustomRoutes>
    </Admin>
  );
};
