import { connect } from 'react-redux';
import Humidity from 'src/components/Detail/humidity';
import { searchInAllData } from 'src/util';

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
  displayCurrentDay: state.displayCurrentDay,
  displayWeek: state.displayWeek,
  displayWeekEnd: state.displayWeekEnd,
  displayHour: state.displayHour,
  displayTomorow: state.displayTomorow,
  meteoData: searchInAllData(state.meteoData, state.selectCard),

});

export default connect(mapStateToProps, mapDispatchToProps)(Humidity);
