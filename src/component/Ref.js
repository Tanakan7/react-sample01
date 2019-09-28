import React from 'react';

class Ref extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    console.log('クリックされたコンポーネントのDOM→', this.myRef.current);
  }

  render() {
    return (
      <React.Fragment>
        <p ref={this.myRef}>Refコンポーネント: {this.props.val}</p>
        <button onClick={this._handleClick}>Refボタン</button>
      </React.Fragment>
    );
  }
}

export default Ref
