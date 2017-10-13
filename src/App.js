import React, { Component } from 'react';
import './App.css';
import dummy from './dummy';
import InputText from './components/InputText';
import ImageList from './components/ImageList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummy,
      filtered: [],
      value: '',
    };
  }

  componentWillMount() {
    this.setState({ filtered: dummy });
  }

  render() {
    const { data } = this.state;
    const { filtered } = this.state;
    return (
      <div className="App">
      <div className="App-header">
      <h2>Images</h2>
      </div>
      <InputText onChange={ this.handleChange }/>
      <ImageList list={filtered}/>
      </div>
      );
  }

  handleChange = (username) => {
    const value = username.target.value.toLowerCase();
    this.setState({ value }, () => this.filterList());

  };

  filterList() {
    let data = this.state.data;
    let value = this.state.value;

    data = data.filter(function(image) {
      return image.username.toLowerCase().indexOf(value) != -1;
    });
    this.setState({ filtered: data });
  }


}

export default App;
