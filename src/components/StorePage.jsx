import React, { useState } from 'react'

const StorePage = ({ onBackToHome }) => {
  const [selectedFormat, setSelectedFormat] = useState({})
  const [showOrderModal, setShowOrderModal] = useState(false)
  const [selectedBookForOrder, setSelectedBookForOrder] = useState(null)
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: 1,
    address: '',
    specialRequests: ''
  })
  const [orderStatus, setOrderStatus] = useState(null)

  const books = {
    worldTooFlat: {
      id: 'worldTooFlat',
      title: "The World Was Too Flat",
      subtitle: "Flat World Series Book 2",
      coverImage: "/images/world.png",
      description: "Five young boys are about to finish high school in the mid-fifties, not sure of their future or where they may wind up. They have spent their lives in this town of Sunset, Texas.",
      publishDate: "Nov 13, 2020",
      pages: 290,
      rating: "5.0",
      price: 25,
      availableInStores: true,
      formats: {
        paperback: { 
          name: 'Paperback', 
          sku: 'ISBN: 979-8887034386', 
          pages: 290,
          storeLinks: {
            amazon: 'https://www.amazon.com/World-Was-Too-Flat/dp/B0DXS3C5WF/ref=tmm_pap_swatch_0',
            bam: 'https://www.booksamillion.com/p/World-Was-Too-Flat/Danny-Russell/9798887034386',
            barnes: '#',
            apple: '#',
            google: '#'
          }
        },
        kindle: { 
          name: 'Kindle', 
          sku: 'ISBN: 978-1954168046', 
          pages: 344,
          storeLinks: {
            amazon: 'https://www.amazon.com/World-Was-Flat-Too-ebook/dp/B08N7V22LS/ref=tmm_kin_swatch_0',
            bam: '#',
            barnes: '#',
            apple: '#',
            google: '#'
          }
        },
        ebook: { 
          name: 'eBook', 
          sku: 'ISBN: 9798887034393', 
          pages: 344,
          storeLinks: {
            amazon: '#',
            bam: '#',
            barnes: 'https://www.barnesandnoble.com/w/the-world-was-too-flat-danny-russell/1147022329',
            apple: '#',
            google: '#'
          }
        },
        audiobook: { 
          name: 'Audiobook', 
          sku: 'Coming Soon', 
          pages: 'Narrated',
          storeLinks: {
            amazon: '#',
            bam: '#',
            barnes: '#',
            apple: '#',
            google: '#'
          }
        }
      }
    },
    fruitStands: {
      id: 'fruitStands',
      title: "Fruit Stands",
      subtitle: "A Slice of Small Town Life",
      coverImage: "/images/fruit.png",
      description: "A heartwarming journey through the fruit stands of rural America, capturing the charm, hard work, and community spirit of those who bring fresh produce to our tables.",
      publishDate: "Coming Soon",
      pages: null,
      rating: null,
      price: 25,
      availableInStores: false,
      formats: {
        signedPaperback: { 
          name: 'Signed Paperback', 
          sku: 'Coming Soon', 
          pages: '~250'
        }
      }
    },
    pleasantHill: {
      id: 'pleasantHill',
      title: "The History of Pleasant Hill Cemetery",
      subtitle: "Stories of Those Who Rest Here",
      coverImage: "/images/pleasant.png",
      description: "A historical tribute to Pleasant Hill Cemetery, honoring the lives and legacies of those buried there. This book captures the rich history of the cemetery and the community it serves.",
      publishDate: "Coming Soon",
      pages: null,
      rating: null,
      price: 25,
      availableInStores: false,
      formats: {
        signedPaperback: { 
          name: 'Signed Paperback', 
          sku: 'Coming Soon', 
          pages: '~200'
        }
      }
    }
  }

  // Initialize format selection for each book
  React.useEffect(() => {
    const initialFormats = {}
    Object.keys(books).forEach(bookId => {
      const firstFormat = Object.keys(books[bookId].formats)[0]
      initialFormats[bookId] = firstFormat
    })
    setSelectedFormat(initialFormats)
  }, [])

  const stores = [
    { name: 'Amazon', key: 'amazon', icon: '📚' },
    { name: 'Books-A-Million', key: 'bam', icon: '📖' },
    { name: 'Barnes & Noble', key: 'barnes', icon: '📚' },
    { name: 'Apple Books', key: 'apple', icon: '🍎' },
    { name: 'Google Play', key: 'google', icon: '▶️' }
  ]

  const handleFormatChange = (bookId, format) => {
    setSelectedFormat(prev => ({ ...prev, [bookId]: format }))
  }

  const handleCustomOrder = (book) => {
    setSelectedBookForOrder(book)
    setOrderForm({
      name: '',
      email: '',
      phone: '',
      quantity: 1,
      address: '',
      specialRequests: ''
    })
    setOrderStatus(null)
    setShowOrderModal(true)
  }

  const handleOrderSubmit = async (e) => {
    e.preventDefault()
    
    const totalCost = selectedBookForOrder.price * orderForm.quantity
    const shipping = 5.99
    const grandTotal = totalCost + shipping
    
    const emailBody = `
NEW BOOK ORDER FROM DANNY RUSSELL WEBSITE
-----------------------------------------

BOOK ORDERED: ${selectedBookForOrder.title}
PRICE PER BOOK: $${selectedBookForOrder.price}
QUANTITY: ${orderForm.quantity}
SUBTOTAL: $${totalCost}
SHIPPING: $${shipping}
TOTAL: $${grandTotal}

CUSTOMER INFORMATION:
Name: ${orderForm.name}
Email: ${orderForm.email}
Phone: ${orderForm.phone || 'Not provided'}
Address: ${orderForm.address}

SPECIAL REQUESTS:
${orderForm.specialRequests || 'None'}

-----------------------------------------
NOTE: Proceeds donated to Pleasant Hill Cemetery
Please contact customer to arrange payment (Venmo/PayPal/Check)
    `
    
    const mailtoLink = `mailto:dcrussell1950@gmail.com?subject=BOOK%20ORDER%3A%20${encodeURIComponent(selectedBookForOrder.title)}%20-%20Order%20from%20${encodeURIComponent(orderForm.name)}&body=${encodeURIComponent(emailBody)}`
    
    window.location.href = mailtoLink
    
    setOrderStatus('success')
    setTimeout(() => {
      setShowOrderModal(false)
      setOrderStatus(null)
    }, 3000)
  }

  const updateOrderForm = (field, value) => {
    setOrderForm(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 pt-24">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-amber-700 to-stone-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Books by Danny Russell</h1>
          <p className="text-amber-200">All proceeds from direct orders donated to Pleasant Hill Cemetery</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Books Grid - 3 books displayed together */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Object.values(books).map((book) => {
            const currentFormat = book.formats[selectedFormat[book.id]] || Object.values(book.formats)[0]
            
            return (
              <div key={book.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                {/* Book Cover */}
                <div className="relative bg-stone-800 p-6 flex justify-center items-center">
                  <div className="relative group w-full max-w-[200px] mx-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-stone-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative bg-stone-800 rounded-lg shadow-2xl overflow-hidden">
                      <div className="aspect-[2/3] relative">
                        <img 
                          src={book.coverImage}
                          alt={`${book.title} - Book Cover by Danny Russell`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/600x900/78350f/fbbf24?text=" + encodeURIComponent(book.title);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-5 flex-grow">
                  <h2 className="text-xl font-serif font-bold text-stone-800 mb-1">{book.title}</h2>
                  <p className="text-amber-600 text-xs mb-3">{book.subtitle}</p>
                  <p className="text-stone-600 text-sm mb-4 line-clamp-3">{book.description}</p>
                  
                  {/* Format Selector - only if multiple formats exist */}
                  {Object.keys(book.formats).length > 1 && (
                    <div className="mb-4">
                      <label className="text-xs text-stone-500 block mb-2">Format:</label>
                      <div className="flex gap-2 flex-wrap">
                        {Object.keys(book.formats).map((format) => (
                          <button
                            key={format}
                            onClick={() => handleFormatChange(book.id, format)}
                            className={`px-3 py-1 rounded-full transition text-xs ${
                              selectedFormat[book.id] === format 
                                ? 'bg-amber-600 text-white shadow-md' 
                                : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                            }`}
                          >
                            {book.formats[format].name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Book Details */}
                  {book.availableInStores && (
                    <div className="bg-stone-100 rounded-lg p-2 mb-3 text-xs">
                      <div className="grid grid-cols-2 gap-1">
                        <div><span className="text-stone-500">Pages:</span> <span className="text-stone-700">{currentFormat.pages}</span></div>
                        <div><span className="text-stone-500">Published:</span> <span className="text-stone-700">{book.publishDate}</span></div>
                        <div className="col-span-2"><span className="text-stone-500">ISBN:</span> <span className="text-stone-700 text-xs">{currentFormat.sku}</span></div>
                      </div>
                    </div>
                  )}

                  {/* Rating - only if available */}
                  {book.rating && (
                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-amber-500 text-sm">★★★★★</span>
                      <span className="text-stone-600 text-xs">{book.rating} out of 5</span>
                    </div>
                  )}
                </div>

                {/* Action Section */}
                <div className="p-5 pt-0 border-t border-stone-100 mt-auto">
                  {book.availableInStores ? (
                    <>
                      <p className="text-xs text-stone-500 mb-2 text-center">Buy {currentFormat.name} from:</p>
                      <div className="flex justify-center gap-4 flex-wrap">
                        {stores.map((store, idx) => {
                          const storeUrl = currentFormat.storeLinks?.[store.key]
                          const isAvailable = storeUrl && storeUrl !== '#'
                          
                          return (
                            <a
                              key={idx}
                              href={isAvailable ? storeUrl : '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex flex-col items-center gap-0.5 p-1.5 rounded-lg transition ${
                                !isAvailable ? 'opacity-40 cursor-not-allowed' : 'hover:bg-stone-100'
                              }`}
                              onClick={(e) => {
                                if (!isAvailable) e.preventDefault()
                              }}
                            >
                              <span className="text-2xl">{store.icon}</span>
                              <span className="text-[10px] text-stone-600">{store.name}</span>
                            </a>
                          )
                        })}
                      </div>
                    </>
                  ) : (
                    <div className="text-center">
                      <div className="bg-amber-50 rounded-lg p-3 mb-3">
                        <p className="text-amber-800 font-semibold text-sm">$25.00 + shipping</p>
                        <p className="text-xs text-amber-600">Signed by the author</p>
                      </div>
                      <button
                        onClick={() => handleCustomOrder(book)}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition shadow-md text-sm"
                      >
                        📝 Pre-Order Signed Copy
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Donation Note */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <p className="text-emerald-700 text-sm">
              🌳 <strong>Giving Back:</strong> All proceeds from direct book sales (pre-orders) are donated to the Pleasant Hill Cemetery preservation fund.
            </p>
          </div>
        </div>

        {/* Back Button */}
        {/* <div className="text-center mt-10">
          <button
            onClick={onBackToHome}
            className="text-stone-600 hover:text-amber-600 transition flex items-center gap-2 mx-auto group text-sm"
          >
            <span className="group-hover:-translate-x-1 transition">←</span>
            Back to Author Website
          </button>
        </div> */}
      </div>

      {/* Order Modal - Same modal for any book */}
      {showOrderModal && selectedBookForOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-stone-200 p-4 flex justify-between items-center">
              <h3 className="text-xl font-serif font-bold text-stone-800">Pre-Order: {selectedBookForOrder.title}</h3>
              <button 
                onClick={() => setShowOrderModal(false)}
                className="text-stone-400 hover:text-stone-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-4">
              {orderStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">✅</div>
                  <p className="text-green-600 font-semibold">Order request sent!</p>
                  <p className="text-stone-500 text-sm mt-2">Danny will contact you shortly to arrange payment and shipping.</p>
                </div>
              ) : (
                <form onSubmit={handleOrderSubmit}>
                  <div className="bg-amber-50 p-3 rounded-lg mb-4 text-center">
                    <p className="text-amber-800 font-semibold">$25.00 per book + shipping</p>
                    <p className="text-xs text-amber-600">All proceeds go to Pleasant Hill Cemetery</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={orderForm.name}
                        onChange={(e) => updateOrderForm('name', e.target.value)}
                        className="w-full border border-stone-300 rounded-lg p-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={orderForm.email}
                        onChange={(e) => updateOrderForm('email', e.target.value)}
                        className="w-full border border-stone-300 rounded-lg p-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Phone Number <span className="text-stone-400 text-xs font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={orderForm.phone}
                        onChange={(e) => updateOrderForm('phone', e.target.value)}
                        placeholder="(123) 456-7890"
                        className="w-full border border-stone-300 rounded-lg p-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                      <p className="text-xs text-stone-400 mt-1">In case we need to reach you about your order</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Shipping Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={orderForm.address}
                        onChange={(e) => updateOrderForm('address', e.target.value)}
                        placeholder="Street address, city, state, ZIP code"
                        className="w-full border border-stone-300 rounded-lg p-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Quantity <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        required
                        value={orderForm.quantity}
                        onChange={(e) => updateOrderForm('quantity', parseInt(e.target.value) || 1)}
                        className="w-full border border-stone-300 rounded-lg p-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Special Requests (optional)</label>
                      <textarea
                        rows={2}
                        value={orderForm.specialRequests}
                        onChange={(e) => updateOrderForm('specialRequests', e.target.value)}
                        placeholder="Inscription requests, gift message, etc."
                        className="w-full border border-stone-300 rounded-lg p-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-stone-50 rounded-lg">
                    <p className="text-xs text-stone-500 mb-2">📧 How it works:</p>
                    <ol className="text-xs text-stone-500 list-decimal list-inside space-y-1">
                      <li>Submit this form to open your email app</li>
                      <li>Review and send the pre-filled email</li>
                      <li>Danny will reply with payment instructions (Venmo, PayPal, or check)</li>
                      <li>Your signed copy will ship once payment is received</li>
                    </ol>
                  </div>
                  
                  <div className="flex gap-3 mt-4">
                    <button
                      type="button"
                      onClick={() => setShowOrderModal(false)}
                      className="flex-1 border border-stone-300 text-stone-600 py-2 rounded-lg hover:bg-stone-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 font-semibold"
                    >
                      Send Order Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StorePage