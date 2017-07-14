import React, { PropTypes } from 'react';
import { getStudentAvatar } from 'utils/studentAvatar';

import LeftBar from "components/Dashboard/LeftBar/";


class StudentsLeftBarContainer extends React.Component {

  static propTypes = {
    entries: PropTypes.array.isRequired,
  };

  render() {
    let entries = this.props.entries;
    entries = entries.map(entry => {
      entry.link = `/students/${entry._id}`;
      return entry;
    });

    return (
      <div>
        <LeftBar
          barHeader={"Students"}
          entries={entries}
          getAvatar={getStudentAvatar}
        />
      </div>
    )
  }

}

const BORDER = '1px solid #e3e9e8';

export default StudentsLeftBarContainer;
