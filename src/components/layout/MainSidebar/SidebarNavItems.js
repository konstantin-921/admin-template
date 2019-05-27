import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";

class SidebarNavItems extends React.Component {

  render() {
    const items = [
      {
        htmlAfter: "",
        htmlBefore: '<i class="material-icons">edit</i>',
        title: "Blog Dashboard",
        to: "/",
      }
    ]
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}
        </Nav>
      </div>
    )
  }
}

export default SidebarNavItems;
