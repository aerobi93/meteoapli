import { connect } from 'react-redux';
import CardHour from '../../components/ListCard/cardHour';

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({
  displayHour: state.displayHour,
  displayTomorow: state.displayTomorow,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardHour);
