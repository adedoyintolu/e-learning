/* eslint-disable */
import React, {
  Component, ElementType,
} from 'react';

type ImportComponent = () => (Promise<{ default: ElementType }>)

export interface IAsyncComponentState {
  component: ElementType | null
}

const asyncComponent = (importComponent: ImportComponent) => {
  class AsyncComponent extends Component<{}, IAsyncComponentState> {
    state: IAsyncComponentState = {
      component: null,
    };

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component,
      });
    }

    render() {
      const { component: Comp } = this.state;

      if (!Comp) return null;

      return (
        <Comp {...this.props} />
      );
    }
  }

  return AsyncComponent;
};

export { asyncComponent };