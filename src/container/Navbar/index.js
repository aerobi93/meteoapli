import { connect } from 'react-redux';
import NavBar from 'src/components/Navbar';
import { changeDisplayCard, cardToSelect, changeDisplay } from 'src/action';

const mapDispatchToProps = (dispatch) => ({
  changeDisplayCard: (value) => {
    dispatch(changeDisplayCard(value));
  },
  cardToSelect: (value) => {
    dispatch(cardToSelect(value));
  },
  changeDisplay: (display, value) => {
    dispatch(changeDisplay(display, value));
  },
});

const mapStateToProps = (state) => ({
  displayCurrentDay: state.displayCurrentDay,
  displayTomorow: state.displayTomorow,
  displayWeek: state.displayWeek,
  displayWeekEnd: state.displayWeekEnd,
  displayHour: state.displayHour,
  meteoData: state.meteoData,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
