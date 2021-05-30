export interface LayoutState {
  collapsed: boolean
  isOnline: boolean
}

export default () => {
  const state = {
    collapsed: false,
    isOnline: false,
  }

  const mutations = {
    SET_COLLAPSED(state: LayoutState, type: boolean) {
      state.collapsed = type
    },
    SET_NET_STATUS(state: LayoutState, status: boolean) {
      state.isOnline = status
    },
  }

  const actions = {
    set_collapsed_status(context: any, args: boolean) {
      context.commit('SET_COLLAPSED', args)
    },
    set_net_status(context: any, args: boolean) {
      context.commit('SET_NET_STATUS', args)
    },
  }

  return {
    namespaced: true,
    state,
    mutations,
    actions,
  }
}
