const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-600">&copy; 2024 ALX Project. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-gray-600">Terms</a>
            <a href="#" className="text-gray-400 hover:text-gray-600">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;