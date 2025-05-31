const Posts: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Posts</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Post 1</h2>
            <p className="text-gray-600">This is the first post content...</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Post 2</h2>
            <p className="text-gray-600">This is the second post content...</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Post 3</h2>
            <p className="text-gray-600">This is the third post content...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts;