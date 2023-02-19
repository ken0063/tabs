import MyTabs from "@/components/MyTabs";
import { Box, Heading, TabPanel } from "@chakra-ui/react";

function Tab2(): JSX.Element {
  return (
    <MyTabs>
      <TabPanel>
        <Heading size="lg">Tab 2</Heading>
        <Box p="4">Tab 2 content goes here</Box>
      </TabPanel>
    </MyTabs>
  );
}

export default Tab2;
