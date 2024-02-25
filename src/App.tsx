import './index.css';
import { Routes, Route, Navigate, Outlet, BrowserRouter } from 'react-router-dom';
import { Navbar } from './Components';
import { PageLayout } from './HelperFunctions';

function App() {
	return (
		<>
			<Navbar />
			<PageLayout />
			<BrowserRouter>
				<Routes>
					<Route index element={<></>} />
					<Route path="*" element={<Navigate to="/" replace={true} />} />
				</Routes>
			</BrowserRouter>
			<Outlet />
		</>
	);
}

export default App;
