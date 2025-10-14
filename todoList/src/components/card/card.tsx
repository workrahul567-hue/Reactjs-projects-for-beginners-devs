export default function Card() {
  return (
    <>
      <div className="starter-card-list  gap-4 my-6">
        <div className="card bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-3">
            <div className="card-title font-semibold text-lg">Todo List</div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-150">
              Create Task
            </button>
          </div>

          <ul className="list-group w-full">
            <li className="list-group-item py-2 px-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              Task 1
              <div className="flex items-center">
                <button
                  className="ml-2 text-yellow-500 hover:text-yellow-600"
                  title="Mark as done"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                </button>
                <button
                  className="ml-2 text-red-500 hover:text-red-600"
                  title="Delete task"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8zm2-5a1 1 0 00-1-1H9a1 1 0 00-1 1v1H3a1 1 0 100 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-4V3zm-2 1V3h2v1h-2z" />
                  </svg>
                </button>
              </div>
            </li>
            <li className="list-group-item py-2 px-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              Task 2
              <div className="flex items-center">
                <button
                  className="ml-2 text-yellow-500 hover:text-yellow-600"
                  title="Mark as done"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                </button>
                <button
                  className="ml-2 text-red-500 hover:text-red-600"
                  title="Delete task"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8zm2-5a1 1 0 00-1-1H9a1 1 0 00-1 1v1H3a1 1 0 100 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-4V3zm-2 1V3h2v1h-2z" />
                  </svg>
                </button>
              </div>
            </li>
            <li className="list-group-item py-2 px-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              Task 3
              <div className="flex items-center">
                <button
                  className="ml-2 text-yellow-500 hover:text-yellow-600"
                  title="Mark as done"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                </button>
                <button
                  className="ml-2 text-red-500 hover:text-red-600"
                  title="Delete task"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8zm2-5a1 1 0 00-1-1H9a1 1 0 00-1 1v1H3a1 1 0 100 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-4V3zm-2 1V3h2v1h-2z" />
                  </svg>
                </button>
              </div>
            </li>
            <li className="list-group-item py-2 px-4 flex items-center justify-between">
              Task 4
              <div className="flex items-center">
                <button
                  className="ml-2 text-yellow-500 hover:text-yellow-600"
                  title="Mark as done"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                </button>
                <button
                  className="ml-2 text-red-500 hover:text-red-600"
                  title="Delete task"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8zm2-5a1 1 0 00-1-1H9a1 1 0 00-1 1v1H3a1 1 0 100 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-4V3zm-2 1V3h2v1h-2z" />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
