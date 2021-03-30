import React from 'react';
import {Spinner} from "react-bootstrap";


const Loader = () => {
  return (
    <Spinner
      animation="border"
    role="status"
    style={{height: "70px", width: "70px",margin: "auto", display:"block"}}>
      <span className="sr-only">Загрузка...</span>
    </Spinner>
  );
};

export default Loader;