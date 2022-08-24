import { connect } from 'react-redux';
import Prevision from '../../components/Detail/prevision';
import { searchInAllData  } from "../../util";

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
  displayCurrentDay: state.displayCurrentDay,
  displayWeek: state.displayWeek,
  meteoData: searchInAllData(state.meteoData, state.selectCard),
  meteoDaily: state.meteoData.daily,
});

export default connect(mapStateToProps, mapDispatchToProps)(Prevision);
