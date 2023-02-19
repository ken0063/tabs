import MyTabs from "@/components/MyTabs";
import { Box, Heading, TabPanel } from "@chakra-ui/react";

function Tab3(): JSX.Element {
  return (
    <MyTabs>
      <TabPanel>
        <Heading size="lg">Tab 3</Heading>
        <Box p="4">Tab 3 content goes here</Box>
      </TabPanel>
    </MyTabs>
  );
}

export default Tab3;
