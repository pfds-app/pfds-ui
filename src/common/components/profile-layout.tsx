import { FC, ReactNode } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { RestUser } from "@/gen/pfds-api-client";
import { FlexBox } from "./flex-box";
import { usePalette } from "../hooks";

const FieldLabel = ({ label }: { label: string }) => {
  const { textPrimaryColor } = usePalette();
  return (
    <Typography
      sx={{
        fontSize: "13px",
        mb: 1,
        color: textPrimaryColor,
        fontWeight: "bold",
      }}
    >
      {label}
    </Typography>
  );
};

const FieldValue = ({ value }: { value: string }) => {
  const { textSecondaryColor } = usePalette();
  return (
    <Typography sx={{ mb: 1, fontSize: "13px", color: textSecondaryColor }}>
      {value}
    </Typography>
  );
};

export const ProfileLayout: FC<{
  user: RestUser;
  actions: ReactNode;
}> = ({ user, actions }) => {
  const { bgcolor, textPrimaryColor } = usePalette();

  return (
    <FlexBox
      sx={{
        p: 5,
        width: "fit-content",
        alignItems: "stretch",
        gap: 2,
        borderRadius: "8px",
        bgcolor,
      }}
    >
      <FlexBox sx={{ gap: 2, alignItems: "start", justifyContent: "start" }}>
        <Avatar
          src={user.photo}
          alt={user.username}
          sx={{ width: "100px", height: "100px", border: "2px solid white" }}
        />
        <Box>
          <Typography
            variant="h2"
            sx={{
              color: textPrimaryColor,
              fontSize: "1.4rem",
            }}
          >
            {user.firstName + " " + user.lastName}
          </Typography>
          <Typography
            color="primary"
            sx={{ fontSize: "13px", display: "inline-flex", alignItems: "end" }}
          >
            <LocationOn />
            Nanisana, Antananarivo
          </Typography>
          <FlexBox sx={{ gap: 3, mt: 1, justifyContent: "start" }}>
            {actions}
          </FlexBox>
        </Box>
      </FlexBox>
      <Box sx={{ borderLeft: "1px solid rgba(0, 0, 0, .1)", pl: 2 }}>
        <FlexBox
          sx={{
            gap: 2,
            color: textPrimaryColor,
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Box>
            <FieldLabel label="Email" />
            <FieldLabel label="Username" />
            <FieldLabel label="Birthdate" />
          </Box>
          <Box>
            <FieldValue value={user.email} />
            <FieldValue value={user.username} />
            <FieldValue value={new Date(user.birthDate).toLocaleDateString()} />
          </Box>
        </FlexBox>
      </Box>
    </FlexBox>
  );
};
