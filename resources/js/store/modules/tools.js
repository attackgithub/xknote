import Vue from 'vue';

const types = {
  SET_SM_MODAL: 'SET_SM_MODAL',
  SET_LG_MODAL: 'SET_LG_MODAL',
  SET_LG_MODAL_DATA: 'SET_LG_MODAL_DATA',
  DEL_LG_MODAL_DATA: 'DEL_LG_MODAL_DATA',
  SET_FLOAT_MENU: 'SET_FLOAT_MENU',
  SET_SAVE_AND_CLOSE: 'SET_SAVE_AND_CLOSE'
};

const state = {
  smModal: {
    show: false,
    title: '',
    content: '',
    data: {},
    confirm: () => {},
    cancel: () => {}
  },
  lgModal: {
    show: false,
    title: '',
    content: '',
    data: {},
    confirm: () => {},
    cancel: () => {}
  },
  floatMenu: {
    show: false,
    items: [],
    data: {},
    saveAndClose: true
  }
};

const getters = {};

const actions = {
  showSmModal({ commit }, modal) {
    commit(types.SET_SM_MODAL, {
      ...modal,
      show: true
    });
  },
  hideSmModal({ commit }) {
    commit(types.SET_SM_MODAL, {
      show: false,
      title: '',
      content: '',
      data: {},
      confirm: () => {},
      cancel: () => {}
    });
  },
  showLgModal({ commit }, modal) {
    commit(types.SET_LG_MODAL, {
      ...modal,
      show: true
    });
  },
  hideLgModal({ commit }) {
    commit(types.SET_LG_MODAL, {
      show: false,
      title: '',
      content: '',
      data: {},
      confirm: () => {},
      cancel: () => {}
    });
  },
  setLgModalData({ commit }, data) {
    commit(types.SET_LG_MODAL_DATA, data);
  },
  delLgModalData({ commit }, index) {
    commit(types.DEL_LG_MODAL_DATA, index);
  },
  showFloatMenu({ commit }, menu) {
    commit(types.SET_FLOAT_MENU, { ...menu, show: true });
  },
  hideFloatMenu({ commit }) {
    commit(types.SET_FLOAT_MENU, { show: false });
  },
  setSaveAndClose({ commit }, saveAndClose) {
    commit(types.SET_SAVE_AND_CLOSE, saveAndClose);
  }
};

const mutations = {
  [types.SET_SM_MODAL](state, modal) {
    state.smModal = { ...state.smModal, ...modal };
  },
  [types.SET_LG_MODAL](state, modal) {
    state.lgModal = { ...state.lgModal, ...modal };
  },
  [types.SET_LG_MODAL_DATA](state, data) {
    state.lgModal.data = data;
  },
  [types.DEL_LG_MODAL_DATA](state, index) {
    // delete state.lgModal.data[index];
    Vue.delete(state.lgModal.data, index);
  },
  [types.SET_FLOAT_MENU](state, menu) {
    state.floatMenu = { ...state.floatMenu, ...menu };
  },
  [types.SET_SAVE_AND_CLOSE](state, saveAndClose) {
    state.floatMenu.saveAndClose = saveAndClose;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
