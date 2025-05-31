const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">ALX Project</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/posts" className="text-gray-600 hover:text-gray-900">Posts</a>
            <a href="/users" className="text-gray-600 hover:text-gray-900">Users</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;