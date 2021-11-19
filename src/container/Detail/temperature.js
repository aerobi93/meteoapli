import { connect } from 'react-redux';
import Temperature from 'src/components/Detail/temperature';
import { searchInAllData } from 'src/util';
const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
  meteoData: searchInAllData(state.meteoData, state.selectCard),
  meteoHourly: state.meteoData.hourly,
});

export default connect(mapStateToProps, mapDispatchToProps)(Temperature);
