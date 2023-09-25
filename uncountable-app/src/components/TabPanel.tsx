import { ReactNode } from "react";

interface ITabPanel {
  children?: JSX.Element;
  index: number;
  value: number;
}

const TabPanel = (props: ITabPanel) => {
  const { children, index, value } = props;

  return <>{value === index && <>{children}</>}</>;
};

export default TabPanel;
