import { Box, Heading, TabPanel } from "@chakra-ui/react";
import MyTabs from "@/components/MyTabs";

function Tab1(): JSX.Element {
  return (
    <MyTabs>
      <TabPanel>
        <Heading size="lg">Tab 1</Heading>
        <Box p="4">Tab 1 content goes here</Box>
      </TabPanel>
    </MyTabs>
  );
}

export default Tab1;
