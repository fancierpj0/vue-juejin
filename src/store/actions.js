import * as types from './mutation-types'

import store from '../common/store'
import { HOME_ROUTE_KEY } from '../common/const'

export const setRouteTransition = ({commit}, value) => {
  commit(types.SET_ROUTE_TRANSITION, value)
}

export const setHomeRoutes = ({commit}, value) => {
  commit(types.SET_HOME_ROUTES, value)
  store.set(HOME_ROUTE_KEY, value)
}