import hosts from '../apis/hosts';
import visitors from '../apis/hosts';
import history from '../history';
import {
  CREATE_HOST,
  FETCH_HOSTS,
  FETCH_HOST,
  DELETE_VISITOR,
  VISIT_HOST,
  FETCH_VISITOR
} from './types';

export const createHost = formValues => async dispatch => {
  const response = await hosts.post('/hosts', { ...formValues });

  dispatch({ type: CREATE_HOST, payload: response.data });
  // navigation user back to root route
  history.push('/');
};

export const fetchHosts = () => async dispatch => {
  const response = await hosts.get('/hosts');

  dispatch({ type: FETCH_HOSTS, payload: response.data });
};

export const fetchHost = id => async dispatch => {
  const response = await hosts.get(`/hosts/${id}`);

  dispatch({ type: FETCH_HOST, payload: response.data });
};

export const visitHost = formValues => async dispatch => {
  const response = await visitors.post('/visitors', { ...formValues });
  dispatch({ type: VISIT_HOST, payload: response.data });
  history.push('/');
};

export const deleteVisitor = id => async dispatch => {
  await visitors.delete(`/visitors/${id}`);
  dispatch({ type: DELETE_VISITOR, payload: id });
  history.push('/');
};

export const fetchVisitor = id => async dispatch => {
  const response = await visitors.get(`/visitors/${id}`);

  dispatch({ type: FETCH_VISITOR, payload: response.data });
};
