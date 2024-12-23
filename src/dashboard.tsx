import { Admin, Resource } from "react-admin";
import { dataProvider } from "./providers";
import { DUMMIES_UI } from "./operations/dummies";

export const Dashboard = () => {
  return (
    <Admin requireAuth={false} dataProvider={dataProvider}>
      <Resource name="dummies" {...DUMMIES_UI} />
    </Admin>
  );
};
