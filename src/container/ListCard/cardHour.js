import { connect } from 'react-redux';
import CardHour from 'src/components/ListCard/cardHour';

import { selectHour, selectDay} from 'src/action';

const mapDispatchToProps = (dispatch) => ({
  selectHour: (value) => {
    dispatch(selectHour(value));
  },
  selectDay: (value) => {
    dispatch(selectDay(value));
  },
});

const mapStateToProps = (state) => ({
  displayHour: state.displayHour,
  displayTomorow: state.displayTomorow,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardHour);
