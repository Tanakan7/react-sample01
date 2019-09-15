// @flow
import React from 'react';

type Props = {
  val: string,
}

type State = {
  foo: number,
}

class Flow extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      foo: 100,
    }
  }

  render() {
    return (
      <React.Fragment>
        <p>Flowコンポーネント</p>
        <p>{this.props.val}{this.state.foo}</p>
      </React.Fragment>
    );
  }
}

export default Flow
