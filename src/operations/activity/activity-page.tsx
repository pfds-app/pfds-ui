import { ListAndCreateLayout, WithLayoutPadding } from "@/common/components";
import { ActivityCreate } from "./activity-create";
import { ActivityList } from "./activity-list";

export const ActivityPage = () => {
  return (
    <WithLayoutPadding sx={{ p: 2 }}>
      <ListAndCreateLayout>
        <ActivityCreate />
        <ActivityList />
      </ListAndCreateLayout>
    </WithLayoutPadding>
  );
};
