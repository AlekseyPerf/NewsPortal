import { Flex, Typography } from "antd";

const SplitterDesc = ({ children }: React.PropsWithChildren) => (
  <Flex justify="center" align="top" style={{ height: "100%" }}>
    <Typography.Title
      type="secondary"
      level={5}
      style={{ whiteSpace: "nowrap" }}
    >
      {children}
    </Typography.Title>
  </Flex>
);

export default SplitterDesc;
