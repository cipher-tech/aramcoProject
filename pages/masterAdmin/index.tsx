import Head from "next/head"
import { Helmet } from "react-helmet"

const Index = () => {
	return (
		<div>

			<Head>

				<meta charSet="utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="description" content="" />
				<meta name="author" content="" />

				<title>SB Admin 2 - Tables</title>

				{/* <!-- Custom fonts for this template --> */}
				<link href="adminAssets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
				<link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

				{/* <!-- Custom styles for this template --> */}
				<link href="adminAssets/css/sb-admin-2.min.css" rel="stylesheet" />

				{/* <!-- Custom styles for this page --> */}
				<link href="adminAssets/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet" />

				<script src="adminAssets/vendor/jquery/jquery.min.js"></script>
				<script src="adminAssets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
				<script src="adminAssets/vendor/datatables/dataTables.bootstrap4.min.js"></script>
				{/* <!-- Core plugin JavaScript--> */}
				<script src="adminAssets/vendor/jquery-easing/jquery.easing.min.js"></script>

				{/* <!-- Custom scripts for all pages--> */}
				<script src="adminAssets/js/sb-admin-2.min.js"></script>

				{/* <!-- Page level plugins --> */}
				<script src="adminAssets/vendor/datatables/jquery.dataTables.min.js"></script>

				{/* <!-- Page level custom scripts --> */}
				<script src="adminAssets/js/demo/datatables-demo.js"></script>

			</Head>

			<body id="page-top">

				{/* <!-- Page Wrapper --> */}
				<div id="wrapper">

					{/* <!-- Sidebar --> */}
					<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

						{/* <!-- Sidebar - Brand --> */}
						<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
							<div className="sidebar-brand-icon rotate-n-15">
								{/* <i className="fas fa-laugh-wink"></i> */}
							</div>
							<div className="sidebar-brand-text mx-3"> Executive Ride Investo’</div>
						</a>

						{/* <!-- Divider --> */}
						<hr className="sidebar-divider my-0" />

						{/* <!-- Nav Item - Dashboard --> */}
						<li className="nav-item">
							<a className="nav-link" href="index.html">
								<i className="fas fa-fw fa-tachometer-alt"></i>
								<span>Dashboard</span></a>
						</li>

						{/* <!-- Divider --> */}
						<hr className="sidebar-divider" />

						{/* <!-- Heading --> */}

						{/* <!-- Sidebar Toggler (Sidebar) --> */}
						<div className="text-center d-none d-md-inline">
							<button className="rounded-circle border-0" id="sidebarToggle"></button>
						</div>

					</ul>
					{/* <!-- End of Sidebar --> */}

					{/* <!-- Content Wrapper --> */}
					<div id="content-wrapper" className="d-flex flex-column">

						{/* <!-- Main Content --> */}
						<div id="content">

							{/* <!-- Topbar --> */}
							<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

								{/* <!-- Sidebar Toggle (Topbar) --> */}
								<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
									<i className="fa fa-bars"></i>
								</button>

								<form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
									<div className="input-group">
										<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
									</div>
								</form>

								{/* <!-- Topbar Navbar --> */}
								<ul className="navbar-nav ml-auto">
									<div className="topbar-divider d-none d-sm-block"></div>

									{/* <!-- Nav Item - User Information --> */}
									<li className="nav-item dropdown no-arrow">
										<a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
											<img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
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
								<h1 className="h3 mb-2 text-gray-800">Admin Dashboard</h1>
								<p className="mb-4">
									Welcome to the admin dashboard, You can control user activites and update uuser values from the dashboard.
									Use the blue navbar to navigate to different pages to view and change values.
								</p>

								{/* <!-- DataTales Example --> */}
								<div className="card shadow mb-4">
									<div className="card-header py-3">
										<h6 className="m-0 font-weight-bold text-primary">All Users</h6>
									</div>
									<div className="card-body">
										<div className="table-responsive">
											<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
												<thead>
													<tr>
														<th>ID</th>
														<th>Name</th>
														<th>Email</th>
														<th>Plan</th>
														<th>Amount</th>
														<th>Created At</th>
													</tr>
												</thead>
												<tfoot>
													<tr>
														<th>ID</th>
														<th>Name</th>
														<th>Email</th>
														<th>Plan</th>
														<th>Amount</th>
														<th>Created At</th>
													</tr>
												</tfoot>
												<tbody>
													<tr>
														<td>21Engineer</td>
														<td>Brenden Wagner</td>
														<td>San@mail.com Francisco</td>
														<td>Hire Purchase</td>
														<td>$206,850</td>
														<td>2011/06/07</td>
													</tr>
													<tr>
														<td>21Operating Officer (COO)</td>
														<td>Fiona Green</td>
														<td>San@mail.com Francisco</td>
														<td>Hire Purchase</td>
														<td>$850,000</td>
														<td>2010/03/11</td>
													</tr>
													<tr>
														<td>21Marketing</td>
														<td>Shou Itou</td>
														<td>Tokyo@mail.com</td>
														<td>Hire Purchase</td>
														<td>$163,000</td>
														<td>2011/08/14</td>
													</tr>
													<tr>
														<td>21Specialist</td>
														<td>Michelle House</td>
														<td>Sidney@mail.com</td>
														<td>Hire Purchase</td>
														<td>$95,400</td>
														<td>2011/06/02</td>
													</tr>
													<tr>
														<td>21</td>
														<td>Suki Burks</td>
														<td>London@mail.com</td>
														<td>Hire Purchase</td>
														<td>$114,500</td>
														<td>2009/10/22</td>
													</tr>
													<tr>
														<td>21Author</td>
														<td>Prescott Bartlett</td>
														<td>London@mail.com</td>
														<td>Hire Purchase</td>
														<td>$145,000</td>
														<td>2011/05/07</td>
													</tr>
													<tr>
														<td>21Leader</td>
														<td>Gavin Cortez</td>
														<td>San@mail.com Francisco</td>
														<td>Hire Purchase</td>
														<td>$235,500</td>
														<td>2008/10/26</td>
													</tr>
													<tr>
														<td>21Sales support</td>
														<td>Martena Mccray</td>
														<td>Edinburgh@mail.com</td>
														<td>Hire Purchase</td>
														<td>$324,050</td>
														<td>2011/03/09</td>
													</tr>
													<tr>
														<td>21Designer</td>
														<td>Unity Butler</td>
														<td>San@mail.com Francisco</td>
														<td>Hire Purchase</td>
														<td>$85,675</td>
														<td>2009/12/09</td>
													</tr>
													<tr>
														<td>21Manager</td>
														<td>Howard Hatfield</td>
														<td>San@mail.com Francisco</td>
														<td>Hire Purchase</td>
														<td>$164,500</td>
														<td>2008/12/16</td>
													</tr>
													<tr>
														<td>21</td>
														<td>Hope Fuentes</td>
														<td>San@mail.com Francisco</td>
														<td>Hire Purchase</td>
														<td>$109,850</td>
														<td>2010/02/12</td>
													</tr>
													<tr>
														<td>21Controller</td>
														<td>Vivian Harrell</td>
														<td>San@mail.com Francisco</td>
														<td>Hire Purchase</td>
														<td>$452,500</td>
														<td>2009/02/14</td>
													</tr>
													<tr>
														<td>21Manager</td>
														<td>Timothy Mooney</td>
														<td>London@mail.com</td>
														<td>Hire Purchase</td>
														<td>$136,200</td>
														<td>2008/12/11</td>
													</tr>
													<tr>
														<td>21</td>
														<td>Jackson Bradshaw</td>
														<td>New@mail.com York</td>
														<td>Hire Purchase</td>
														<td>$645,750</td>
														<td>2008/09/26</td>
													</tr>
													<tr>
														<td>21Engineer</td>
														<td>Olivia Liang</td>
														<td>Singapore@mail.com</td>
														<td>Hire Purchase</td>
														<td>$234,500</td>
														<td>2011/02/03</td>
													</tr>

													<tr>
														<td>21Administrator</td>
														<td>Lael Greer</td>
														<td>London@mail.com</td>
														<td>Hire Purchase</td>
														<td>$103,500</td>
														<td>2009/02/27</td>
													</tr>
													<tr>
														<td>21</td>
														<td>Jonas Alexander</td>
														<td>San@mail.com Francisco</td>
														<td>Hire Purchase</td>
														<td>$86,500</td>
														<td>2010/07/14</td>
													</tr>
													<tr>
														<td>21Director</td>
														<td>Shad Decker</td>
														<td>Edinburgh@mail.com</td>
														<td>Hire Purchase</td>
														<td>$183,000</td>
														<td>2008/11/13</td>
													</tr>
													<tr>
														<td>21Developer</td>
														<td>Michael Bruce</td>
														<td>Singapore@mail.com</td>
														<td>Hire Purchase</td>
														<td>$183,000</td>
														<td>2011/06/27</td>
													</tr>
													<tr>
														<td>21Support</td>
														<td>Donna Snider</td>
														<td>New@mail.com York</td>
														<td>Hire Purchase</td>
														<td>$112,000</td>
														<td>2011/01/25</td>
													</tr>
												</tbody>
											</table>
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
									<span>Copyright &copy; Executive Ride Investo’</span>
								</div>
							</div>
						</footer>
						{/* <!-- End of Footer --> */}

					</div>
					{/* <!-- End of Content Wrapper --> */}

				</div>
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

				{/* <!-- Bootstrap core JavaScript--> */}
				{/* <Helmet>
					
				</Helmet> */}
			</body>
		</div>
	)
}

export default Index