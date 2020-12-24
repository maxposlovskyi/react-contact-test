import React, { forwardRef, useMemo } from 'react';
import {CustomScrollbar, CustomTable} from "../../component";
import ContactDetail from './components/ContactDetail';
import ModalFooter from './components/ModalFooter';
import ModalHeader from './components/ModalHeader';

const headers = ['ID', 'Name', 'Phone'];

const ModalViewComponent = forwardRef((props, ref) => {
  const {
    option,
    contact,
    search,
    contacts,
    even,
    isLoading,
    onChangeQuery,
    onClickRow,
    onChangeEven,
    navigate,
    closeModal,
    onHandleEnter
  } = props;

  const renderRow = useMemo(() => (item, index) => (
    <tr key={`contact-table-row-${index}`} className="cursor-pointer" onClick={() => onClickRow(item)}>
      <th scope="row">{item.id}</th>
      <td>{item.first_name + " " + item.last_name}</td>
      <td>{item.phone_number}</td>
    </tr>
  ), [onClickRow]);

  return (
    <div className="modal-container">
      <div className="modal-content">
        <ModalHeader
          option={option}
          contact={contact}
          search={search}
          onChangeQuery={onChangeQuery}
          onHandleEnter={onHandleEnter}
        />
        <div className="modal-body">
          {contact ? <ContactDetail contact={contact} />
          : (
            <CustomScrollbar>
              <CustomTable
                  headers={headers}
                  data={contacts}
                  renderRow={renderRow}
              />
              {!isLoading && <div id='page-bottom-boundary' style={{ border: '1px solid white' }}  ref={ref} />}
            </CustomScrollbar>
          )}
        </div>
        <ModalFooter
          contact={contact}
          even={even}
          onChangeEven={onChangeEven}
          navigate={navigate}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
});

export default ModalViewComponent;
