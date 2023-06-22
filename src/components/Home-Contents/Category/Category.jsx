import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Avengers from './Avengers';
import Justices from './Justices';
import Transformers from './Transformers';

const Category = () => {

  const [activeTab, setActiveTab] = useState(0);
  
  return (
        
    <div className='container'>

      <Tabs 
        selectedIndex={activeTab} 
        onSelect={(index) => setActiveTab(index)}
      >
        <TabList className='text-center px-5'>
          <Tab selectedClassName='selected-tab rounded fw-bold'>Avengers</Tab>
          <Tab selectedClassName='selected-tab rounded fw-bold'>Justice League</Tab>
          <Tab selectedClassName='selected-tab rounded fw-bold'>Transformers</Tab>
        </TabList>

        <TabPanel>
          <Avengers></Avengers>
        </TabPanel>
        <TabPanel>
          <Justices></Justices>
        </TabPanel>
        <TabPanel>
          <Transformers></Transformers>
        </TabPanel>
      </Tabs>
              
    </div>
  );
};

export default Category;
