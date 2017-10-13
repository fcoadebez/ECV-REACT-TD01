import React, { Component } from 'react';
import Image from './Image';

class ImageList extends Component {

  render() {
    return (
      <div className="ImageList">
      {this.renderImages()}
      </div>
      );
  }

  renderImages = () => {
    const { list } = this.props;
    return list.map((image) => {
      if (!localStorage.getItem(image.id)) {
        return (<Image id={image.id} src={image.picture} username={image.username} key={image.id}/>)
      }
    });
  };
}

export default ImageList;