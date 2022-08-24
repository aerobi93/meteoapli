import { connect } from 'react-redux';
import CardWeek from '../../components//ListCard/cardWeek';

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({
  meteoData: state.meteoData.daily,
  displayWeekEnd: state.displayWeekEnd,
  displayWeek: state.displayWeek,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardWeek);
