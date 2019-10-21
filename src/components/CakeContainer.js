import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from './../redux';

function CakeContainer({ numOfCakes, buyCake }) {
  // console.log('props', props);
  return (
    <div>
      <h2 className="text-center">Number of cakes {numOfCakes}</h2>
      <button onClick={buyCake} className="btn btn-primary">
        Buy Cake
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  //console.log('state ==', state);
  return {
    numOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CakeContainer);
