import React from "react"
import { Navigation } from "@shopify/polaris"

const NavigationSideBar = () => {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: "Back to Shop",
            // icon: ArrowLeftMinor,
          },
        ]}
      />
      <Navigation.Section
        separator
        title="Polaris Shop"
        items={[
          {
            label: "Dashboard",
            // icon: HomeMajor,
            // onClick: toggleIsLoading,
          },
          {
            label: "Products",
            // icon: OrdersMajor,
            // onClick: toggleIsLoading,
          },
        ]}
        action={{
          //   icon: ConversationMinor,
          accessibilityLabel: "Contact support",
          //   onClick: toggleModalActive,
        }}
      />
    </Navigation>
  )
}

export default NavigationSideBar
