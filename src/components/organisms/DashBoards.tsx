import { Fragment, useState } from "react"
import Chart from "react-google-charts"


export const DashBoards = () => {


    const [options, setOptions] = useState({
        title: 'Estado'
    })
    const [data, setData] = useState([
        ['Linguagens', 'Quantidade'],
        ['React', 100],
        ['Angula', 80],
        ['Vue', 50],
    ])


    return (
        <Fragment>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                data={data}
                options={options}
            />
             <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                data={data}
                options={options}
            />
             <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                data={data}
                options={options}
            />
        </Fragment>



    )
}