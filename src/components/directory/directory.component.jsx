import React from 'react';
import { DirectoryMenuContainer } from './directory.styles';

// Components
import MenuItem from '../menu-item/menu-item.component';

// Redux
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={ id } { ...otherSectionProps } />
      ))
    }
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);