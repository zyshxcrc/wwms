import { getPermissionResources } from '@/services/api';

export default {
  namespace: 'resources',
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
      const response = yield call(getPermissionResources, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },
};
