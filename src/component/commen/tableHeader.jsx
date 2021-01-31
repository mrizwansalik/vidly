import React, { Component } from "react";

export default class TableHeader extends Component {
  raisSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path){
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";}
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  renderIcon = (column)=>{
    const {sortColumn } = this.props
    if(column.path !== sortColumn.path) return null;
    if(sortColumn.order === "asc") return <i className="fa fa-sort-asc" aria-hidden="true"></i>
    return <i className="fa fa-sort-desc" aria-hidden="true"></i>
  }
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => {
           return <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raisSort(column.path)}
            >
              {column.label} {this.renderIcon(column)}
            </th>;
          } )}
        </tr>
      </thead>
    );
  }
}
