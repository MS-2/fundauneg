import React, { FunctionComponent } from "react";
import Tabs from "./tabs";

type Tab = {
  label: string;
  content: {
    imgUrl: string;
    title: string;
    description: string;
  }[];
};

export type TabsArray = Tab[];

type ContentProps = {
  filter: string;
  tabs: TabsArray
}


const Content: FunctionComponent<ContentProps> = ({ filter, tabs }) => {
  return (
    <section
      id="content_section"
      className="text-gray-400 bg-gray-900 body-font"
    >
      <div className="container px-5 py-16 mx-auto">
        <Tabs tabs={tabs} filter={filter} />
      </div>
    </section>
  );
};

export default Content;


