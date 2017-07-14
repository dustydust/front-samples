import React from "react";
import { withRouter } from "react-router";
import { HLayout, HLayoutItem } from "react-flexbox-layout";


const Dashboard = props => {
  return (
    <HLayout width="100%" gutter={7}>
      <HLayoutItem flexGrow={1}>
        {props.leftBar}
      </HLayoutItem>
      <HLayoutItem flexGrow={1}>
        {props.children}
      </HLayoutItem>
    </HLayout>
  );
};

export default Dashboard;
