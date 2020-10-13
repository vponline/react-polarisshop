import React, { useState, useCallback } from "react"
import { Link } from "react-router-dom"
import { TopBar, VisuallyHidden, Icon } from "@shopify/polaris"
import { HomeMajor } from "@shopify/polaris-icons"

const TopBarComponent = () => {
  const [userMenuActive, setUserMenuActive] = useState(false)
  // const [mobileNavigationActive, setMobileNavigationActive] = useState(false)
  // const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false)

  // const toggleIsSecondaryMenuOpen = useCallback(
  //   () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
  //   []
  // )

  // const toggleMobileNavigationActive = useCallback(
  //   () =>
  //     setMobileNavigationActive(
  //       (mobileNavigationActive) => !mobileNavigationActive
  //     ),
  //   []
  // )

  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  )

  const userMenuActions = [
    {
      items: [
        { content: "Shopping Cart" },
        { content: "Account Details" },
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

  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <Link to="/">
          <Icon className="home-icon" source={HomeMajor} />
          <VisuallyHidden>Home</VisuallyHidden>
        </Link>
      }
    />
  )

  return (
    <TopBar
      // showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      // searchResultsVisible={searchActive}
      // searchField={searchFieldMarkup}
      // searchResults={searchResultsMarkup}
      // onSearchResultsDismiss={handleSearchResultsDismiss}
      // onNavigationToggle={toggleMobileNavigationActive}
    ></TopBar>
  )
}

export default TopBarComponent
