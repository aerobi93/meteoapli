import { connect } from 'react-redux';
import Thermometer from 'src/components/Thermometer';

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
  temperature: state.meteoData.current.temp - 273.15,
});

export default connect(mapStateToProps, mapDispatchToProps)(Thermometer);
