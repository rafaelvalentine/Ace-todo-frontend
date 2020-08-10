import swal from 'sweetalert'

/**
 * @name handleThenSuccess
 * @description  function handles success case axios calls
 * @param {Object} res
 * @param {Function} callback
 * @return {Object} returns the server object
 */
export const handleThenSuccess = (res, callback) => {
  let result = {}
  if (res.data) {
    result = res.data
  }
  const errorResult = {
    status: result.status || 500,
    errMessage: result.errMessage || 'Something went Wrong! No response from the server',
    message: '',
    data: null
  }

  if (!res) {
    swal('Ooops!', 'Something went Wrong! No response from the server ', 'error')
    return errorResult
  } else if (!result.status) {
    swal('Ooops!', `${result.errMessage || 'Something went Wrong! No response from the server'}`, 'error')
    return errorResult
  } else if (result.status !== 200) {
    swal('Ooops!', `${result.errMessage || 'Something went Wrong!'}`, 'error')
    return errorResult
  } else {
    // this sets localStorage for token (userToken) and _id (UserId)
    if (result.data && result.data.token) sessionStorage.setItem('token', result.data.token)
    if (result.data.user && result.data.user._id) sessionStorage.setItem('_id', result.data.user._id)
    if (typeof callback === 'function' && result.data !== null && result.data !== undefined) callback()
    return result
  }
}

/**
 * @name handleCatchError
 * @description  function handles error case axios calls
 * @param {Object} err
 * @return {Object} returns the error object
 */

export const handleCatchError = err => {
  console.log(err)
  return {
    status: 500,
    data: null,
    message: null,
    errMessage: `${err}` || 'Something went Wrong! No response from the server'
  }
}
/**
 *
 * @name ResolveAll
 * @description  function handles axios calls
 * @param {Array} [action=[]]
 * @param {String} [message=null]
 * @param {*} [initial=null]
 * @returns {Object}
 */
export const ResolveAll = async (action = [], message = null, initial = undefined) => {
  // console.log(value)
 
  if (message) {
    swal('Done!', message, 'success')
    return Promise.all(action)
  } else if (typeof initial === 'function') {
    console.log('object fired!')
    if (message) swal('Done!', message, 'success')
    return Promise.all(action)
      .then(results => {
        // Promise.all(action)
        if (typeof initial() === 'object') {
          return { ...initial(), results: results }
        }
        initial()
        return results
      })
      .catch(handleCatchError)
  } else if (typeof initial === 'object') {
    const value = await initial
    if (message) swal('Done!', message, 'success')

    return new Promise((resolve, reject) => {
      if (handleThenSuccess({ data: value }, null).status !== 200) {
        return reject(handleThenSuccess(initial, null))
      }
      Promise.all(action)
      return resolve(handleThenSuccess({ data: value }, null))
    })
  } else {
    return Promise.all(action)
  }
}
