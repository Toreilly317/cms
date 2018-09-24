import React, { Fragment, Component } from "react";
import styled from "styled-components";

import Layout from "../layout/Layout";

export default class AdminDashboard extends Component {
  state = {
    loading: false
  };

  render() {
    return <Layout />;
  }
}
