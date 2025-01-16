import { TabPanel } from "@/common/components/tabs";
import { SigninPage } from "./signin-page";
import { AdminSignupPage } from "./admin-signup-page";
import { SigninByRolePage } from "./signin-by-role-page";
import { useTabManager } from "@/common/hooks";

const LOGIN_TABS = ["signin", "admin-signup", "by-role"];

export const Login = () => {
  const { tabIndex, handleTabChange } = useTabManager({
    tabParamName: "type",
    values: LOGIN_TABS,
  });

  return (
    <>
      <TabPanel currentIndex={tabIndex} index={0}>
        <SigninPage handleTabChange={handleTabChange} />
      </TabPanel>
      <TabPanel currentIndex={tabIndex} index={1}>
        <AdminSignupPage handleTabChange={handleTabChange} />
      </TabPanel>
      <TabPanel currentIndex={tabIndex} index={2}>
        <SigninByRolePage handleTabChange={handleTabChange} />
      </TabPanel>
    </>
  );
};
