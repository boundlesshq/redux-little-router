import _compose from 'recompose/compose';
import { connect } from 'react-redux';


import { FragmentComponent, withIdAndContext } from '../../components/fragment';
import propsToJS from './props-to-js';

export default _compose(connect(function (state) {
  return {
    location: state.get('router')
  };
}), withIdAndContext)(propsToJS(FragmentComponent));