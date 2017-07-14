import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { HLayout, HLayoutItem, VLayout, VLayoutItem } from 'react-flexbox-layout';

import { fullName } from 'utils/name';

class DashboardLeftBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedId: "",
    };
  }

  static propTypes = {
    entries: PropTypes.array.isRequired,
  };

  render() {
    const entries = this.props.entries;

    return (
      <div>
        <h3 style={titleStyle}>{this.props.barHeader}</h3>
        {entries.map(entry => this._renderEntry(entry))}
      </div>
    )
  }

  _renderEntry = entry => {
    let activeBlockStyle = "";
    if (this.state.selectedId == entry._id) {
      activeBlockStyle = selectedEntryStyle;
    }

    if (entry.link) {
      return (
        <NavLink
          key={entry._id}
          to={entry.link}
          style={entryStyle}
          activeStyle={selectedEntryStyle}
        >
          {this._renderEntryBody(entry)}
        </NavLink>
      );
    } else {
      return (
        <div
          key={entry._id}
          style={{
            ...entryStyle,
            ...activeBlockStyle,
          }}
          onClick={() => this._onEntryClick(entry)}
        >
          {this._renderEntryBody(entry)}
        </div>
      )
    }
  }

  _renderEntryBody = entry => {
    const label = "";

    return (
      <HLayout key={entry._id} height="100%" alignItems="middle" gutter={7}>
        <div
          style={{
            ...entryAvatarStyle,
            backgroundImage: `url(${this.props.getAvatar(entry)})`,
          }}
        />
        <HLayoutItem flexGrow style={entryNameStyle}>
          <span>{fullName(entry) || entry.name}</span>
        </HLayoutItem>
        <span>{label}</span>
      </HLayout>
    );
  }

  _onEntryClick(entry) {
    this.setState({
      selectedId: entry._id,
    })
    this.props.onEntryClick(entry);
  }
}

const BORDER = '1px solid #e3e9e8';

const titleStyle = {
  fontWeight: "normal",
  fontSize: "17px",
  marginLeft: "1.1rem",
  color: "#8d8d8d",
};

const entryStyle = {
  borderBottom: BORDER,
  padding: "0.3rem 0.5rem",
  height: "4rem",
  fontSize: "1.1rem",
  display: "block",
  backgroundColor: "white",
  textDecoration: "none",
  color: "black",
  cursor: "pointer",
};

const selectedEntryStyle = {
  backgroundColor: "#f6fafb",
  backgroundImage: "linear-gradient(108deg, rgb(235, 244, 244) 50%, rgb(251, 253, 253) 45%, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 100%)",
  cursor: "default",
};

const entryNameStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const entryAvatarStyle = {
  height: "3rem",
  width: "3rem",
  margin: "0 0.6rem",
  borderRadius: "50%",
  backgroundSize: "cover",
};

export default DashboardLeftBar;
