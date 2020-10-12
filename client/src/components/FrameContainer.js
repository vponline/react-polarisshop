import React, { useState, useCallback } from "react"
import { Frame } from "@shopify/polaris"
import TopBarComponent from "./TopBarComponent"
import NavigationComponent from "./NavigationComponent"
import NavigationSideBar from "./NavigationSideBar"

const FrameContainer = () => {
  return (
    <Frame
      topBar={<TopBarComponent />}
      navigation={<NavigationSideBar />}></Frame>
  )
}

export default FrameContainer
