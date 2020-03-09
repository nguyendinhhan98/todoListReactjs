import React, { Component } from "react";
import ResultList from "./ResultList";

class Result extends Component {
  render() {
    const tasks = this.props.tasks;
    const element = tasks.map((task, index) => {
      return (
        <ResultList
          key={task.id}
          index={index}
          task={task}
          onUpdateStatusList={this.props.onUpdateStatus}
          onDeleteResultList={this.props.onDeleteResult}
          onEditResultList={this.props.onEdit}
        />
      );
    });
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text_center">STT</th>
            <th className="text_center">Tên</th>
            <th className="text_center">Trạng Thái</th>
            <th className="text_center">Hành Động</th>
          </tr>
        </thead>
        <tbody>{element}</tbody>
      </table>
    );
  }
}

export default Result;
