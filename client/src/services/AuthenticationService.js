import Api from '@/services/apis'
export default {
    register(credentials) {
        return Api().post('register', credentials);
    }
}