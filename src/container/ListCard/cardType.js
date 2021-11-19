import { connect } from 'react-redux';
import CardType from 'src/components/ListCard/cardType';
import { cardToSelect, changeDisplay} from 'src/action';

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
