import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useRef, useState, useEffect } from "react";
import { RootTransition } from "./transition";
import { classNames } from "./common";

const TabsContainer = ({ tabNames, repodetails, reference }) => {
  const underlineRef = useRef(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineOffsetWidth, setUnderlineOffsetWidth] = useState(0);
  useEffect(() => {
    if (underlineRef.current) {
      setUnderlineOffsetWidth(underlineRef.current.offsetLeft);
      setUnderlineWidth(underlineRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="px-6 py-4 bg-white rounded h-full w-full">
      <TabGroup>
        <TabList className={"flex gap-3 relative text-sm font-medium"}>
          <div className="h-[1px] bg-gray-light absolute -inset-x-6 bottom-0"></div>
          {tabNames.map((tabName, index) => (
            <Tab
              ref={index === 0 ? underlineRef : null}
              onClick={(e) => {
                setUnderlineOffsetWidth(e.target.offsetLeft);
                setUnderlineWidth(e.target.offsetWidth);
              }}
              key={index}
              className={({ selected }) =>
                classNames(
                  "pb-3 uppercase focus:outline-none",
                  selected ? "text-black" : "border-transparent"
                )
              }
            >
              {tabName}
            </Tab>
          ))}
          <div
            style={{
              width: `${underlineWidth ? underlineWidth : 0}px`,
              transform: `translateX(${underlineOffsetWidth}px)`,
            }}
            className="block h-0.5 rounded-sm absolute bottom-0 bg-black transition-all duration-500"
          ></div>
        </TabList>
        <TabPanels className={"mt-4"}>
          <div>
            <RootTransition>
              <div>
              {repodetails.map((repo, index) => (
                <TabPanel key={index}>{repo}</TabPanel>
              ))}
              </div>
            </RootTransition>
          </div>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default TabsContainer;
