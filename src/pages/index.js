import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";

import {rhythm} from "../utils/typography";

import GameStart from "../components/GameStart";

export default () => (
  <div>
    <Helmet title={`Welcome to Russell Schmidt's home on the internet`}/>
    <h1>Welcome</h1>
    <GameStart />
  </div>
);
