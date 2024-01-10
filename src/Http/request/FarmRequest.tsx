
import axios from 'axios'
import { FarmDto } from '../dto/Farm-dto'

const instance = axios.create({
    baseURL: 'http://localhost:3333/v1',
})


export class FarmRequest {


    async createFarm(data: FarmDto) {
        try {
            const response = await instance({
                method: 'post',
                url: '/farm',
                data: data
            })

            return response
        } catch ({ response }: any) {
            throw response.data
        }
    }

    async listFarmId(params: number) {
        try {
            const response = await instance({
                method: 'get',
                url: `/farm/list/${params}`,
            })

            return response
        } catch (error) {
            return error
        }
    }

    async listAllFarm() {
        try {
            const response = await instance({
                method: 'get',
                url: `/farm/list`,
            })

            return response
        } catch (error) {
            return error
        }
    }

    async deleteFarm(params: number) {
        try {
            const response = await instance({
                method: 'delete',
                url: `/farm/list/${params}`,
            })

            return response
        } catch (error) {
            return error
        }
    }

    async editFarm(data: FarmDto, params: number) {
        try {
            const response = await instance({
                method: 'post',
                url: `/farm/${params}`,
                data: data
            })

            return response
        } catch (error) {
            return error
        }
    }

}