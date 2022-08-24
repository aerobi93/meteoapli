import { connect } from 'react-redux';
import Meteo from '../../components/Meteo';

import  {changeSize, searchCoordonate, changeDisplay} from '../../action';

const mapDispatchToProps = (dispatch) => ({
  changeSize: (value) => {
    dispatch(changeSize(value));
  },
  searchCoordonate: (value) => {
    dispatch(searchCoordonate(value));
  },
  changeDisplay: (display) => {
    dispatch(changeDisplay(display));
  },
});

const mapStateToProps = (state) => ({
  error: state.error,
  displayNavBar: state.displayNavBar,
  windowWidth: state.windowWidth,
  loading: state.loading,
  town: state.town,
  displayForm: state.displayForm,
  meteoData: state.meteoData,
  daySelected: state.daySelected,
  hourSelected: state.hourSelected,
});

export default connect(mapStateToProps, mapDispatchToProps)(Meteo);
