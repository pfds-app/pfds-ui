import { Scanner } from "@yudiel/react-qr-scanner";

export const PresencePage = () => {
  return <Scanner onScan={(data) => console.log(data)} />;
};
