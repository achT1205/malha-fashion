export const ProductService = {
    getProductsData() {
        return [
            {
              id: 1,
              name: 'Thalssa',
              price: '75',
              code: 'f230fh0g3',
              genderCategory: { name: 'woman', label: 'Femme' },
              image: {
                alt: 'Thalssa',
                src: '/images/products/1/red/1.png'
              },
              colors: [
                {
                  name: 'Red',
                  class: 'bg-red-700',
                  selectedClass: 'ring-red-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '78',
                  sizes: [
                    { name: 'XXS', quantity: 5 },
                    { name: 'XS', quantity: 2 },
                    { name: 'S', quantity: 6 },
                    { name: 'M', quantity: 0 }
                  ],
                  images: [
                    {
                      src: '/images/products/1/red/1.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/1/red/2.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/1/red/3.png',
                      alt: 'Model wearing plain white basic tee.'
                    },
                    {
                      src: '/images/products/1/red/4.png',
                      alt: 'Thalssa rouge ...'
                    }
                  ]
                },
                {
                  name: 'Pink',
                  class: 'bg-pink-200',
                  selectedClass: 'ring-pink-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '81',
          
                  sizes: [
                    { name: 'XXS', quantity: 2 },
                    { name: 'S', quantity: 6 },
                    { name: 'M', quantity: 0 }
                  ],
                  images: [
                    {
                      src: '/images/products/1/pink/1.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/1/pink/2.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/1/pink/3.png',
                      alt: 'Model wearing plain white basic tee.'
                    },
                    {
                      src: '/images/products/1/pink/4.png',
                      alt: 'Thalssa rouge ...'
                    }
                  ]
                },
                {
                  name: 'Green',
                  class: 'bg-green-200',
                  selectedClass: 'ring-green-900',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '78',
          
                  sizes: [
                    { name: 'XXS', quantity: 2 },
                    { name: 'XS', quantity: 1 },
                    { name: 'S', quantity: 2 },
                    { name: 'XXL', quantity: 2 },
                    { name: 'XXXL', quantity: 0 }
                  ],
                  images: [
                    {
                      src: '/images/products/1/green/4.png',
                      alt: 'Thalssa rouge ...'
                    },
                    {
                      src: '/images/products/1/green/1.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/1/green/2.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/1/green/3.png',
                      alt: 'Model wearing plain white basic tee.'
                    }
                  ]
                }
              ],
              category: {
                id: 5,
                name: 'dress',
                label: 'Robe de fete'
              },
              collection: {
                id: 1,
                name: 'Berbère Éclat ',
                image: {
                  src: '/images/collections/dresses/1.png',
                  alt: 'BRobe de Fête '
                },
                description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
              },
              description:
                'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
              details: [
                {
                  name: 'Highlights',
                  items: [
                    'Hand cut and sewn locally',
                    'Dyed with our proprietary colors',
                    'Pre-washed & pre-shrunk',
                    'Ultra-soft 100% cotton'
                  ]
                },
                {
                  name: 'Shipping',
                  items: [
                    'Free shipping on orders over $300',
                    'International shipping available',
                    'Expedited shipping options',
                    'Signature required upon delivery'
                  ]
                },
                {
                  name: 'Returns',
                  items: [
                    'Easy return requests',
                    'Pre-paid shipping label included',
                    '10% restocking fee for returns',
                    '60 day return window'
                  ]
                }
              ]
            },
            {
              id: 2,
              name: 'Thalssa',
              price: '75',
              code: 'f230fh0g3',
              genderCategory: { name: 'man', label: 'Homme' },
          
              image: {
                alt: 'Thalssa',
                src: '/images/products/2/golden/1.png'
              },
              colors: [
                {
                  name: 'Golden',
                  class: 'bg-yellow-700',
                  selectedClass: 'ring-yellow-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '78',
                  sizes: [
                    { name: 'XXS', quantity: 2 },
                    { name: 'XS', quantity: 2 },
                    { name: 'S', quantity: 1 },
                    { name: 'M', quantity: 0 }
                  ],
                  images: [
                    {
                      src: '/images/products/2/golden/1.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/2/golden/2.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/2/golden/3.png',
                      alt: 'Model wearing plain white basic tee.'
                    },
                    {
                      src: '/images/products/2/golden/4.png',
                      alt: 'Thalssa rouge ...'
                    }
                  ]
                }
              ],

              category: {
                id: 5,
                name: 'dress',
                label: 'Robe de fete'
              },
              collection: {
                id: 1,
                name: 'Berbère Éclat ',
                image: {
                  src: '/images/collections/dresses/1.png',
                  alt: 'BRobe de Fête '
                },
                description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
              },
              description:
                'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
              details: [
                {
                  name: 'Highlights',
                  items: [
                    'Hand cut and sewn locally',
                    'Dyed with our proprietary colors',
                    'Pre-washed & pre-shrunk',
                    'Ultra-soft 100% cotton'
                  ]
                },
                {
                  name: 'Shipping',
                  items: [
                    'Free shipping on orders over $300',
                    'International shipping available',
                    'Expedited shipping options',
                    'Signature required upon delivery'
                  ]
                },
                {
                  name: 'Returns',
                  items: [
                    'Easy return requests',
                    'Pre-paid shipping label included',
                    '10% restocking fee for returns',
                    '60 day return window'
                  ]
                }
              ]
            },
            {
              id: 3,
              name: 'Elegancia',
              price: '75',
              code: 'f230fh0g3',
              genderCategory: { name: 'girl', label: 'Fille' },
          
              image: {
                alt: 'Elegancia',
                src: '/images/products/3/golden/1.png'
              },
              colors: [
                {
                  name: 'Golden',
                  class: 'bg-yellow-700',
                  selectedClass: 'ring-yellow-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '78',
                  sizes: [
                    { name: 'XXS', quantity: 5 },
                    { name: 'XS', quantity: 2 },
                    { name: 'S', quantity: 6 },
                    { name: 'M', quantity: 0 }
                  ],
                  images: [
                    {
                      src: '/images/products/3/golden/1.png',
                      alt: 'Thalssa rouge ...'
                    },
                    {
                      src: '/images/products/3/golden/1.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/3/golden/1.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/3/golden/1.png',
                      alt: 'Model wearing plain white basic tee.'
                    }
                  ]
                },
                {
                  name: 'White',
                  class: 'bg-white-200',
                  selectedClass: 'ring-gray-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '81',
          
                  sizes: [
                    { name: 'XXS', quantity: 2 },
                    { name: 'S', quantity: 6 },
                    { name: 'M', quantity: 0 }
                  ],
                  images: [
                    {
                      src: '/images/products/3/white/1.png',
                      alt: 'Thalssa rouge ...'
                    },
                    {
                      src: '/images/products/3/white/2.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/3/white/3.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/3/white/4.png',
                      alt: 'Model wearing plain white basic tee.'
                    }
                  ]
                }
              ],

              category: {
                id: 5,
                name: 'dress',
                label: 'Robe de fete'
              },
              collection: {
                id: 1,
                name: 'Berbère Éclat ',
                image: {
                  src: '/images/collections/dresses/1.png',
                  alt: 'BRobe de Fête '
                },
                description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
              },
              description:
                'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
              details: [
                {
                  name: 'Highlights',
                  items: [
                    'Hand cut and sewn locally',
                    'Dyed with our proprietary colors',
                    'Pre-washed & pre-shrunk',
                    'Ultra-soft 100% cotton'
                  ]
                },
                {
                  name: 'Shipping',
                  items: [
                    'Free shipping on orders over $300',
                    'International shipping available',
                    'Expedited shipping options',
                    'Signature required upon delivery'
                  ]
                },
                {
                  name: 'Returns',
                  items: [
                    'Easy return requests',
                    'Pre-paid shipping label included',
                    '10% restocking fee for returns',
                    '60 day return window'
                  ]
                }
              ]
            },
            {
              id: 4,
              name: 'Thalssa',
              price: '75',
              code: 'f230fh0g3',
              genderCategory: { name: 'boy', label: 'Garcon' },
          
              image: {
                alt: 'Thalssa',
                src: '/images/products/1/red/1.png'
              },
              colors: [
                {
                  name: 'Red',
                  class: 'bg-red-700',
                  selectedClass: 'ring-red-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '78',
                  sizes: [
                    { name: 'XXS', quantity: 5 },
                    { name: 'XS', quantity: 2 },
                    { name: 'S', quantity: 6 },
                    { name: 'M', quantity: 0 }
                  ],
                  images: [
                    {
                      src: '/images/products/1/red/1.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/1/red/2.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/1/red/3.png',
                      alt: 'Model wearing plain white basic tee.'
                    },
                    {
                      src: '/images/products/1/red/4.png',
                      alt: 'Thalssa rouge ...'
                    }
                  ]
                },
                {
                  name: 'Pink',
                  class: 'bg-pink-200',
                  selectedClass: 'ring-pink-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '81',
          
                  sizes: [
                    { name: 'XXS', quantity: 2 },
                    { name: 'S', quantity: 6 },
                    { name: 'M', quantity: 0 }
                  ],
                  images: [
                    {
                      src: '/images/products/1/pink/1.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/1/pink/2.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/1/pink/3.png',
                      alt: 'Model wearing plain white basic tee.'
                    },
                    {
                      src: '/images/products/1/pink/4.png',
                      alt: 'Thalssa rouge ...'
                    }
                  ]
                },
                {
                  name: 'Green',
                  class: 'bg-green-200',
                  selectedClass: 'ring-green-900',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '78',
          
                  sizes: [
                    { name: 'XXS', quantity: 2 },
                    { name: 'XS', quantity: 1 },
                    { name: 'S', quantity: 2 },
                    { name: 'XXL', quantity: 2 },
                    { name: 'XXXL', quantity: 0 }
                  ],
                  images: [
                    {
                      src: '/images/products/1/green/1.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/1/green/2.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/1/green/3.png',
                      alt: 'Model wearing plain white basic tee.'
                    },
                    {
                      src: '/images/products/1/green/4.png',
                      alt: 'Thalssa rouge ...'
                    }
                  ]
                }
              ],

              category: {
                id: 5,
                name: 'dress',
                label: 'Robe de fete'
              },
              collection: {
                id: 1,
                name: 'Berbère Éclat ',
                image: {
                  src: '/images/collections/dresses/1.png',
                  alt: 'BRobe de Fête '
                },
                description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
              },
              description:
                'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
              details: [
                {
                  name: 'Highlights',
                  items: [
                    'Hand cut and sewn locally',
                    'Dyed with our proprietary colors',
                    'Pre-washed & pre-shrunk',
                    'Ultra-soft 100% cotton'
                  ]
                },
                {
                  name: 'Shipping',
                  items: [
                    'Free shipping on orders over $300',
                    'International shipping available',
                    'Expedited shipping options',
                    'Signature required upon delivery'
                  ]
                },
                {
                  name: 'Returns',
                  items: [
                    'Easy return requests',
                    'Pre-paid shipping label included',
                    '10% restocking fee for returns',
                    '60 day return window'
                  ]
                }
              ]
            },
            {
              id: 5,
              name: 'Thalssa',
              price: '75',
              code: 'f230fh0g3',
              genderCategory: { name: 'woman', label: 'Femme' },
              image: {
                alt: 'Thalssa',
                src: '/images/products/2/golden/1.png'
              },
              colors: [
                {
                  name: 'Red',
                  class: 'bg-red-700',
                  selectedClass: 'ring-red-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '78',
                  sizes: [
                    { name: 'XXS', quantity: 2 },
                    { name: 'XS', quantity: 2 },
                    { name: 'S', quantity: 1 },
                    { name: 'M', quantity: 0 }
                  ],
                  images: [
                    {
                      src: '/images/products/2/golden/1.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/2/golden/2.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/2/golden/3.png',
                      alt: 'Model wearing plain white basic tee.'
                    },
                    {
                      src: '/images/products/2/golden/4.png',
                      alt: 'Thalssa rouge ...'
                    }
                  ]
                }
              ],

              category: {
                id: 5,
                name: 'dress',
                label: 'Robe de fete'
              },
              collection: {
                id: 1,
                name: 'Berbère Éclat ',
                image: {
                  src: '/images/collections/dresses/1.png',
                  alt: 'BRobe de Fête '
                },
                description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
              },
              description:
                'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
              details: [
                {
                  name: 'Highlights',
                  items: [
                    'Hand cut and sewn locally',
                    'Dyed with our proprietary colors',
                    'Pre-washed & pre-shrunk',
                    'Ultra-soft 100% cotton'
                  ]
                },
                {
                  name: 'Shipping',
                  items: [
                    'Free shipping on orders over $300',
                    'International shipping available',
                    'Expedited shipping options',
                    'Signature required upon delivery'
                  ]
                },
                {
                  name: 'Returns',
                  items: [
                    'Easy return requests',
                    'Pre-paid shipping label included',
                    '10% restocking fee for returns',
                    '60 day return window'
                  ]
                }
              ]
            },
            {
              id: 6,
              name: 'Thalssa',
              price: '75',
              code: 'f230fh0g3',
              genderCategory: { name: 'woman', label: 'Femme' },
              image: {
                alt: 'Thalssa',
                src: '/images/products/4/red/1.png'
              },
              colors: [
                {
                  name: 'Red',
                  class: 'bg-red-700',
                  selectedClass: 'ring-red-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '78',
                  quantity: 4,
                  sizes: null,
                  images: [
                    {
                      src: '/images/products/4/red/1.png',
                      alt: 'Thalssa rouge ...'
                    },
                    {
                      src: '/images/products/4/red/2.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/4/red/3.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/4/red/4.png',
                      alt: 'Model wearing plain white basic tee.'
                    }
                  ]
                },
                {
                  name: 'Pink',
                  class: 'bg-pink-200',
                  selectedClass: 'ring-pink-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '81',
                  quantity: 0,
                  sizes: null,
                  images: [
                    {
                      src: '/images/products/4/red/2.png',
                      alt: 'Thalssa rouge ...'
                    },
                    {
                      src: '/images/products/4/red/2.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/4/red/2.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/4/red/2.png',
                      alt: 'Model wearing plain white basic tee.'
                    }
                  ]
                }
              ],

              category: {
                id: 5,
                name: 'bag',
                label: 'Sac '
              },
              collection: {
                id: 1,
                name: 'Berbère Éclat ',
                image: {
                  src: '/images/collections/dresses/1.png',
                  alt: 'BRobe de Fête '
                },
                description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
              },
              description:
                'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
              details: [
                {
                  name: 'Highlights',
                  items: [
                    'Hand cut and sewn locally',
                    'Dyed with our proprietary colors',
                    'Pre-washed & pre-shrunk',
                    'Ultra-soft 100% cotton'
                  ]
                },
                {
                  name: 'Shipping',
                  items: [
                    'Free shipping on orders over $300',
                    'International shipping available',
                    'Expedited shipping options',
                    'Signature required upon delivery'
                  ]
                },
                {
                  name: 'Returns',
                  items: [
                    'Easy return requests',
                    'Pre-paid shipping label included',
                    '10% restocking fee for returns',
                    '60 day return window'
                  ]
                }
              ]
            },
            {
              id: 7,
              name: 'Thalssa',
              price: '75',
              code: 'f230fh0g3',
              genderCategory: { name: 'woman', label: 'Femme' },
          
              image: {
                alt: 'Thalssa',
                src: '/images/products/4/red/2.png'
              },
              colors: [
                {
                  name: 'Red',
                  class: 'bg-red-700',
                  selectedClass: 'ring-red-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '78',
                  quantity: 4,
                  sizes: null,
                  images: [
                    {
                      src: '/images/products/4/red/2.png',
          
                      alt: 'Thalssa rouge ...'
                    },
                    {
                      src: '/images/products/4/red/2.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/4/red/2.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/4/red/2.png',
                      alt: 'Model wearing plain white basic tee.'
                    }
                  ]
                },
                {
                  name: 'Pink',
                  class: 'bg-pink-200',
                  selectedClass: 'ring-pink-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '81',
                  quantity: 4,
                  sizes: null,
                  images: [
                    {
                      src: '/images/products/4/red/1.png',
                      alt: 'Thalssa rouge ...'
                    },
                    {
                      src: '/images/products/4/red/1.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/4/red/1.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/4/red/1.png',
                      alt: 'Model wearing plain white basic tee.'
                    }
                  ]
                }
              ],

              category: {
                id: 5,
                name: 'bag',
                label: 'Sac à main'
              },
              collection: {
                id: 1,
                name: 'Berbère Éclat ',
                image: {
                  src: '/images/collections/dresses/1.png',
                  alt: 'BRobe de Fête '
                },
                description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
              },
              description:
                'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
              details: [
                {
                  name: 'Highlights',
                  items: [
                    'Hand cut and sewn locally',
                    'Dyed with our proprietary colors',
                    'Pre-washed & pre-shrunk',
                    'Ultra-soft 100% cotton'
                  ]
                },
                {
                  name: 'Shipping',
                  items: [
                    'Free shipping on orders over $300',
                    'International shipping available',
                    'Expedited shipping options',
                    'Signature required upon delivery'
                  ]
                },
                {
                  name: 'Returns',
                  items: [
                    'Easy return requests',
                    'Pre-paid shipping label included',
                    '10% restocking fee for returns',
                    '60 day return window'
                  ]
                }
              ]
            },
            {
              id: 8,
              name: 'Thalssa',
              price: '75',
              code: 'f230fh0g3',
              genderCategory: { name: 'woman', label: 'Femme' },
          
              image: {
                alt: 'Thalssa',
                src: '/images/products/4/red/3.png'
              },
              colors: [
                {
                  name: 'Red',
                  class: 'bg-red-700',
                  selectedClass: 'ring-red-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '78',
                  quantity: 4,
                  sizes: null,
                  images: [
                    {
                      src: '/images/products/4/red/3.png',
                      alt: 'Thalssa rouge ...'
                    },
                    {
                      src: '/images/products/4/red/3.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/4/red/3.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/4/red/3.png',
                      alt: 'Model wearing plain white basic tee.'
                    }
                  ]
                },
                {
                  name: 'Pink',
                  class: 'bg-pink-200',
                  selectedClass: 'ring-pink-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '81',
                  quantity: 4,
                  sizes: null,
                  images: [
                    {
                      src: '/images/products/4/red/4.png',
                      alt: 'Thalssa rouge ...'
                    },
                    {
                      src: '/images/products/4/red/4.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/4/red/4.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/4/red/4.png',
                      alt: 'Model wearing plain white basic tee.'
                    }
                  ]
                }
              ],

              category: {
                id: 5,
                name: 'accessory',
                label: 'Colier '
              },
              collection: {
                id: 1,
                name: 'Berbère Éclat ',
                image: {
                  src: '/images/collections/dresses/1.png',
                  alt: 'BRobe de Fête '
                },
                description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
              },
              description:
                'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
              details: [
                {
                  name: 'Highlights',
                  items: [
                    'Hand cut and sewn locally',
                    'Dyed with our proprietary colors',
                    'Pre-washed & pre-shrunk',
                    'Ultra-soft 100% cotton'
                  ]
                },
                {
                  name: 'Shipping',
                  items: [
                    'Free shipping on orders over $300',
                    'International shipping available',
                    'Expedited shipping options',
                    'Signature required upon delivery'
                  ]
                },
                {
                  name: 'Returns',
                  items: [
                    'Easy return requests',
                    'Pre-paid shipping label included',
                    '10% restocking fee for returns',
                    '60 day return window'
                  ]
                }
              ]
            },
            {
              id: 9,
              name: 'Thalssa',
              price: '75',
              code: 'f230fh0g3',
              genderCategory: { name: 'woman', label: 'Femme' },
          
              image: {
                alt: 'Thalssa',
                src: '/images/products/4/red/4.png'
              },
              colors: [
                {
                  name: 'Red',
                  class: 'bg-red-700',
                  selectedClass: 'ring-red-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '78',
                  quantity: 0,
                  sizes: null,
                  images: [
                    {
                      src: '/images/products/4/red/4.png',
                      alt: 'Thalssa rouge ...'
                    },
                    {
                      src: '/images/products/4/red/4.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/4/red/4.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/4/red/4.png',
                      alt: 'Model wearing plain white basic tee.'
                    }
                  ]
                },
                {
                  name: 'Pink',
                  class: 'bg-pink-200',
                  selectedClass: 'ring-pink-400',
                  reviews: { href: '#', average: 4, totalCount: 117 },
                  price: '81',
                  quantity: 0,
                  sizes: null,
                  images: [
                    {
                      src: '/images/products/4/red/3.png',
                      alt: 'Thalssa rouge ...'
                    },
                    {
                      src: '/images/products/4/red/3.png',
                      alt: 'Model wearing plain black basic tee.'
                    },
                    {
                      src: '/images/products/4/red/3.png',
                      alt: 'Model wearing plain gray basic tee.'
                    },
                    {
                      src: '/images/products/4/red/3.png',
                      alt: 'Model wearing plain white basic tee.'
                    }
                  ]
                }
              ],

              category: {
                id: 5,
                name: 'accessory',
                label: 'Colier'
              },
              collection: {
                id: 1,
                name: 'Berbère Éclat ',
                image: {
                  src: '/images/collections/dresses/1.png',
                  alt: 'BRobe de Fête '
                },
                description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
              },
              description:
                'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
              details: [
                {
                  name: 'Highlights',
                  items: [
                    'Hand cut and sewn locally',
                    'Dyed with our proprietary colors',
                    'Pre-washed & pre-shrunk',
                    'Ultra-soft 100% cotton'
                  ]
                },
                {
                  name: 'Shipping',
                  items: [
                    'Free shipping on orders over $300',
                    'International shipping available',
                    'Expedited shipping options',
                    'Signature required upon delivery'
                  ]
                },
                {
                  name: 'Returns',
                  items: [
                    'Easy return requests',
                    'Pre-paid shipping label included',
                    '10% restocking fee for returns',
                    '60 day return window'
                  ]
                }
              ]
            }
          ]
    },
    getCollectionsData(){
        return [
            {
              id: 1,
              name: 'Berbère Éclat ',
              image: {
                src: '/images/collections/1.png',
                alt: 'BRobe de Fête '
              },
              description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
            },
            {
              id: 2,
              name: 'Montagnes de Djurdjura',
              image: {
                src: '/images/collections/2.png',
                alt: 'BRobe de Fête '
              },
              description: `Évoquant les sommets majestueux et le patrimoine robuste de la Kabylie.`
            },
            {
              id: 3,
              name: 'Lune de Kabylie',
              image: {
                src: '/images/collections/3.png',
                alt: 'BRobe de Fête '
              },
              description: `Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels.`
            },
            {
              id: 4,
              name: 'Azur Amazigh ',
              image: {
                src: '/images/collections/4.png',
                alt: 'BRobe de Fête '
              },
              description: `Soulignant la beauté et la profondeur des couleurs souvent utilisées dans les tenues kabyles, avec un clin d'œil à l'identité amazighe.`
            },
            {
              id: 5,
              name: 'Echo des Aït',
              image: {
                src: '/images/collections/5.png',
                alt: 'BRobe de Fête '
              },
              description: `Rendant hommage aux tribus Aït de Kabylie, ce nom reflète la transmission des traditions et des savoir-faire ancestraux.`
            },
            {
              id: 6,
              name: 'Souveraines Berbères',
              image: {
                src: '/images/collections/6.png',
                alt: 'BRobe de Fête '
              },
              description: `Célébrant les figures féminines puissantes de l'histoire kabyle, cette collection allie force et finesse dans chaque pièce.`
            },
            {
              id: 7,
              name: 'Jardin de Numidie ',
              image: {
                src: '/images/collections/7.png',
                alt: 'BRobe de Fête '
              },
              description: `Inspirée par l'histoire et la nature de Kabylie, cette collection intègre des motifs floraux et des éléments naturels.`
            },
            {
              id: 8,
              name: 'Voile de Yemma Gouraya',
              image: {
                src: '/images/collections/8.png',
                alt: 'BRobe de Fête '
              },
              description: `Inspiré par la légendaire montagne qui surplombe la ville de Béjaïa, symbolisant protection et majesté.`
            },
            {
              id: 9,
              name: `Jardins d'Agadez`,
              image: {
                src: '/images/collections/9.png',
                alt: 'BRobe de Fête '
              },
              description: `Évoquant les designs floraux et organiques typiques de la bijouterie kabyle, cette collection rend hommage à la nature et à la fertilité des terres berbères.`
            }
          ]
    },
    getFilterOptionsData(){
      return   [
        {
          id: 'color',
          name: 'Couleur',
          options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: false },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false }
          ]
        },
        {
          id: 'category',
          name: 'Catégorie',
          options: [
            { value: 'new-arrivals', label: 'Nouvaux', checked: false },
            { value: 'sale', label: 'Promo', checked: false },
            { value: 'dresses', label: 'Robes', checked: false },
            { value: 'burnous', label: 'Burnous', checked: false },
            { value: 'bags', label: 'Sacs', checked: false },
            { value: 'joularies', label: 'Bijoux', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
            { value: 'selebration', label: 'Fete', checked: false },
            { value: 'house', label: 'Maison', checked: false },
            { value: 'casual', label: 'Décontracté', checked: false }
          ]
        },
        {
          id: 'size',
          name: 'Taile',
          options: [
            { value: 'standard', label: 'Standard', checked: false },
            { value: 'big', label: 'Grande Taille', checked: false },
            { value: 's-m', label: 'S/M', checked: false },
            { value: 'm-l', label: 'M/L', checked: false },
            { value: 'l-xl', label: 'L/XL', checked: false },
            { value: 'xl-xxl', label: 'XL/XXL', checked: false },
            { value: 's', label: 'S', checked: false },
            { value: 'm', label: 'M', checked: false },
            { value: 'l', label: 'L', checked: false },
            { value: 'xl', label: 'XL', checked: false },
            { value: 'xxl', label: 'XXL', checked: false }
          ]
        }
      ]
    },
    getSortOptionsData(){
      return [
        { name: 'Most Popular', href: '#', current: false },
        { name: 'Best Rating', href: '#', current: false },
        { name: 'Newest', href: '#', current: false },
        { name: 'Price: Low to High', href: '#', current: false },
        { name: 'Price: High to Low', href: '#', current: false }
      ]
    },
    getFilterOptions() {
        return Promise.resolve(this.getFilterOptionsData());
    },
    getSortOptions() {
      return Promise.resolve(this.getSortOptionsData());
    },

    getProductsWithOrdersData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1000-0',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 65,
                        quantity: 1,
                        customer: 'David James',
                        status: 'PENDING'
                    },
                    {
                        id: '1000-1',
                        productCode: 'f230fh0g3',
                        date: '2020-05-14',
                        amount: 130,
                        quantity: 2,
                        customer: 'Leon Rodrigues',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1000-2',
                        productCode: 'f230fh0g3',
                        date: '2019-01-04',
                        amount: 65,
                        quantity: 1,
                        customer: 'Juan Alejandro',
                        status: 'RETURNED'
                    },
                    {
                        id: '1000-3',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 195,
                        quantity: 3,
                        customer: 'Claire Morrow',
                        status: 'CANCELLED'
                    }
                ]
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Black Watch',
                description: 'Product Description',
                image: 'black-watch.jpg',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1001-0',
                        productCode: 'nvklal433',
                        date: '2020-05-14',
                        amount: 72,
                        quantity: 1,
                        customer: 'Maisha Jefferson',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1001-1',
                        productCode: 'nvklal433',
                        date: '2020-02-28',
                        amount: 144,
                        quantity: 2,
                        customer: 'Octavia Murillo',
                        status: 'PENDING'
                    }
                ]
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Blue Band',
                description: 'Product Description',
                image: 'blue-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1002-0',
                        productCode: 'zz21cz3c1',
                        date: '2020-07-05',
                        amount: 79,
                        quantity: 1,
                        customer: 'Stacey Leja',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1002-1',
                        productCode: 'zz21cz3c1',
                        date: '2020-02-06',
                        amount: 79,
                        quantity: 1,
                        customer: 'Ashley Wickens',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Blue T-Shirt',
                description: 'Product Description',
                image: 'blue-t-shirt.jpg',
                price: 29,
                category: 'Clothing',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: []
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Bracelet',
                description: 'Product Description',
                image: 'bracelet.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1004-0',
                        productCode: 'h456wer53',
                        date: '2020-09-05',
                        amount: 60,
                        quantity: 4,
                        customer: 'Mayumi Misaki',
                        status: 'PENDING'
                    },
                    {
                        id: '1004-1',
                        productCode: 'h456wer53',
                        date: '2019-04-16',
                        amount: 2,
                        quantity: 30,
                        customer: 'Francesco Salvatore',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1005',
                code: 'av2231fwg',
                name: 'Brown Purse',
                description: 'Product Description',
                image: 'brown-purse.jpg',
                price: 120,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1005-0',
                        productCode: 'av2231fwg',
                        date: '2020-01-25',
                        amount: 120,
                        quantity: 1,
                        customer: 'Isabel Sinclair',
                        status: 'RETURNED'
                    },
                    {
                        id: '1005-1',
                        productCode: 'av2231fwg',
                        date: '2019-03-12',
                        amount: 240,
                        quantity: 2,
                        customer: 'Lionel Clifford',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1005-2',
                        productCode: 'av2231fwg',
                        date: '2019-05-05',
                        amount: 120,
                        quantity: 1,
                        customer: 'Cody Chavez',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1006',
                code: 'bib36pfvm',
                name: 'Chakra Bracelet',
                description: 'Product Description',
                image: 'chakra-bracelet.jpg',
                price: 32,
                category: 'Accessories',
                quantity: 5,
                inventoryStatus: 'LOWSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1006-0',
                        productCode: 'bib36pfvm',
                        date: '2020-02-24',
                        amount: 32,
                        quantity: 1,
                        customer: 'Arvin Darci',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1006-1',
                        productCode: 'bib36pfvm',
                        date: '2020-01-14',
                        amount: 64,
                        quantity: 2,
                        customer: 'Izzy Jones',
                        status: 'PENDING'
                    }
                ]
            },
            {
                id: '1007',
                code: 'mbvjkgip5',
                name: 'Galaxy Earrings',
                description: 'Product Description',
                image: 'galaxy-earrings.jpg',
                price: 34,
                category: 'Accessories',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1007-0',
                        productCode: 'mbvjkgip5',
                        date: '2020-06-19',
                        amount: 34,
                        quantity: 1,
                        customer: 'Jennifer Smith',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1008',
                code: 'vbb124btr',
                name: 'Game Controller',
                description: 'Product Description',
                image: 'game-controller.jpg',
                price: 99,
                category: 'Electronics',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1008-0',
                        productCode: 'vbb124btr',
                        date: '2020-01-05',
                        amount: 99,
                        quantity: 1,
                        customer: 'Jeanfrancois David',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1008-1',
                        productCode: 'vbb124btr',
                        date: '2020-01-19',
                        amount: 198,
                        quantity: 2,
                        customer: 'Ivar Greenwood',
                        status: 'RETURNED'
                    }
                ]
            },
            {
                id: '1009',
                code: 'cm230f032',
                name: 'Gaming Set',
                description: 'Product Description',
                image: 'gaming-set.jpg',
                price: 299,
                category: 'Electronics',
                quantity: 63,
                inventoryStatus: 'INSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1009-0',
                        productCode: 'cm230f032',
                        date: '2020-06-24',
                        amount: 299,
                        quantity: 1,
                        customer: 'Kadeem Mujtaba',
                        status: 'PENDING'
                    },
                    {
                        id: '1009-1',
                        productCode: 'cm230f032',
                        date: '2020-05-11',
                        amount: 299,
                        quantity: 1,
                        customer: 'Ashley Wickens',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1009-2',
                        productCode: 'cm230f032',
                        date: '2019-02-07',
                        amount: 299,
                        quantity: 1,
                        customer: 'Julie Johnson',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1009-3',
                        productCode: 'cm230f032',
                        date: '2020-04-26',
                        amount: 299,
                        quantity: 1,
                        customer: 'Tony Costa',
                        status: 'CANCELLED'
                    }
                ]
            },
            {
                id: '1010',
                code: 'plb34234v',
                name: 'Gold Phone Case',
                description: 'Product Description',
                image: 'gold-phone-case.jpg',
                price: 24,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1010-0',
                        productCode: 'plb34234v',
                        date: '2020-02-04',
                        amount: 24,
                        quantity: 1,
                        customer: 'James Butt',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1010-1',
                        productCode: 'plb34234v',
                        date: '2020-05-05',
                        amount: 48,
                        quantity: 2,
                        customer: 'Josephine Darakjy',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1011',
                code: '4920nnc2d',
                name: 'Green Earbuds',
                description: 'Product Description',
                image: 'green-earbuds.jpg',
                price: 89,
                category: 'Electronics',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1011-0',
                        productCode: '4920nnc2d',
                        date: '2020-06-01',
                        amount: 89,
                        quantity: 1,
                        customer: 'Art Venere',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1012',
                code: '250vm23cc',
                name: 'Green T-Shirt',
                description: 'Product Description',
                image: 'green-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 74,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1012-0',
                        productCode: '250vm23cc',
                        date: '2020-02-05',
                        amount: 49,
                        quantity: 1,
                        customer: 'Lenna Paprocki',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1012-1',
                        productCode: '250vm23cc',
                        date: '2020-02-15',
                        amount: 49,
                        quantity: 1,
                        customer: 'Donette Foller',
                        status: 'PENDING'
                    }
                ]
            },
            {
                id: '1013',
                code: 'fldsmn31b',
                name: 'Grey T-Shirt',
                description: 'Product Description',
                image: 'grey-t-shirt.jpg',
                price: 48,
                category: 'Clothing',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1013-0',
                        productCode: 'fldsmn31b',
                        date: '2020-04-01',
                        amount: 48,
                        quantity: 1,
                        customer: 'Simona Morasca',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1014',
                code: 'waas1x2as',
                name: 'Headphones',
                description: 'Product Description',
                image: 'headphones.jpg',
                price: 175,
                category: 'Electronics',
                quantity: 8,
                inventoryStatus: 'LOWSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1014-0',
                        productCode: 'waas1x2as',
                        date: '2020-05-15',
                        amount: 175,
                        quantity: 1,
                        customer: 'Lenna Paprocki',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1014-1',
                        productCode: 'waas1x2as',
                        date: '2020-01-02',
                        amount: 175,
                        quantity: 1,
                        customer: 'Donette Foller',
                        status: 'CANCELLED'
                    }
                ]
            },
            {
                id: '1015',
                code: 'vb34btbg5',
                name: 'Light Green T-Shirt',
                description: 'Product Description',
                image: 'light-green-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 34,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1015-0',
                        productCode: 'vb34btbg5',
                        date: '2020-07-02',
                        amount: 98,
                        quantity: 2,
                        customer: 'Mitsue Tollner',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1016',
                code: 'k8l6j58jl',
                name: 'Lime Band',
                description: 'Product Description',
                image: 'lime-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 12,
                inventoryStatus: 'INSTOCK',
                rating: 3,
                orders: []
            },
            {
                id: '1017',
                code: 'v435nn85n',
                name: 'Mini Speakers',
                description: 'Product Description',
                image: 'mini-speakers.jpg',
                price: 85,
                category: 'Clothing',
                quantity: 42,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1017-0',
                        productCode: 'v435nn85n',
                        date: '2020-07-12',
                        amount: 85,
                        quantity: 1,
                        customer: 'Minna Amigon',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1018',
                code: '09zx9c0zc',
                name: 'Painted Phone Case',
                description: 'Product Description',
                image: 'painted-phone-case.jpg',
                price: 56,
                category: 'Accessories',
                quantity: 41,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1018-0',
                        productCode: '09zx9c0zc',
                        date: '2020-07-01',
                        amount: 56,
                        quantity: 1,
                        customer: 'Abel Maclead',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1018-1',
                        productCode: '09zx9c0zc',
                        date: '2020-05-02',
                        amount: 56,
                        quantity: 1,
                        customer: 'Minna Amigon',
                        status: 'RETURNED'
                    }
                ]
            },
            {
                id: '1019',
                code: 'mnb5mb2m5',
                name: 'Pink Band',
                description: 'Product Description',
                image: 'pink-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 63,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: []
            },
            {
                id: '1020',
                code: 'r23fwf2w3',
                name: 'Pink Purse',
                description: 'Product Description',
                image: 'pink-purse.jpg',
                price: 110,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1020-0',
                        productCode: 'r23fwf2w3',
                        date: '2020-05-29',
                        amount: 110,
                        quantity: 1,
                        customer: 'Kiley Caldarera',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1020-1',
                        productCode: 'r23fwf2w3',
                        date: '2020-02-11',
                        amount: 220,
                        quantity: 2,
                        customer: 'Graciela Ruta',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1021',
                code: 'pxpzczo23',
                name: 'Purple Band',
                description: 'Product Description',
                image: 'purple-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 6,
                inventoryStatus: 'LOWSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1021-0',
                        productCode: 'pxpzczo23',
                        date: '2020-02-02',
                        amount: 79,
                        quantity: 1,
                        customer: 'Cammy Albares',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1022',
                code: '2c42cb5cb',
                name: 'Purple Gemstone Necklace',
                description: 'Product Description',
                image: 'purple-gemstone-necklace.jpg',
                price: 45,
                category: 'Accessories',
                quantity: 62,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1022-0',
                        productCode: '2c42cb5cb',
                        date: '2020-06-29',
                        amount: 45,
                        quantity: 1,
                        customer: 'Mattie Poquette',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1022-1',
                        productCode: '2c42cb5cb',
                        date: '2020-02-11',
                        amount: 135,
                        quantity: 3,
                        customer: 'Meaghan Garufi',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1023',
                code: '5k43kkk23',
                name: 'Purple T-Shirt',
                description: 'Product Description',
                image: 'purple-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1023-0',
                        productCode: '5k43kkk23',
                        date: '2020-04-15',
                        amount: 49,
                        quantity: 1,
                        customer: 'Gladys Rim',
                        status: 'RETURNED'
                    }
                ]
            },
            {
                id: '1024',
                code: 'lm2tny2k4',
                name: 'Shoes',
                description: 'Product Description',
                image: 'shoes.jpg',
                price: 64,
                category: 'Clothing',
                quantity: 0,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: []
            },
            {
                id: '1025',
                code: 'nbm5mv45n',
                name: 'Sneakers',
                description: 'Product Description',
                image: 'sneakers.jpg',
                price: 78,
                category: 'Clothing',
                quantity: 52,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1025-0',
                        productCode: 'nbm5mv45n',
                        date: '2020-02-19',
                        amount: 78,
                        quantity: 1,
                        customer: 'Yuki Whobrey',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1025-1',
                        productCode: 'nbm5mv45n',
                        date: '2020-05-21',
                        amount: 78,
                        quantity: 1,
                        customer: 'Fletcher Flosi',
                        status: 'PENDING'
                    }
                ]
            },
            {
                id: '1026',
                code: 'zx23zc42c',
                name: 'Teal T-Shirt',
                description: 'Product Description',
                image: 'teal-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 3,
                inventoryStatus: 'LOWSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1026-0',
                        productCode: 'zx23zc42c',
                        date: '2020-04-24',
                        amount: 98,
                        quantity: 2,
                        customer: 'Bette Nicka',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1027',
                code: 'acvx872gc',
                name: 'Yellow Earbuds',
                description: 'Product Description',
                image: 'yellow-earbuds.jpg',
                price: 89,
                category: 'Electronics',
                quantity: 35,
                inventoryStatus: 'INSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1027-0',
                        productCode: 'acvx872gc',
                        date: '2020-01-29',
                        amount: 89,
                        quantity: 1,
                        customer: 'Veronika Inouye',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1027-1',
                        productCode: 'acvx872gc',
                        date: '2020-06-11',
                        amount: 89,
                        quantity: 1,
                        customer: 'Willard Kolmetz',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1028',
                code: 'tx125ck42',
                name: 'Yoga Mat',
                description: 'Product Description',
                image: 'yoga-mat.jpg',
                price: 20,
                category: 'Fitness',
                quantity: 15,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: []
            },
            {
                id: '1029',
                code: 'gwuby345v',
                name: 'Yoga Set',
                description: 'Product Description',
                image: 'yoga-set.jpg',
                price: 20,
                category: 'Fitness',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 8,
                orders: [
                    {
                        id: '1029-0',
                        productCode: 'gwuby345v',
                        date: '2020-02-14',
                        amount: 4,
                        quantity: 80,
                        customer: 'Maryann Royster',
                        status: 'DELIVERED'
                    }
                ]
            }
        ];
    },
    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 8));
    },
    getCollection(id) {
      return new Promise((resolve, reject)=>{
        const collection = this.getCollectionsData().find(_=>_.id === id)
        if(collection)
        resolve(collection)
        else reject()
     })
    },
    getCollections() {
        return Promise.resolve(this.getCollectionsData());
    },
    getProduct(id) {
      return new Promise((resolve, reject)=>{
            const product = this.getProductsData().find(_=>_.id === id)
            if(product)
            resolve(product)
            else reject()
        })
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

