import React from "react";
import { HLayout, HLayoutItem } from "react-flexbox-layout";

import Dashboard                      from "components/Dashboard"
import ClassroomsLeftBarContainer     from "components/Dashboard/Classrooms/ClassroomsLeftBarContainer";
import ClassroomSpotLight             from "components/SpotLight/Classroom";

class ClassroomsDashboardContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      selectedClassroom: "",
    };
  }

  render() {
    const spotlight = <ClassroomSpotLight classroom={this.state.selectedClassroom} />;
    const classroomsLeftBar = <ClassroomsLeftBarContainer
      entries={this.props.entries}
      onEntryClick={this._onEntryClick}
    />

    return (
      <Dashboard
        leftBar={classroomsLeftBar}
      >
        {this.state.selectedClassroom &&
          <div style={spotLightContainerStyle}>
            {spotlight}
          </div>
        }
      </Dashboard>
    );
  }

  _onEntryClick = (entry) => {
    this.setState({
      selectedClassroom: entry,
    })
  }

};

export default ClassroomsDashboardContainer;

const spotLightContainerStyle = {
  paddingTop: "105px",
  boxSizing: "border-box",
  height: "400px",
  width: "460px",
  marginLeft: "auto",
  backgroundImage: "linear-gradient(288deg, rgb(235, 244, 244) 50%, rgb(251, 253, 253) 45%, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 100%)",
};
