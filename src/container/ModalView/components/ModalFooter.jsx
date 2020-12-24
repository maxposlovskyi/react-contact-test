import React from 'react';

const ModalFooter = (props) => {
  const {
    contact,
    even,
    onChangeEven,
    navigate,
    closeModal
  } = props;

  return (
    <div className="modal-footer justify-content-between">
      <div className="align-items-start" style={contact && { visibility: 'hidden'}}>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkEven" checked={even} onChange={onChangeEven} />
          <label className="form-check-label" htmlFor="checkEven">
            Only Even
          </label>
        </div>
      </div>
      <div>
        <button className="btn btn-primary btn-a btn-sm mx-2" onClick={() => navigate('all')}>All Contacts</button>
        <button className="btn btn-primary btn-b btn-sm mx-2" onClick={() => navigate('us')}>US Contacts</button>
        <button className="btn btn-danger btn-c btn-sm mx-2" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default ModalFooter;