import React from "react";
//import SHOP_DATA from "../../redux/shop/shop.data";
// import CollectionPreview from "../../component/collection-preview/collection-preview.component";
// import { selectShopItems } from "./../../redux/shop/shop.selectors";
// import { createStructuredSelector } from "reselect";
// import { connect } from "react-redux";
import CollectionOverview from "../../component/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../category/collection.component";
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectShopItems,
// });
// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;

//! Past code
/* {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })} */
