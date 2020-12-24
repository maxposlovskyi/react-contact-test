import React, { useEffect, useState, useRef, useCallback } from 'react';
import {useParams, useHistory, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getContacts, initContact, setFilterEven} from "../../store/contact/action";
import PageComponent from "./ModalView";
import {evenSelector, getContactData, getPages, isLoadingSelector} from "../../store/contact/selector";

function ModalView() {
  const { option } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [contact, setContact] = useState(null)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const contacts = useSelector(getContactData);
  const pages = useSelector(getPages)
  const isLoading = useSelector(isLoadingSelector)
  const even = useSelector(evenSelector)

  let bottomBoundaryRef = useRef(null);

  const closeModal = useCallback(e => {
    e.stopPropagation();
    if (contact) {
      setContact(null)
    } else {
      history.goBack();
    }
  }, [contact, history]);

  const navigate = useCallback((path) => {
    if (contact) {
      setContact(null)
    }
    if (path === option) return
    dispatch(initContact())
    setPage(1)
    history.replace(`/contacts/${path}`, { background: location.state.background })
  }, [contact, option, history, location, dispatch])

  const scrollObserver = useCallback(
      node => {
        new IntersectionObserver(entries => {
          entries.forEach(en => {
            if (en.intersectionRatio > 0 && pages !== 0 && pages > page && !isLoading) {
              setPage(page + 1)
            }
          });
        }).observe(node);
      },
      [page, pages, isLoading]
  );

  const onChangeEven = useCallback((e) => {
    dispatch(setFilterEven(e.target.checked))
  }, [dispatch])

  const onChangeQuery = useCallback((e) => {
    e.preventDefault();
    setSearch(e.target.value)
    setPage(1)
  }, [])

  const onHandleEnter = useCallback(() => setQuery(search), [search])

  const onClickRow = useCallback((row) => setContact(row), [])

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (!isLoading) setQuery(search)
    }, 2000);
    return () => clearTimeout(timeOutId);
  }, [search, isLoading]);

  useEffect(() => {
    if (option === 'all') {
      dispatch(getContacts(page, query))
    } else if (option === 'us') {
      dispatch(getContacts(page, query, '226'))
    }
  }, [option, page, query, dispatch]);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
      dispatch(initContact())
    };
  }, [dispatch]);

  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);
  return (
      <PageComponent
        ref={bottomBoundaryRef}
        option={option}
        contact={contact}
        search={search}
        contacts={contacts}
        even={even}
        isLoading={isLoading}
        onChangeQuery={onChangeQuery}
        onClickRow={onClickRow}
        onChangeEven={onChangeEven}
        navigate={navigate}
        closeModal={closeModal}
        onHandleEnter={onHandleEnter}
      />
  );
}

export default ModalView;
