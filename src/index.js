import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import '../presidentData';
import PresidentList from '../src/components/PresidentList';

ReactDOM.render(<PresidentList presidentData={_presidentData}/>, document.getElementById("index"));
