export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Luxury Safari offers exceptional wildlife experiences and luxury accommodations across Africa's most pristine destinations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Serengeti</li>
              <li>Masai Mara</li>
              <li>Okavango Delta</li>
              <li>Kruger National Park</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@luxurysafari.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Safari Street</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Luxury Safari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
