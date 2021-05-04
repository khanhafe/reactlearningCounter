import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    return (
      <div>
        {this.props.myctr}
        <br />
        <button onClick={this.props.onIncrement}>Add</button>
        <br />
        <button onClick={this.props.onDecrement}>Subtract</button>
      </div>
    );
  }
}

const mapStateToProps = (states) => {
  return { myctr: states.counter };
};

const mapDispatchToprops = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" })
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Counter);
