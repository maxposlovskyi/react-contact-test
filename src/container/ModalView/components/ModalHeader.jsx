import React, { useCallback } from 'react';

const ModalHeader = (props) => {
  const {
    contact,
    search,
    option,
    onChangeQuery,
    onHandleEnter
  } = props;

  const onKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      onHandleEnter(e)
    }
  }, [onHandleEnter]);

  return (
    <div className="modal-header d-flex flex-column">
      {contact ? <h3>Contact Detail</h3>
               : <h3>{option === 'all' ? 'All' : 'US'} Contacts</h3>
      }
      {!contact &&
       <input
         type="text"
         className="form-control"
         value={search}
         onChange={onChangeQuery}
         onKeyPress={onKeyDown}
         placeholder="search..." />
      }
    </div>
  );
};

export default ModalHeader;