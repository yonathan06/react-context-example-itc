import React from "react";
import './styles.css';
import ThirdFormChild from "./components/ThirdChild";

export default function SecondChild(props) {
  const { onSubmit, loadingAddUser } = props;
  return (
    <div className="wrapper">
      <h2>Second Child</h2>
      <ThirdFormChild onSubmit={onSubmit} loadingAddUser={loadingAddUser} />
    </div>
  )
}