import React, { Fragment, useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import Nav from 'react-bootstrap/Navbar'
import { getOrders } from '../store/order'
import DataTable from 'react-data-table-component'
export const Orders = ({ getOrders }) => {
    const [loading, setLoading] = useState(true)
    let { user: { fullName } } = useSelector(state => state.auth)
    let { orders, count } = useSelector(state => state.orders)
    useEffect(() => {
       Promise.all([ getOrders({ PageNumber: 1, PageSize: 3 })]).then(()=> setLoading(false))
    }, [])

    const AcceptedElement = ({ isAccepted }) => {
        return (
            <Fragment>
                {
                    isAccepted ? <span style={{ backgroundColor: 'green', padding: '5px' }}>Accepted</span> : <span style={{ backgroundColor: 'red', color: 'white', padding: '5px' }}>Not Accepted</span>
                }
            </Fragment>
        )
    }
    const columns = [
        {
            name: 'id',
            selector: row => row.index,
        },
        {
            name: 'orderNumber',
            selector: row => row.orderNumber,
        },
        {
            name: 'orderDate',
            selector: row => new Date(row.orderDate).toLocaleDateString(),
        },
        {
            name: 'departureDate',
            selector: row => new Date(row.departureDate).toLocaleDateString(),
        },
        {
            name: 'numberOfHours',
            selector: row => row.numberOfHours,
        },
        {
            name: 'isAccepted',
            selector: row => <AcceptedElement row={row} />,
        },
    ]
    const pageChange = async page => {
        setLoading(true)
        await getOrders({ PageNumber: page, PageSize: 3 })
        setLoading(false)
    }
    return (
        <div>
            <Nav>
                <Nav.Brand>{`Welcome ${fullName}`}</Nav.Brand>
            </Nav>
            <DataTable
                title="Orders"
                columns={columns}
                data={orders}
                pagination
                paginationServer
                paginationPerPage={3}
                paginationTotalRows={count}
                onChangePage={pageChange}
                progressPending={loading}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { getOrders }

export default connect(mapStateToProps, mapDispatchToProps)(Orders)