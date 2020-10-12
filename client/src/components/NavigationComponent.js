import React, { useState, useCallback } from "react"
import { Link } from "react-router-dom"
import { Button, Popover, ActionList } from "@shopify/polaris"
import {} from "@shopify/polaris-icons"

const NavigationComponent = () => {
  const [popoverActive, setPopoverActive] = useState(false)

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  )

  const categories = (
    <Button onClick={togglePopoverActive} disclosure>
      Categories
    </Button>
  )
  return (
    <div className="nav">
      <Link to="/">
        <Button>Home</Button>{" "}
      </Link>
      <Link to="/products">
        <Button>All products</Button>{" "}
      </Link>
      <Popover
        active={popoverActive}
        activator={categories}
        onClose={togglePopoverActive}>
        <ActionList
          items={[
            {
              content: <Link to="/products">Mens Clothing</Link>,
            },
            { content: "Womens Clothing" },
            { content: "Electronics" },
            { content: "Jewelry" },
          ]}
        />
      </Popover>
      <Link to="/about">
        <Button>About Us</Button>{" "}
      </Link>
    </div>
  )
}

export default NavigationComponent
