import React from "react";
import "./collection-overview.styles.scss";
import { selectCollectionToPreview } from "./../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CollectionPreview from "../../component/collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionToPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
