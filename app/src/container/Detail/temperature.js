import { connect } from 'react-redux';
import Temperature from '../../components/Detail/temperature';
import { searchInAllData } from '../../util';
const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
  meteoData: searchInAllData(state.meteoData, state.selectCard),
  meteoHourly: state.meteoData.hourly,
});

export default connect(mapStateToProps, mapDispatchToProps)(Temperature);
