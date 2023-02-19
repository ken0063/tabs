import { Tabs, TabList, Tab, Link, TabPanels } from "@chakra-ui/react";
import { ReactNode } from "react";

interface MyTabsProps {
  children: ReactNode;
}

function MyTabs({ children }: MyTabsProps): JSX.Element {
  return (
    <Tabs defaultIndex={0} isFitted>
      <TabList>
        <Tab>
          <Link href="/tabs/tab1">Tab 1</Link>
        </Tab>
        <Tab>
          <Link href="/tabs/tab2">Tab 2</Link>
        </Tab>
        <Tab>
          <Link href="/tabs/tab3">Tab 3</Link>
        </Tab>
      </TabList>
      <TabPanels>{children}</TabPanels>
    </Tabs>
  );
}

export default MyTabs;
