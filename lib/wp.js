import axios from 'axios'

class WpApi {
    constructor (siteurl) {
        this.apiBase = siteurl
    }

    endorsements (options) {
        const params = {
            ...options
        }
        return axios.get(`${this.apiBase}/wp-json/wp/v2/endorsements`, { params })
        .then(json => {
            return { endorsements: json.data }
        })
        .catch(e => {
            return { error: e }
        })
    }

}

const wp = new WpApi('http://cms.fairsoftware.silo:8888')

export default wp
