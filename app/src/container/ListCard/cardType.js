import { connect } from 'react-redux';
import CardType from '../../components/ListCard/cardType';
import { cardToSelect, changeDisplay} from '../../action';

const mapDispatchToProps = (dispatch) => ({
  cardToSelect: (value) => {
    dispatch(cardToSelect(value));
  },
  changeDisplay: (value) => {
    dispatch(changeDisplay(value));
  },
});

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CardType);
