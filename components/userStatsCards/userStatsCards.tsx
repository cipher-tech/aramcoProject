import React from 'react'

const UserStatsCards = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="portlet box blue">
                                <div className="portlet-title">
                                    <div className="caption">
                                        <strong><i className="fa fa-line-chart bold uppercase"></i> Main Statistics</strong>
                                    </div>
                                    <div className="tools">
                                        <a href="javascript:;" className="collapse"> </a>
                                    </div>
                                </div>
                                <div className="portlet-body" style={{ overflow: "hidden" }}>
                                    <div className="col-md-3">
                                        <div className="dashboard-stat green">
                                            <div className="visual">
                                                <i className="fa fa-money"></i>
                                            </div>
                                            <div className="details">
                                                <div className="number">
                                                    $ <span data-counter="counterup" data-value="">0</span>
                                                </div>
                                                <div className="desc bold uppercase"> Total User Balance</div>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="admin/repeat-history.html">
                                        <div className="col-md-3">
                                            <div className="dashboard-stat purple">
                                                <div className="visual">
                                                    <i className="fa fa-recycle"></i>
                                                </div>
                                                <div className="details">
                                                    <div className="number">
                                                        $ <span data-counter="counterup" data-value="0">0</span>
                                                    </div>
                                                    <div className="desc  bold uppercase "> Total Earnings </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="admin/deposit-history.html">
                                        <div className="col-md-3">
                                            <div className="dashboard-stat blue">
                                                <div className="visual">
                                                    <i className="fa fa-money"></i>
                                                </div>
                                                <div className="details">
                                                    <div className="number">
                                                        $  <span data-counter="counterup" data-value="0">0</span>
                                                    </div>
                                                    <div className="desc  bold uppercase"> Total Deposit </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="admin/withdraw-request-all.html">
                                        <div className="col-md-3">
                                            <div className="dashboard-stat red">
                                                <div className="visual">
                                                    <i className="fa fa-money"></i>
                                                </div>
                                                <div className="details">
                                                    <div className="number">
                                                        $ <span data-counter="counterup" data-value="0">0</span>
                                                    </div>
                                                    <div className="desc bold uppercase"> Total Withdraw </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserStatsCards
