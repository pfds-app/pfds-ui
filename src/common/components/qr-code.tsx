import { User, Whoami } from "@/gen/jfds-api-client";
import QRCode from "react-qr-code";
import { FlexBox } from "./flex-box";
import { toQrCodeValue } from "../utils/to-qrcode-value";

export const QrCodeBox = ({ user }: { user: User | Whoami }) => {
  return (
    <FlexBox sx={{ flexDirection: "column", gap: 1 }}>
      <QRCode
        size={80}
        style={{
          height: "auto",
          marginLeft: "auto",
          maxWidth: "100%",
          width: "100%",
        }}
        value={toQrCodeValue(user)}
        viewBox={`0 0 256 256`}
      />
    </FlexBox>
  );
};
