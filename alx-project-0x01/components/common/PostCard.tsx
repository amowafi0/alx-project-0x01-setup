const PostCard: React.FC = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-2">Post Title</h3>
      <p className="text-gray-600 mb-4">Post content preview...</p>
      <div className="text-sm text-gray-500">
        <span>Author: mowafi</span>
        <span className="ml-4">Date: 2025-06-01</span>
      </div>
    </div>
  )
}

export default PostCard;