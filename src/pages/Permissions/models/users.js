import { getPermissionUsers } from '@/services/api';

export default {
  namespace: 'users',
  state: {
    data: {
      list: [],
      pagination: {},
    },
  },
  subscription: {},
  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(getPermissionUsers, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },
};
