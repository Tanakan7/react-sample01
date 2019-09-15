// @flow
import React from 'react';

type Props = {
  val: string,
}

class Flow extends React.Component<Props> {
  // constructor(props: Props) {
  //   super(props);
  // }

  render() {
    return (
      <React.Fragment>
        <p>Flowコンポーネント</p>
        <p>{this.props.val}</p>
      </React.Fragment>
    );
  }
}

export default Flow
