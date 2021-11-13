import { Component } from "react";

interface IState {
  name: string;
}
interface IProps {
  food?: string;
}

export default class CarClass extends Component<IProps, IState> {
  state = {
    name: "Klementin",
  };

  async componentDidMount() {
    // HTTP REQUESTS
    await Promise.resolve(
      this.setState({
        name: "Apelsin",
      })
    );
  }

  render() {
    const { food } = this.props;

    return (
      <h1
        onClick={() =>
          this.setState({
            name: "Updated Klementin",
          })
        }
      >
        Hello Class based component: {this.state.name} {food}
      </h1>
    );
  }
}
