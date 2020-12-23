import React from 'react'

export interface ITableProps {
    headers: string[]
    body: any
    buttonAction?: [Function, Function]
    buttonText?: string[]
    title: string
    nestedKeys?: string[]
    keys: string[]
}
const Table = ({ headers, body, buttonAction, title, nestedKeys, keys, buttonText }: ITableProps) => {
    return (
        <>
            {/* <!-- BEGIN CONTENT --> */}
            <div className="page-content-wrapper">
                {/* <div className="page-content"> */}
                <h3 className="page-title">{title} </h3>
                <hr />

                {/* <!--  ==================================VALIDATION ERRORS==================================  --> */}
                {/* <!--  ==================================SESSION MESSAGES==================================  --> */}

                <div className="row">
                    <div className="col-md-12">


                        <div className="portlet light bordered">
                            <div className="portlet-title">
                                <div className="caption font-dark">
                                </div>
                                <div className="tools"> </div>
                            </div>
                            <div className="portlet-body">
                                <table className="table table-striped table-bordered table-hover" id="">

                                    <thead>
                                        <tr>
                                            {
                                                headers.map((item, index) => (
                                                    <th key={index}>{item}</th>
                                                ))
                                            }

                                        </tr>
                                    </thead>

                                    <tbody>

                                        {
                                            body.map((item, index) => (
                                                <tr key={index * 883}>
                                                    {
                                                        keys.map((key, index) => {
                                                            if (typeof item[key] !== "object") {
                                                                return <td key={index + 471}>{item[key]}</td>
                                                            } else {
                                                                return nestedKeys.map((nestedKey, index) => {
                                                                    console.log(item[key][nestedKey]);
                                                                    return <td key={index + 601}>{item[key][nestedKey]} </td>
                                                                })
                                                            }
                                                            // return <td key={index + 601}> </td>
                                                        })

                                                    }
                                                    { buttonAction ?
                                                        <td>
                                                            <button type="button"
                                                                className="btn btn-primary bold uppercase btn-sm block_button"
                                                                data-toggle="modal1" data-target="#blockModal"
                                                                data-id="622"
                                                                onClick={() => buttonAction[0](item)}>
                                                                <i className='fa fa-eye'></i> &nbsp;
                                                                {buttonText? buttonText[0]: "Activate"}
                                                            </button>

                                                            <button type="button"
                                                                className="btn  bold uppercase btn-danger btn-sm"
                                                                data-toggle="modal1" data-target="#blockModal"
                                                                data-id="622"
                                                                onClick={() => buttonAction[1](item)}>
                                                                <i className='fa fa-times'></i>  &nbsp;
                                                                {buttonText? buttonText[1]: "Delete"}
                                                            </button>
                                                        </td>
                                                        :
                                                        null
                                                    }
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                                <div className="text-center">
                                    <ul className="pagination">

                                        <li className="disabled"><span>&laquo;</span></li>

                                        <li className="active"><span>1</span></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        {/* <li><a href="#">5</a></li>
                                        <li><a href="#">6</a></li>
                                        <li><a href="#">7</a></li>
                                        <li><a href="#">8</a></li> */}

                                        <li className="disabled"><span>...</span></li>

                                        <li><a href="#">5</a></li>
                                        <li><a href="#">6</a></li>

                                        <li><a href="#" rel="next">&raquo;</a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* </div><!-- ROW--> */}

                <div className="modal fade" id="blockModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title" id="myModalLabel"> <i className='fa fa-times'></i> Block User!</h4>
                            </div>

                            <div className="modal-body">
                                <strong>Are you sure you want to Block this user ?</strong>
                            </div>

                            <div className="modal-footer">
                                <form method="post" action="https://coinforest.net/admin/block-user" className="form-inline">
                                    <input type="hidden" name="_token" value="xl24Uuv19jN8jD8pVE4TYy3TG6EMEAEBPz9wR37O" />
                                    <input type="hidden" name="id" className="abir_id" value="0" />

                                    <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                                    <button type="submit" className="btn btn-primary"><i className="fa fa-check"></i> Yes Sure..!</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="modal fade" id="unblockModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title" id="myModalLabel"> <i className='fa fa-check'></i> Unblock User!</h4>
                            </div>

                            <div className="modal-body">
                                <strong>Are you sure you want to Unblock this user ?</strong>
                            </div>

                            <div className="modal-footer">
                                <form method="post" action="https://coinforest.net/admin/unblock-user" className="form-inline">
                                    <input type="hidden" name="_token" value="xl24Uuv19jN8jD8pVE4TYy3TG6EMEAEBPz9wR37O" />
                                    <input type="hidden" name="id" className="abir_id" value="0" />

                                    <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                                    <button type="submit" className="btn btn-primary"><i className="fa fa-check"></i> Yes Sure..!</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>



                {/* </div> */}
            </div>
            {/* <!-- END CONTENT --> */}

        </>
    )
}

export default Table
