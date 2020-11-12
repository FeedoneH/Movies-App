import React from 'react'
import { connect } from 'react-redux';
import { getAuthStatus } from '../store/auth';

const mapStateToProps = (state) => ({
    statuss: getAuthStatus(state),
  });
export const Community = connect(mapStateToProps)(({statuss}) => {
    return (<div>{!!statuss ? <div> helo</div> :<div> byeeeeee</div> }</div>)
});
