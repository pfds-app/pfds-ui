import { Button, ButtonProps, useTranslate } from "react-admin";
import { Download } from "@mui/icons-material";
import useDownloader from "react-use-downloader";
import { FC } from "react";

import { Env } from "@/conf/env";
import { User, Whoami } from "@/gen/jfds-api-client";
import { toQrCodeValue } from "../utils/to-qrcode-value";
import { formatUserName } from "../utils/format-user-name";

export type DownloadQrCodeButtonProps = Partial<ButtonProps> & {
  user: Whoami | User;
};

const IMAGE_SIZE = 512;
const createGeneratorUrl = (user: Whoami | User) => {
  const data = toQrCodeValue(user);
  return `${Env.qrCodeGeneratorUrl}?data=${data}&size=${IMAGE_SIZE}x${IMAGE_SIZE}`;
};

export const DownloadQrCodeButton: FC<DownloadQrCodeButtonProps> = ({
  user,
  ...buttonProps
}) => {
  const translate = useTranslate();
  const { download, isInProgress } = useDownloader();

  const downloadQrCode = () => {
    const url = createGeneratorUrl(user);
    download(url, `${formatUserName(user)}-qrcode.png`);
  };

  return (
    <Button
      loading={isInProgress}
      disabled={isInProgress}
      size="small"
      variant="contained"
      label={translate("custom.common.download_qr_code")}
      startIcon={<Download />}
      onClick={downloadQrCode}
      {...buttonProps}
    />
  );
};
