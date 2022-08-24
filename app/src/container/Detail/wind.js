import { connect } from 'react-redux';
import Wind from '../../components/Detail/wind';
import { searchInAllData } from '../../util';
const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
  meteoData: searchInAllData(state.meteoData, state.selectCard),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wind);
