import { connect } from 'react-redux';
import CardWeek from 'src/components/ListCard/cardWeek';

import { selectHour, selectDay} from 'src/action'

const mapDispatchToProps = (dispatch) => ({
  selectHour: (value) => {
    dispatch(selectHour(value));
  },
  selectDay: (value) => {
    dispatch(selectDay(value));
  },
});

const mapStateToProps = (state) => ({
  meteoData: state.meteoData.daily,
  displayWeekEnd: state.displayWeekEnd,
  displayWeek: state.displayWeek,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardWeek);
