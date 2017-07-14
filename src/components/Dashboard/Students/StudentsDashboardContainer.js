import React from "react";
import { withRouter } from "react-router";
import { HLayout, HLayoutItem } from "react-flexbox-layout";

import Dashboard                  from "components/Dashboard"
import StudentsLeftBarContainer   from "components/Dashboard/Students/StudentsLeftBarContainer";
import StudentSpotLight           from "components/SpotLight/Student";

const StudentsDashboardContainer = props => {
  let spotlight;
  let selectedStudentid;
  let studentsLeftBar;

  if (props.match.params && props.match.params.studentId) {
    selectedStudentid = props.match.params.studentId;
    const spotlightedStudent = props.entries.find(
      student => student._id == selectedStudentid
    );
    spotlight = <StudentSpotLight student={spotlightedStudent} />;
  }

  studentsLeftBar = <StudentsLeftBarContainer entries={props.entries} />;

  return (
    <Dashboard
      leftBar={studentsLeftBar}
    >
      {selectedStudentid &&
        <div style={spotLightContainerStyle}>
          {spotlight}
        </div>
      }
    </Dashboard>
  );
};

export default withRouter(StudentsDashboardContainer);

const spotLightContainerStyle = {
  paddingTop: "105px",
  boxSizing: "border-box",
  height: "400px",
  width: "460px",
  marginLeft: "auto",
  backgroundImage: "linear-gradient(288deg, rgb(235, 244, 244) 50%, rgb(251, 253, 253) 45%, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 100%)",
};
