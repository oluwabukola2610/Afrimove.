import { Button, ConfigProvider, Input } from "antd";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });
const primaryConfig = {
  fontFamily: archivo.style.fontFamily,
  colorPrimary: "#000000",
};

export const CustomButton = ({ ...props }) => (
  <ConfigProvider theme={{ token: { ...primaryConfig, borderRadius: 5 } }}>
    <Button {...props} />
  </ConfigProvider>
);
export const CustomPasswordInput = ({ ...props }) => (
  <ConfigProvider
    theme={{
      token: {
        ...primaryConfig,
      },
    }}
  >
    <Input.Password {...props} />
  </ConfigProvider>
);

export const CustomInput = ({ ...props }) => (
  <ConfigProvider
    theme={{
      token: { ...primaryConfig },
    }}
  >
    <Input {...props} />
  </ConfigProvider>
);