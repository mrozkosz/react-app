import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from 'store/usersReducer';

const Twitters = ({ value, add, del }) => {
  const test = () => {
    add(2);
  };

  return (
    <>
      <div>{value}</div>
      <button onClick={test}>+</button>
      <button onClick={del}>-</button>
    </>
  );
};

Twitters.defaultProps = {
  value: 0,
};

const mapDispatchToProps = dispatch => ({
  add: payload => dispatch(increment(payload)),
  del: () => dispatch(decrement()),
});

const mapStateToProps = (state) => {
  const { value } = state.users;
  return { value };
};

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);
