export interface FarmDto {
    name_producer: string
    farm_name: string
    farm_area_total: number
    farm_area_used: number
}

export class FarmErrosDto {
    name_producer?: { message: string }
    farm_name?: { message: string }
    farm_area_total?: { message: string }
    farm_area_used?: { message: string }
}

