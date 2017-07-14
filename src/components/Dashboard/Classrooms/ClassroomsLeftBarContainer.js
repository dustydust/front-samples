import React, { PropTypes } from 'react';
import { getClassroomAvatar } from 'utils/classroomAvatar';

import LeftBar from "components/Dashboard/LeftBar/";


class ClassroomsLeftBarContainer extends React.Component {

  static propTypes = {
    entries: PropTypes.array.isRequired,
  };

  render() {
    const entries = this.props.entries;

    return (
      <div>
        <LeftBar
          barHeader={"Classrooms"}
          entries={entries}
          getAvatar={getClassroomAvatar}
          onEntryClick={this.props.onEntryClick}
        />
      </div>
    )
  }

}

const BORDER = '1px solid #e3e9e8';

export default ClassroomsLeftBarContainer;
