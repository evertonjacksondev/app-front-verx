
import axios from 'axios'
import { UserDto } from '../dto/User-dto'



const instance = axios.create({
    baseURL: 'http://localhost:3333/v1',
})


export class UserRequest {


    async createUser(data: UserDto) {
        try {
            const response = await instance({
                method: 'post',
                url: '/users',
                data: data
            })

            return response
        } catch ({ response }: any) {
            throw response.data
        }
    }

    async listUserId(params: number) {
        try {
            const response = await instance({
                method: 'get',
                url: `/users/list/${params}`,
            })

            return response
        } catch (error) {
            return error
        }
    }

    async listAllUser() {
        try {
            const response = await instance({
                method: 'get',
                url: `/users/list`,
            })

            return response
        } catch (error) {
            return error
        }
    }

    async deleteUser(params: number) {
        try {
            const response = await instance({
                method: 'delete',
                url: `/users/list/${params}`,
            })

            return response
        } catch (error) {
            return error
        }
    }

    async editUser(data: UserDto, params: number) {
        try {
            const response = await instance({
                method: 'post',
                url: `/users/${params}`,
                data: data
            })

            return response
        } catch (error) {
            return error
        }
    }

}