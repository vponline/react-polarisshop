import React, { useState, useCallback } from "react"
import { Frame } from "@shopify/polaris"
import TopBarComponent from "./TopBarComponent"

const FrameContainer = () => {
  return <Frame topBar={<TopBarComponent />}></Frame>
}

export default FrameContainer
