import React, { useEffect, useState } from 'react'
import './ProductList.css'
import { useNavigate, Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { clearErros, getAdminProduct } from '../../actions/productActions'
import Metadata from '../Layout/Metadata'
import { useAlert } from 'react-alert';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from './Sidebar'
import { Button } from '@material-ui/core'

function ProductList() {
  const { error, products } = useSelector((state) => state.products)

  const { id } = useParams()
  const dispatch = useDispatch()
  const alert = useAlert()

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 200, flex: 0.5 },
    {
      field: "name", headerName: "Name", minWidth: 350, flex: 0.7,
    },
    { field: "stock", headerName: "Stock", type: "number", minWidth: 150, flex: 0.3 },
    { field: "price", headerName: "Price", type: "number", minWidth: 270, flex: 0.5 },
    {
      field: "actions", headerName: "Actions", flex: 0.3, minWidth: 150, type: "number", sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/product/${params.getValue(params.id, "id")}`}> <EditIcon />
            </Link>
            <Button>
              <DeleteIcon />
            </Button>
          </>
        )
      }
    }
  ]
  const rows = []

  products && products.forEach((item, index) => {
    rows.push({
      id: item._id,
      stock: item.stock,
      name: item.name,
      price: item.price
    })
  })

  useEffect(()=>{
    if(error){
      alert.error(error)
      dispatch(clearErros())
    }
    dispatch(getAdminProduct())
  },[dispatch,alert,error])
  return (
    <>
      <Metadata title={`All products --admin`} />


      <div className="dashboard">
        <Sidebar/>
        <div className="productListContainer">
          <h1 id='productListHeading'>All Products</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className='productListTable'
            autoHeight
          />
        </div>
      </div>
    </>
  )
}

export default ProductList
