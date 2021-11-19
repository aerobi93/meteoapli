import { connect } from 'react-redux';
import Wind from 'src/components/Detail/wind';
import { searchInAllData } from 'src/util';
const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
  meteoData: searchInAllData(state.meteoData, state.selectCard),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wind);
