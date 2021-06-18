/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-06-18 10:20:44
 * @LastEditors: camus
 * @LastEditTime: 2021-06-18 10:23:47
 */
export default {
  namespace: "products",
  state: [],
  reducers: {
    delete(state, { payload: id }) {
      return state.filter((item) => item.id !== id);
    },
  },
};
