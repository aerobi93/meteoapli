import { connect } from 'react-redux';
import DetailDay from 'src/components/Detail';
import { changeDisplay } from 'src/action';

const mapDispatchToProps = (dispatch) => ({
  changeDisplay: (value) => {
    dispatch(changeDisplay(value));
  },
});

const mapStateToProps = (state) => ({
  displayTomorow: state.displayTomorow,
  displayHour: state.displayHour,
  displaySunrise: state.displaySunrise,
  windowWidth: state.windowWidth,
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailDay);
