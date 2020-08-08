import axios from 'axios'

/**
 * @name
 * @description  function initates axios instances  and passes their default values
 * @type {{growthApi:{Promise<{axios: AxiosInstance<Function}>}}
 * @return {Object}
 */
export default (() => {
    const baseApi = () => {
        return axios.create({
            baseURL: 'http://localhost:5050/api/v1',
            headers: {
                Authorization: `Bearer ${''}`
            }
        })
    }
    return {
        baseApi
    }
})()