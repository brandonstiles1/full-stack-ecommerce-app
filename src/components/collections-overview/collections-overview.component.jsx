import React from 'react';
import { CollectionsOverviewContainer } from './collections-overview.styles';

// Components
import CollectionPreview from '../collection-preview/collection-preview.component';

// Redux
import { connect } from 'react-redux';

// Selectorss
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={ id } { ...otherCollectionProps } />
      ))
    }
  </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);