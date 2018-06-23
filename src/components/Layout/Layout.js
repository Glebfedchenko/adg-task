import React, { Fragment } from "react";
import People from "../People";
import Form from "../Form";
import Summary from "../Summary";
const Layout = () => {
  return (
    <Fragment>
      <Form />
      <People />
      <Summary />
    </Fragment>
  );
};

export default Layout;
