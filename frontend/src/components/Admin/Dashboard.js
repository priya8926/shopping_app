import React from 'react'
import Sidebar from './Sidebar'
import './Dashboard.css'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Doughnut , Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Dashboard() {
    const lineState = {
        labels : ["Intial Amount" , "Amount Earned"],
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
                                <p>product</p>
                                <p>50</p>
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
                </div>
            </div>
        </>
    )
}

export default Dashboard