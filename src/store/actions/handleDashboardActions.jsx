import type from '../type'
import { HTTP } from '../../api/index'

/**
 * types for reducer action
 */
const { SET_ALL_TODOS, SET_TODO, SET_TODO_LIST } = type
/**
 * @name handleSetOwners
 * @description redux action function passes payload and action for reducer
 * @param {Object} payload
 * @return {NUll} null
 */
const handleSetTodo = payload => ({
  type: SET_TODO,
  payload
})

/**
 * @name handleSetAllTodos
 * @description redux action function passes payload and action for reducer
 * @param {Object} payload
 * @return {NUll} null
 */
const handleSetAllTodos = payload => ({
  type: SET_ALL_TODOS,
  payload
})

/**
 * @name handleSetTodoList
 * @description redux action function passes payload and action for reducer
 * @param {Object} payload
 * @return {NUll} null
 */
const handleSetTodoList = payload => ({
  type: SET_TODO_LIST,
  payload
})

/**
 * @name handleUserLogin
 * @description  function handles user logins
 * @param {Object} data
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleFetchFilters = () => dispatch => {
  return HTTP.filterApi()
    .get(`/`)
    .then(res => {
      let result = res.data
      // dispatch(handleSetCats({data: result, paginationCount, paginationLimit, paginationPage}))
      return result
    })
    .catch(err => {
      console.log(err)
    })
}

/**
 * @name handleFilterRequest
 * @description  function fetches a filtered list for server
 * @param {Object} data
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleFilterRequest = data => dispatch => {
  return HTTP.baseApi()
    .post(`/carowners`,
      data
    )
    .then(res => {
      let result = res.data
      // dispatch(handleSetOwners(result.data))
      return result
    })
    .catch(err => {
      console.log(err)
    })
}

/**
 * @name handleSetSelectedTodo
 * @description  function handle setting a selected todo
 * @param {Null} null
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleSetSelectedTodo = (todo) => dispatch => {
  return dispatch(handleSetTodo(todo))
}
