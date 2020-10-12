import React, { useState, useCallback } from "react"
import { Frame } from "@shopify/polaris"
import TopBarComponent from "./TopBarComponent"
import NavigationComponent from "./NavigationComponent"

const FrameContainer = () => {
  return (
    <Frame
      topBar={<TopBarComponent />}
      navigation={<NavigationComponent />}></Frame>
  )
}

export default FrameContainer
