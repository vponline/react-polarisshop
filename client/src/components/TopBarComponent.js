import React, { useState, useCallback } from "react"
import { TopBar } from "@shopify/polaris"

const TopBarComponent = () => {
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false)
  const [userMenuActive, setUserMenuActive] = useState(false)

  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  )

  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  )

  const userMenuActions = [
    {
      items: [
        { content: "Account Details" },
        { content: "Payment Information" },
        { content: "Order History" },
        { content: "Wishlist" },
      ],
    },
  ]

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="John Doe"
      detail="Personal Account"
      initials="JD"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  )

  return (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      // searchResultsVisible={searchActive}
      // searchField={searchFieldMarkup}
      // searchResults={searchResultsMarkup}
      // onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={toggleMobileNavigationActive}></TopBar>
  )
}

export default TopBarComponent
