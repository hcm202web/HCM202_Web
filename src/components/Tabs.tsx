import { FC } from 'react';
// import { useLocation } from 'react-router-dom';
import { TabsEnum } from '../constants';

interface TabsProps {
  tabNames: TabsEnum[];
  selectedTab: string;
  onTabClick: (tab: TabsEnum) => void;
}

const Tabs: FC<TabsProps> = ({ tabNames, onTabClick, selectedTab }) => {
  const handleTabClick = (tabName: TabsEnum) => {

    onTabClick(tabName);

  };

  return (
    <div className="bg-white rounded-lg p-[2px] md:p-1 mb-1 md:mb-2">
      <div className="flex flex-row p-[2px] underline-offset-8 relative overflow-hidden space-x-6">
        {tabNames.map((tabName) => (
          <button
            key={tabName}
            className="flex flex-col items-center  relative z-10"
            onClick={() => handleTabClick(tabName)}
          >
            <span
              className={`text-xs md:text-3xl py-1 mMI:py-[6px] ${selectedTab === tabName ? 'text-black underline' : ' text-[#A9A9A9]'
                }`}
            >
              {tabName}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
