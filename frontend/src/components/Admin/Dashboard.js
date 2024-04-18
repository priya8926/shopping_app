import {React, useEffect} from 'react'
import Sidebar from './Sidebar'
import './Dashboard.css'
import { Typography } from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux"
import { getAdminProduct } from '../../actions/productActions'
import { Link } from 'react-router-dom'
import { Doughnut , Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Dashboard() {
    const {  products } = useSelector((state) => state.products)

    const dispatch = useDispatch()
    let outOfStock = 0

    products && products.forEach((item)=>{
        if(item.stock === 0){
            outOfStock += 1;
        }
    })
    const lineState = {
        labels : ["Initial Amount" , "Amount Earned"],
        datasets : [
            {
                label : "Total Amount",
                backgroundColor : ["#2209ef"],
                hoverBackgroundColor : ["#7669e1"],
                borderWidth: 2,
                data : [0,4000]
            }
        ]
    }
    const doughnutState = {
        labels : ["Out of Stock" , "In Stock"],
        datasets : [
            {
                backgroundColor : ["rgb(132, 33, 226)" , "rgb(15, 220, 128)"],
                hoverBackgroundColor : ["rgb(63, 4, 118)" , "rgb(6, 135, 77)"],
                data : [outOfStock , products.length - outOfStock]
            }
        ]
    }

    
  useEffect(()=>{
    
    dispatch(getAdminProduct())

  },[dispatch])
    return (
        <>
            <div className="dashboard">
                <Sidebar />
                <div className="dashboardContainer">
                    <Typography variant='h4'>Dashboard</Typography>
                    <div className="dashboardSummary">
                        <div>
                            <p>
                                Total Amount <br /> ₹2000
                            </p>
                        </div>
                        <div className="dashboardSummaryBox2">
                            <Link to="/admin/products">
                                <p>Products</p>
                                <p>{products.length}</p>
                            </Link>
                            <Link to="/admin/orders">
                                <p>orders</p>
                                <p>4</p>
                            </Link>
                            <Link to="/admin/users">
                                <p>users</p>
                                <p>502</p>
                            </Link>
                        </div>

                    </div>
                    <div className="lineChart">
                        <Line data={lineState} />
                    </div>
                    <div className="doughnutChart">
                        <Doughnut data={doughnutState} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
