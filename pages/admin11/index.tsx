import Head from 'next/head'
import { Helmet } from "react-helmet"

const Index: React.FC = () => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="description" content="" />
				<meta name="author" content="" />

				<title> Dashboard</title>

				{/* <!-- Custom fonts for this template--> */}
				<link href="adminAssets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
				{/* <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" /> */}
				
				<link rel="stylesheet" href="adminAssets/css/bootstrap.min.css"/>
				<link rel="stylesheet" href="adminAssets/css/style.css" />
				{/* <!-- Custom styles for this template--> */}
				<link href="adminAssets/css/sb-admin-2.min.css" rel="stylesheet" />

				<script src="adminAssets/vendor/jquery/jquery.min.js"></script>
				<script src="adminAssets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

			</Head>
			<style jsx>{`
				#page-top{  
					grid-column: 1/-1;
				} 
			`}</style>
			<div id="page-top">

				{/* <!-- Page Wrapper --> */}
				<div id="wrapper">

					{/* <!-- Sidebar --> */}
					<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

						{/* <!-- Sidebar - Brand --> */}
						<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
							{/* <div className="sidebar-brand-icon rotate-n-15">
								<i className="fas fa-laugh-wink"></i>
							</div> */}
							<div className="sidebar-brand-text mx-3"> aramco </div>
						</a>

						{/* <!-- Divider --> */}
						<hr className="sidebar-divider my-0" />

						{/* <!-- Nav Item - Dashboard --> */}
						<li className="nav-item active">
							<a className="nav-link" href="index.html">
								<i className="fa fa-house-damage"></i>
								<span>Dashboard</span></a>
						</li>

						{/* <!-- Divider --> */}
						<hr className="sidebar-divider" />

						{/* <!-- Heading --> */}
						{/* <div className="sidebar-heading">
              Interface
            </div> */}

						{/* <!-- Nav Item - Pages Collapse Menu --> */}
						{/* <li className="nav-item">
              <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog"></i>
                <span>Components</span>
              </a>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Components:</h6>
                  <a className="collapse-item" href="buttons.html">Buttons</a>
                  <a className="collapse-item" href="cards.html">Cards</a>
                </div>
              </div>
            </li> */}

						{/* <!-- Divider --> */}
						{/* <hr className="sidebar-divider d-none d-md-block" /> */}

						{/* <!-- Sidebar Toggler (Sidebar) --> */}
						<div className="text-center d-none d-md-inline">
							<button className="rounded-circle border-0" id="sidebarToggle"></button>
						</div>

					</ul>
					{/* <!-- End of Sidebar --> */}

					{/* <!-- Content Wrapper --> */}
					<div id="content-wrapper" className="d-flex flex-column">

						{/* <!-- Main Content --> */}
						<div id="contentp">

							{/* <!-- Topbar --> */}
							<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

								{/* <!-- Sidebar Toggle (Topbar) --> */}
								<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
									<i className="fa fa-bars"></i>
								</button>

								{/* <!-- Topbar Search --> */}
								<form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
									<div className="input-group">
										<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
									</div>
								</form>

								{/* <!-- Topbar Navbar --> */}
								<ul className="navbar-nav ml-auto">

									{/* <!-- Nav Item - Alerts --> */}
									<li className="nav-item dropdown no-arrow mx-1">
										<a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<i className="fas fa-bell fa-fw"></i>
											{/* <!-- Counter - Alerts --> */}
											{/* <span className="badge badge-danger badge-counter">3+</span> */}
										</a>
									</li>

									<div className="topbar-divider d-none d-sm-block"></div>

									{/* <!-- Nav Item - User Information --> */}
									<li className="nav-item dropdown no-arrow">
										<a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<span className="mr-2 d-none d-lg-inline text-gray-600 small">John Doe</span>
											{/* <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" /> */}
										</a>
										{/* <!-- Dropdown - User Information --> */}
										<div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
											<a className="dropdown-item" href="#">
												<i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
												Profile
											</a>
											<div className="dropdown-divider"></div>
											<a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
												<i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
												Logout
											</a>
										</div>
									</li>

								</ul>

							</nav>
							{/* <!-- End of Topbar --> */}

							{/* <!-- Begin Page Content --> */}
							<div className="container-fluid">

								{/* <!-- Page Heading --> */}
								{/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
									<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
									<a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
								</div> */}

								{/* <!-- Content Row --> */}
								<div className="row justify-content-center">

									{/* <!-- Earnings (Monthly) Card Example --> */}
									<div className="col-xl-4 col-md-4 mb-4">
										<div className="card border-left-primary shadow h-100 py-2">
											<div className="card-body">
												<div className="row no-gutters align-items-center">
													<div className="col mr-2">
														<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div>
														<div className="h5 mb-0 font-weight-bold text-gray-800">₦40,000</div>
													</div>
													<div className="col-auto">
														<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
														{/* <i className="fas fa-calendar fa-2x text-gray-300"></i> */}
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- Earnings (Monthly) Card Example --> */}
									<div className="col-xl-4 col-md-4 mb-4">
										<div className="card border-left-success shadow h-100 py-2">
											<div className="card-body">
												<div className="row no-gutters align-items-center">
													<div className="col mr-2">
														<div className="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings (Annual)</div>
														<div className="h5 mb-0 font-weight-bold text-gray-800">₦215,000</div>
													</div>
													<div className="col-auto">
														<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- Earnings (Monthly) Card Example --> */}

									{/* <!-- Pending Requests Card Example --> */}
									<div className="col-xl-4 col-md-4 mb-4">
										<div className="card border-left-warning shadow h-100 py-2">
											<div className="card-body">
												<div className="row no-gutters align-items-center">
													<div className="col mr-2">
														<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Investment</div>
														<div className="h5 mb-0 font-weight-bold text-gray-800">₦2,000,000</div>
													</div>
													<div className="col-auto">
														<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
														{/* <i className="fas fa-comments fa-2x text-gray-300"></i> */}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* <!-- Content Row --> */}


							</div>
						</div>

						{/* <!-- Content Row --> */}
						<div className="row p-2">

							{/* <!-- Content Column --> */}
							<div className="col-lg-6 mb-4">
								<div className="card shadow mb-4">
									<div className="card-header py-3">
										<h6 className="m-0 font-weight-bold text-primary">Instructions</h6>
									</div>
									<div className="card-body">
										<div className="text-center">
											<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ "width": "25rem" }} src="img/undraw_posting_photo.svg" alt="" />
										</div>
										<p>	This isthe user dashboard, you can view user info and statistics from the dashboard
										</p>
										<a target="_blank" rel="nofollow" href="https://undraw.co/"> &rarr;</a>
									</div>
								</div>
							</div>

							<div className="col-lg-6 mb-4">

								{/* <!-- Illustrations --> */}

								{/* <!-- Approach --> */}
								<div className="card shadow mb-4">
									<div className="card-header py-3">
										<h6 className="m-0 font-weight-bold text-primary">Info</h6>
									</div>
									<div className="card-body">
										<p>You can access your profile and logout by clicking the icon with your name on the top  right hand corner of your screen </p>
										{/* <p className="mb-0"></p> */}
									</div>
								</div>

							</div>
						</div>

					</div>
					{/* <!-- /.container-fluid --> */}

				</div>
				{/* <!-- End of Main Content --> */}

				{/* <!-- Footer --> */}
				<footer className="sticky-footer bg-white">
					<div className="container my-auto">
						<div className="copyright text-center my-auto">
							<span>Copyright &copy;  TheExecutiveRide 2019</span>
						</div>
					</div>
				</footer>
				{/* <!-- End of Footer --> */}

			</div>
			{/* <!-- End of Content Wrapper --> */}


			{/* <!-- End of Page Wrapper --> */}

			{/* <!-- Scroll to Top Button--> */}
			<a className="scroll-to-top rounded" href="#page-top">
				<i className="fas fa-angle-up"></i>
			</a>

			{/* <!-- Logout Modal--> */}
			<div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
							<button className="close" type="button" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
						<div className="modal-footer">
							<button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
							<a className="btn btn-primary" href="login.html">Logout</a>
						</div>
					</div>
				</div>
			</div>

			<Helmet>
				{/* <!-- Bootstrap core JavaScript--> */}

				{/* <!-- Core plugin JavaScript--> */}
				<script src="adminAssets/vendor/jquery-easing/jquery.easing.min.js"></script>

				{/* <!-- Custom scripts for all pages--> */}
				<script src="adminAssets/js/sb-admin-2.min.js"></script>

				{/* <!-- Page level plugins --> */}
				<script src="adminAssets/vendor/chart.js/Chart.min.js"></script>

				{/* <!-- Page level custom scripts --> */}
				{/* <script src="adminAssets/js/demo/chart-area-demo.js"></script>
				<script src="adminAssets/js/demo/chart-pie-demo.js"></script> */}
			</Helmet>

		</>
	)
}

export default Index
