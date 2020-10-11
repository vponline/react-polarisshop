import React from "react"
import { Route, Redirect } from "react-router-dom"

const AppRoute = (props) => {
  return <Route component={props.component} {...props}></Route>
}

export default AppRoute
