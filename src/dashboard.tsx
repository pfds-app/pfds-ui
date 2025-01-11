import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";

import { Layout } from "./layout";
import { LoginPage } from "./security/components";
import { AboutPage } from "./operations/about";
import { CreationPage } from "./operations/creation";
import { Calendar } from "./operations/calendar";
import { LedgerPage } from "./operations/ledger";
import { FitadiavamBolaPage } from "./operations/fitadiavam-bola";
import { ProfileEditPage } from "./operations/profile";
import { authProvider, dataProvider } from "./providers";
import { i18nProvider } from "./providers/i18n";
import { jfdsLightTheme } from "./themes";

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
      <Resource name="event" />
      <Resource name="responsability" />
      <Resource name="ledger" />
      <Resource name="operations" />
      <Resource name="payed-ticket" />
      <Resource name="staff" />
      <Resource name="ticket-status" />
      <Resource name="operation-result" />
      <Resource name="user" />

      <CustomRoutes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/creations" element={<CreationPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/ledger" element={<LedgerPage />} />
        <Route path="/fitadiavam-bola" element={<FitadiavamBolaPage />} />
        <Route path="/profiles" element={<ProfileEditPage />} />
      </CustomRoutes>
    </Admin>
  );
};
