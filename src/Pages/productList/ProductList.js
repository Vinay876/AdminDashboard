import React from 'react'
import './productlist.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [data, setData] = React.useState(productRows)
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className='productListUser'>
                        <img className='productListImg' src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },

        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];

    return (
        <div className='productlist'>
            <DataGrid
                rows={data}
                columns={columns}
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSize={8}
                checkboxSelection
            />
        </div>
    )
}

export default ProductList
