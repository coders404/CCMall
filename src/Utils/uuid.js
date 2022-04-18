import { v4 as uuidv4 } from 'uuid'
export default () => {
    let uuid_token = localStorage.getItem('uuid')
    if (!uuid_token) {
        localStorage.setItem('uuid', uuidv4())
    }
    return uuid_token
}