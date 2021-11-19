import { connect } from 'react-redux';
import ListCard from 'src/components/ListCard';

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
  displayCurrentDay: state.displayCurrentDay,
  displayWeek: state.displayWeek,
  displayWeekEnd: state.displayWeekEnd,
  displayHour: state.displayHour,
  displayTomorow: state.displayTomorow,
  meteoData: state.meteoData,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCard);
