import React from "react"

import { Card, Icon } from "@shopify/polaris"
import { Link } from "react-router-dom"
import { ChevronRightMinor } from "@shopify/polaris-icons"

const LandingBanner = () => {
  return (
    <div className="landing-container">
      <img
        src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        className="landing-banner"
      />
      <div className="landing-action">
        <Card sectioned title="Best selection of products">
          <Link
            className="landing-button"
            to="/products"
            style={{
              padding: "3px 8px",
              color: "orange",
              fontWeight: "500",
              border: "1px solid orange",
            }}>
            <span
              style={{
                display: "inline-block",
              }}>
              VIEW MORE
            </span>
            <Icon color="orange" source={ChevronRightMinor} />
          </Link>
        </Card>
      </div>
    </div>
  )
}

export default LandingBanner
