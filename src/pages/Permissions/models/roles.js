import { getPermissionRoles } from '@/services/api';

export default {
  namespace: 'roles',
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
      const response = yield call(getPermissionRoles, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },
};
