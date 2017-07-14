import React from "react";

import NavBar from "components/NavBar";
import StudentsDashboardContainer from "components/Dashboard/Students/StudentsDashboardContainer";

const students = [
  { _id: "1", firstName: "John", lastName: "Walker" },
  { _id: "2", firstName: "Lynda", lastName: "Dubovich" },
  { _id: "3", firstName: "Steven", lastName: "Gonsalez" },
  { _id: "4", firstName: "Micah", lastName: "Goulart" }
];

export default props => {
  return (
    <div>
      <NavBar />
      <StudentsDashboardContainer entries={students} />
    </div>
  );
};
