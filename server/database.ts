import { connect } from 'mongoose'

export const startConnection = async () => {
    try {
        await connect('mongodb://mongo:MeUVXuXjnzSQhxhBDDaoqyaMAXzipNhJ@monorail.proxy.rlwy.net:57833')
        console.log('Database is connected')
    } catch (error) {
        console.error(error)
    }
}