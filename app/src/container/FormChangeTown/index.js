import { connect } from 'react-redux';
import ChangeTown from '../../components/FormChangeTown';

import  { changeValue, searchCoordonate, changeDisplay } from '../../action';

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value) => {
    dispatch(changeValue(value));
  },
  searchCoordonate: (value) => {
    dispatch(searchCoordonate(value));
  },
  changeDisplay: (value) => {
    dispatch(changeDisplay(value));
  },
});

const mapStateToProps = (state) => ({
  newValue: state.newValue,
  ListCoordonate: state.newCoordonate,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTown);
