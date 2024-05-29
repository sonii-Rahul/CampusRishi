import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/userContext';

function SideBar(props) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex">
      <div className="min-h-screen w-25 bg-white flex-shrink-0">
        <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
          <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
              <div className="flex space-x-6 mx-4 py-2 my-4">
                <img className="rounded-full h-10 w-10" src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <span className="py-2 font-bold">{user.fullName.toUpperCase()}</span>
              </div>
              <ul className="mt-6 space-y-2 tracking-wide">
                <li className="min-w-max">
                  <Link aria-label="dashboard" className="relative flex items-center space-x-4 bg-gradient-to-r from-orange-500 to-orange-500 px-4 py-3 text-white">
                    <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-black dark:fill-slate-600"></path>
                      <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-orange-400"></path>
                      <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-orange-400"></path>
                    </svg>
                    <span className="-mr-1 font-medium">Dashboard</span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link to="/school/addteacher" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path className="fill-current text-gray-300 group-hover:text-orange-400" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path className="fill-current text-gray-600 group-hover:text-orange-400" fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>
                    <span className="group-hover:text-gray-700">Add Teacher</span>
                  </Link>
                  <li className="min-w-max">
                    <Link to="/school/addcourse" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path className="fill-current text-gray-300 group-hover:text-orange-400" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path className="fill-current text-gray-600 group-hover:text-orange-400" fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                      </svg>
                      <span className="group-hover:text-gray-700">Add course</span>
                    </Link>
                  </li>
                  <li className="min-w-max">
                    <Link to="/school/addclass" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path className="fill-current text-gray-300 group-hover:text-orange-400" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path className="fill-current text-gray-600 group-hover:text-orange-400" fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                      </svg>
                      <span className="group-hover:text-gray-700">Add Class</span>
                    </Link>
                  </li>
                </li>
              </ul>
            </div>
            <div className="w-max -mb-3">
              <Link className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:fill-orange-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <span className="group-hover:text-gray-700">Settings</span>
              </Link>
            </div>
            <button onClick={() => { props.logingout() }} type="button" className="rounded-xl bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black m-2">
              LogOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
