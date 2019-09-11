import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { buyItem } from '../actions';
import { connect } from 'react-redux';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={props.buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};



const mapStateToProps = state => {
  console.log('mSTP state:', state);
  return {
    store: state.store
  };
};

export default connect(
  mapStateToProps,
  { buyItem }
)(AdditionalFeatures);