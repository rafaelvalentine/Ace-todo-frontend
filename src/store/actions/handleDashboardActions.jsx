import { HTTP } from '../../api/index'
import { handleThenSuccess, handleCatchError } from '../../tools/Helpers/HTTP'
import type from '../type'

/**
 * types for reducer action
 */
const { SET_ALL_TODOS, SET_TODO, SET_TODO_LIST, SET_TASK_ID } = type
/**
 * @name handleSetTodo
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
 * @name handleSetTodoList
 * @description redux action function passes payload and action for reducer
 * @param {Object} payload
 * @return {NUll} null
 */
const handleSetTask = payload => ({
  type: SET_TASK_ID,
  payload
})







/**
 * @name handleUserLogin
 * @description  function handles user logins
 * @param {Object} data
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleCreateTask = data => dispatch => {
  return HTTP.baseApi()
    .post(`/task`, data)
    .then(res => handleThenSuccess(res, dispatch(handleSetTodo({ ...res.data.data }))))
    .catch(handleCatchError)
}

/**
 * @name handleFilterRequest
 * @description  function fetches a filtered list for server
 * @param {Object} data
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleFetchTasks = () => dispatch => {
  return HTTP.baseApi()
    .get(`/task`)
    .then(res => handleThenSuccess(res, dispatch(handleSetTodoList([ ...res.data.data ]))))
    .catch(handleCatchError)
}

/**
 * @name handlePatchTask
 * @description  function updates a task
 * @param {Object} id, title
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handlePatchTask = ({ id, title }) => dispatch => {
  return HTTP.baseApi()
    .patch(`/task/${id}`, { title })
    .then(res => handleThenSuccess(res, null))
    .catch(handleCatchError)
}


/**
 * @name handleDeleteTask
 * @description  function deletes a task
 * @param {String} id
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleDeleteTask = id => dispatch => {
  return HTTP.baseApi()
    .delete(`/task/${id}`)
    .then(res => handleThenSuccess(res, null))
    .catch(handleCatchError)
}
/**
 * @name handleCreateTodo
 * @description  function creates todos
 * @param {Object} data
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleCreateTodo = data => dispatch => {
  return HTTP.baseApi()
    .post(`/todo`, data)
    .then(res => handleThenSuccess(res, null))
    .catch(handleCatchError)
}

/**
 * @name handleFetchTodos
 * @description  function fetches todos
 * @param {String} id
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleFetchTodos = id => dispatch => {
  return HTTP.baseApi()
    .get(`/task/todos/${id}`)
    .then(res => handleThenSuccess(res, dispatch(handleSetAllTodos([ ...res.data.data ]))))
    .catch(handleCatchError)
}

/**
 * @name handlePatchTodo
 * @description  function updates a todo
 * @param {Object} data
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handlePatchTodo = data => dispatch => {
  const { id, completed, isImportant, text } = data
  return HTTP.baseApi()
    .patch(`/todo/${id}`, { completed, isImportant, text })
    .then(res => handleThenSuccess(res, null))
    .catch(handleCatchError)
}

/**
 * @name handleDeleteTodo
 * @description  function deletes a todo
 * @param {Object} data
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleDeleteTodo = id => dispatch => {
  return HTTP.baseApi()
    .delete(`/todo/${id}`)
    .then(res => handleThenSuccess(res, null))
    .catch(handleCatchError)
}

/**
 * @name handleSetSelectedTask
 * @description  function handle setting a selected task
 * @param {Null} null
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleSetSelectedTask = (task) => dispatch => {
  return dispatch(handleSetTask(task))
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
