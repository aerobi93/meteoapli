import React from 'react';
import './styles.scss';

const ChangeTown = ({ newValue, changeValue, searchCoordonate, changeDisplay }) => (
  <form
    className="form"
    onSubmit={(evt) => {
      evt.preventDefault();
      searchCoordonate(newValue);
      changeDisplay('displayForm');
      changeDisplay('loading');
    }}
  >
    <input type="text" className="form-input" value={newValue} placeholder="changer de ville" onChange={(evt) => changeValue(evt.target.value)} />
    <button type="submit" className="form-submit"> &#128269; </button>
  </form>
);
export default ChangeTown;
