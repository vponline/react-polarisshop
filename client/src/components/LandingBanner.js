import React from "react"
import { Card, Button } from "@shopify/polaris"
import { Link } from "react-router-dom"
import BannerImg from "./img/landing-banner.png"

const LandingBanner = () => {
  return (
    <div className="landing-container">
      <img src={BannerImg} className="landing-banner" />
      <div className="landing-action">
        <Card sectioned title="Best selection of products!">
          <Link to="/products">
            <Button>Browse all products</Button>
          </Link>
        </Card>
      </div>
    </div>
  )
}

export default LandingBanner
