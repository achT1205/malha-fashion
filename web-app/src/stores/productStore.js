import { defineStore } from 'pinia';
import { ref } from 'vue'


export const useProductStore = defineStore('products', () => {

    const products = ref([])
    const product = ref()
    const loading= ref(false)
    const error = ref(null)

    const fetchProducts =()=>{
        products.value = [
            {
              updatedAt: 1718312207906,
              id: 1,
              collection: {
                imageSrc:
                  'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/collections%2F1718055580716_1.png?alt=media&token=4b2cf17f-0d7c-409a-adf3-a4477ba5603f',
                imagePath: 'collections/1718055580716_1.png',
                name: 'Nouvels arrivés',
                description:
                  "Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels.",
                id: 'Qr6Jr1FczDJQxiGgzNNm'
              },
              occasions: [{ value: 'fete', description: 'Fete', name: 'Fete' }],
              tags: ['Recycling ', 'Green Tech'],
              createAt: 1718295686415,
              status: 'Draft',
              description:
                'Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.',
              material: { value: 'coton', name: 'Coton', description: 'Coton' },
              colors: [
                {
                  slug: 'thalssa-in-red',
                  class: 'text-red-700',
                  price: 55,
                  selectedClass: 'ring-gray-400',
                  name: 'Red',
                  sizes: [
                    { value: 'Medium', name: 'M', description: 'M', quantity: 120 },
                    { name: 'L', value: 'Large', quantity: 110, description: 'L' }
                  ],
                  reviews: { average: 4.7, totalCount: 860 },
                  images: [
                    {
                      path: 'products/others/red_1.png',
                      src: '/images/p1.png'
                    },
                    {
                      path: 'products/others/red_6.png',
                      src: '/images/p1.png'
                    }
                  ]
                },
                {
                  slug: 'thalssa-in-green',
                  sizes: [{ value: 'Medium', description: 'M', name: 'M', quantity: 78 }],
                  selectedClass: 'ring-gray-900',
                  name: 'Green',
                  images: [
                    {
                      path: 'products/others/green_1.png',
                      src: '/images/p2.png'
                    },
                    {
                      src: '/images/p2.png',
                      path: 'products/others/green_2.png'
                    }
                  ],
                  reviews: { average: 4.7, totalCount: 860 },
                  price: 900,
                  class: 'text-green-200'
                },
                {
                  slug: 'thalssa-in-pink',
                  price: 23,
                  class: 'text-pink-200',
                  reviews: { average: 4.7, totalCount: 860 },
                  selectedClass: 'ring-gray-400',
                  images: [
                    {
                      path: 'products/others/pink_1718312207909_1.png',
                      src: '/images/p3.png'
                    },
                    {
                      path: 'products/others/pink_1718312207910_4.png',
                      src: '/images/p3.png'
                    },
                    {
                      src: '/images/p3.png',
                      path: 'products/others/pink_1718312207910_2.png'
                    },
                    {
                      path: 'products/others/pink_1718312207910_3.png',
                      src: '/images/p3.png'
                    }
                  ],
                  sizes: [{ quantity: 356, description: 'L', name: 'L', value: 'Large' }],
                  name: 'Pink'
                }
              ],
              defaultColor: 'pink',
              name: 'Thalssa',
              model: {
                description: 'Classic',
                name: 'Classic',
                value: 'classic'
              },
              details: {
                shippings: [
                  {
                    name: 'Hand cut and sewn locally',
                    description: 'Hand cut and sewn locally',
                    id: '2kQV0rtFX3XR9bQF4t5w'
                  },
                  {
                    description: 'Ultra-soft 100% cotton',
                    name: 'Ultra-soft 100% cotton'
                  }
                ],
                returns: [
                  {
                    id: '1IKXabGDxHO3futz7Wit',
                    name: 'La poste',
                    description: 'La poste'
                  },
                  { description: 'DHL', name: 'DHL' }
                ],
                highlights: ['Durable ', 'Qualité prix'],
                materialAndCares: [
                  {
                    description: 'Only the best materials',
                    name: 'Only the best materials'
                  },
                  {
                    name: 'Ethically and locally made',
                    description: 'Ethically and locally made'
                  }
                ]
              },
              category: {
                imagePath: 'categories/1718055707845_9.png',
                id: 'DkKF35gOLsiKs2wwNbE3',
                name: 'Robes kabyles pour femme',
                description:
                  'Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.',
                imageSrc:
                  'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/categories%2F1718055707845_9.png?alt=media&token=0fd3adb9-0c40-4be8-a120-e9387d40256f'
              },
              valid: true
            },
            {
              updatedAt: 1718312207906,
              id: 2,
              collection: {
                imageSrc:
                  'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/collections%2F1718055580716_1.png?alt=media&token=4b2cf17f-0d7c-409a-adf3-a4477ba5603f',
                imagePath: 'collections/1718055580716_1.png',
                name: 'Nouvels arrivés',
                description:
                  "Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels.",
                id: 'Qr6Jr1FczDJQxiGgzNNm'
              },
              occasions: [{ value: 'fete', description: 'Fete', name: 'Fete' }],
              tags: ['Recycling ', 'Green Tech'],
              createAt: 1718295686415,
              status: 'Draft',
              description:
                'Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.',
              material: { value: 'coton', name: 'Coton', description: 'Coton' },
              colors: [
                {
                  slug: 'fatimzara-in-blue',
                  class: 'text-blue-700',
                  price: 55,
                  selectedClass: 'ring-gray-400',
                  name: 'Blue',
                  sizes: [
                    { value: 'Medium', name: 'M', description: 'M', quantity: 120 },
                    { name: 'L', value: 'Large', quantity: 110, description: 'L' }
                  ],
                  reviews: { average: 4.7, totalCount: 860 },
                  images: [
                    {
                      path: 'products/others/red_1.png',
                      src: '/images/p1.png'
                    },
                    {
                      path: 'products/others/red_6.png',
                      src: '/images/p1.png'
                    }
                  ]
                },
                {
                  slug: 'fatimzara-in-green',
                  sizes: [{ value: 'Medium', description: 'M', name: 'M', quantity: 78 }],
                  selectedClass: 'ring-gray-900',
                  name: 'Green',
                  images: [
                    {
                      path: 'products/others/green_1.png',
                      src: '/images/p2.png'
                    },
                    {
                      src: '/images/p2.png',
                      path: 'products/others/green_2.png'
                    }
                  ],
                  reviews: { average: 4.7, totalCount: 860 },
                  price: 900,
                  class: 'text-green-200'
                },
                {
                  slug: 'fatimzara-in-pink',
                  price: 23,
                  class: 'text-pink-200',
                  reviews: { average: 4.7, totalCount: 860 },
                  selectedClass: 'ring-gray-400',
                  images: [
                    {
                      path: 'products/others/pink_1718312207909_1.png',
                      src: '/images/p3.png'
                    },
                    {
                      path: 'products/others/pink_1718312207910_4.png',
                      src: '/images/p3.png'
                    },
                    {
                      src: '/images/p3.png',
                      path: 'products/others/pink_1718312207910_2.png'
                    },
                    {
                      path: 'products/others/pink_1718312207910_3.png',
                      src: '/images/p3.png'
                    }
                  ],
                  sizes: [{ quantity: 356, description: 'L', name: 'L', value: 'Large' }],
                  name: 'Pink'
                }
              ],
              defaultColor: 'blue',
              name: 'Fatimzara',
              model: {
                description: 'Classic',
                name: 'Classic',
                value: 'classic'
              },
              details: {
                shippings: [
                  {
                    name: 'Hand cut and sewn locally',
                    description: 'Hand cut and sewn locally',
                    id: '2kQV0rtFX3XR9bQF4t5w'
                  },
                  {
                    description: 'Ultra-soft 100% cotton',
                    name: 'Ultra-soft 100% cotton'
                  }
                ],
                returns: [
                  {
                    id: '1IKXabGDxHO3futz7Wit',
                    name: 'La poste',
                    description: 'La poste'
                  },
                  { description: 'DHL', name: 'DHL' }
                ],
                highlights: ['Durable ', 'Qualité prix'],
                materialAndCares: [
                  {
                    description: 'Only the best materials',
                    name: 'Only the best materials'
                  },
                  {
                    name: 'Ethically and locally made',
                    description: 'Ethically and locally made'
                  }
                ]
              },
              category: {
                imagePath: 'categories/1718055707845_9.png',
                id: 'DkKF35gOLsiKs2wwNbE3',
                name: 'Robes kabyles pour femme',
                description:
                  'Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.',
                imageSrc:
                  'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/categories%2F1718055707845_9.png?alt=media&token=0fd3adb9-0c40-4be8-a120-e9387d40256f'
              },
              valid: true
            },
            {
                updatedAt: 1718312207906,
                id: 1,
                collection: {
                  imageSrc:
                    'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/collections%2F1718055580716_1.png?alt=media&token=4b2cf17f-0d7c-409a-adf3-a4477ba5603f',
                  imagePath: 'collections/1718055580716_1.png',
                  name: 'Nouvels arrivés',
                  description:
                    "Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels.",
                  id: 'Qr6Jr1FczDJQxiGgzNNm'
                },
                occasions: [{ value: 'fete', description: 'Fete', name: 'Fete' }],
                tags: ['Recycling ', 'Green Tech'],
                createAt: 1718295686415,
                status: 'Draft',
                description:
                  'Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.',
                material: { value: 'coton', name: 'Coton', description: 'Coton' },
                colors: [
                  {
                    slug: 'thalssa-in-red',
                    class: 'text-red-700',
                    price: 55,
                    selectedClass: 'ring-gray-400',
                    name: 'Red',
                    sizes: [
                      { value: 'Medium', name: 'M', description: 'M', quantity: 120 },
                      { name: 'L', value: 'Large', quantity: 110, description: 'L' }
                    ],
                    reviews: { average: 4.7, totalCount: 860 },
                    images: [
                      {
                        path: 'products/others/red_1.png',
                        src: '/images/p1.png'
                      },
                      {
                        path: 'products/others/red_6.png',
                        src: '/images/p1.png'
                      }
                    ]
                  },
                  {
                    slug: 'thalssa-in-green',
                    sizes: [{ value: 'Medium', description: 'M', name: 'M', quantity: 78 }],
                    selectedClass: 'ring-gray-900',
                    name: 'Green',
                    images: [
                      {
                        path: 'products/others/green_1.png',
                        src: '/images/p2.png'
                      },
                      {
                        src: '/images/p2.png',
                        path: 'products/others/green_2.png'
                      }
                    ],
                    reviews: { average: 4.7, totalCount: 860 },
                    price: 900,
                    class: 'text-green-200'
                  },
                  {
                    slug: 'thalssa-in-pink',
                    price: 23,
                    class: 'text-pink-200',
                    reviews: { average: 4.7, totalCount: 860 },
                    selectedClass: 'ring-gray-400',
                    images: [
                      {
                        path: 'products/others/pink_1718312207909_1.png',
                        src: '/images/p3.png'
                      },
                      {
                        path: 'products/others/pink_1718312207910_4.png',
                        src: '/images/p3.png'
                      },
                      {
                        src: '/images/p3.png',
                        path: 'products/others/pink_1718312207910_2.png'
                      },
                      {
                        path: 'products/others/pink_1718312207910_3.png',
                        src: '/images/p3.png'
                      }
                    ],
                    sizes: [{ quantity: 356, description: 'L', name: 'L', value: 'Large' }],
                    name: 'Pink'
                  }
                ],
                defaultColor: 'pink',
                name: 'Thalssa',
                model: {
                  description: 'Classic',
                  name: 'Classic',
                  value: 'classic'
                },
                details: {
                  shippings: [
                    {
                      name: 'Hand cut and sewn locally',
                      description: 'Hand cut and sewn locally',
                      id: '2kQV0rtFX3XR9bQF4t5w'
                    },
                    {
                      description: 'Ultra-soft 100% cotton',
                      name: 'Ultra-soft 100% cotton'
                    }
                  ],
                  returns: [
                    {
                      id: '1IKXabGDxHO3futz7Wit',
                      name: 'La poste',
                      description: 'La poste'
                    },
                    { description: 'DHL', name: 'DHL' }
                  ],
                  highlights: ['Durable ', 'Qualité prix'],
                  materialAndCares: [
                    {
                      description: 'Only the best materials',
                      name: 'Only the best materials'
                    },
                    {
                      name: 'Ethically and locally made',
                      description: 'Ethically and locally made'
                    }
                  ]
                },
                category: {
                  imagePath: 'categories/1718055707845_9.png',
                  id: 'DkKF35gOLsiKs2wwNbE3',
                  name: 'Robes kabyles pour femme',
                  description:
                    'Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.',
                  imageSrc:
                    'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/categories%2F1718055707845_9.png?alt=media&token=0fd3adb9-0c40-4be8-a120-e9387d40256f'
                },
                valid: true
              },
              {
                updatedAt: 1718312207906,
                id: 2,
                collection: {
                  imageSrc:
                    'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/collections%2F1718055580716_1.png?alt=media&token=4b2cf17f-0d7c-409a-adf3-a4477ba5603f',
                  imagePath: 'collections/1718055580716_1.png',
                  name: 'Nouvels arrivés',
                  description:
                    "Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels.",
                  id: 'Qr6Jr1FczDJQxiGgzNNm'
                },
                occasions: [{ value: 'fete', description: 'Fete', name: 'Fete' }],
                tags: ['Recycling ', 'Green Tech'],
                createAt: 1718295686415,
                status: 'Draft',
                description:
                  'Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.',
                material: { value: 'coton', name: 'Coton', description: 'Coton' },
                colors: [
                  {
                    slug: 'fatimzara-in-blue',
                    class: 'text-blue-700',
                    price: 55,
                    selectedClass: 'ring-gray-400',
                    name: 'Blue',
                    sizes: [
                      { value: 'Medium', name: 'M', description: 'M', quantity: 120 },
                      { name: 'L', value: 'Large', quantity: 110, description: 'L' }
                    ],
                    reviews: { average: 4.7, totalCount: 860 },
                    images: [
                      {
                        path: 'products/others/red_1.png',
                        src: '/images/p1.png'
                      },
                      {
                        path: 'products/others/red_6.png',
                        src: '/images/p1.png'
                      }
                    ]
                  },
                  {
                    slug: 'fatimzara-in-green',
                    sizes: [{ value: 'Medium', description: 'M', name: 'M', quantity: 78 }],
                    selectedClass: 'ring-gray-900',
                    name: 'Green',
                    images: [
                      {
                        path: 'products/others/green_1.png',
                        src: '/images/p2.png'
                      },
                      {
                        src: '/images/p2.png',
                        path: 'products/others/green_2.png'
                      }
                    ],
                    reviews: { average: 4.7, totalCount: 860 },
                    price: 900,
                    class: 'text-green-200'
                  },
                  {
                    slug: 'fatimzara-in-pink',
                    price: 23,
                    class: 'text-pink-200',
                    reviews: { average: 4.7, totalCount: 860 },
                    selectedClass: 'ring-gray-400',
                    images: [
                      {
                        path: 'products/others/pink_1718312207909_1.png',
                        src: '/images/p3.png'
                      },
                      {
                        path: 'products/others/pink_1718312207910_4.png',
                        src: '/images/p3.png'
                      },
                      {
                        src: '/images/p3.png',
                        path: 'products/others/pink_1718312207910_2.png'
                      },
                      {
                        path: 'products/others/pink_1718312207910_3.png',
                        src: '/images/p3.png'
                      }
                    ],
                    sizes: [{ quantity: 356, description: 'L', name: 'L', value: 'Large' }],
                    name: 'Pink'
                  }
                ],
                defaultColor: 'blue',
                name: 'Fatimzara',
                model: {
                  description: 'Classic',
                  name: 'Classic',
                  value: 'classic'
                },
                details: {
                  shippings: [
                    {
                      name: 'Hand cut and sewn locally',
                      description: 'Hand cut and sewn locally',
                      id: '2kQV0rtFX3XR9bQF4t5w'
                    },
                    {
                      description: 'Ultra-soft 100% cotton',
                      name: 'Ultra-soft 100% cotton'
                    }
                  ],
                  returns: [
                    {
                      id: '1IKXabGDxHO3futz7Wit',
                      name: 'La poste',
                      description: 'La poste'
                    },
                    { description: 'DHL', name: 'DHL' }
                  ],
                  highlights: ['Durable ', 'Qualité prix'],
                  materialAndCares: [
                    {
                      description: 'Only the best materials',
                      name: 'Only the best materials'
                    },
                    {
                      name: 'Ethically and locally made',
                      description: 'Ethically and locally made'
                    }
                  ]
                },
                category: {
                  imagePath: 'categories/1718055707845_9.png',
                  id: 'DkKF35gOLsiKs2wwNbE3',
                  name: 'Robes kabyles pour femme',
                  description:
                    'Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.',
                  imageSrc:
                    'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/categories%2F1718055707845_9.png?alt=media&token=0fd3adb9-0c40-4be8-a120-e9387d40256f'
                },
                valid: true
              },
              {
                updatedAt: 1718312207906,
                id: 1,
                collection: {
                  imageSrc:
                    'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/collections%2F1718055580716_1.png?alt=media&token=4b2cf17f-0d7c-409a-adf3-a4477ba5603f',
                  imagePath: 'collections/1718055580716_1.png',
                  name: 'Nouvels arrivés',
                  description:
                    "Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels.",
                  id: 'Qr6Jr1FczDJQxiGgzNNm'
                },
                occasions: [{ value: 'fete', description: 'Fete', name: 'Fete' }],
                tags: ['Recycling ', 'Green Tech'],
                createAt: 1718295686415,
                status: 'Draft',
                description:
                  'Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.',
                material: { value: 'coton', name: 'Coton', description: 'Coton' },
                colors: [
                  {
                    slug: 'thalssa-in-red',
                    class: 'text-red-700',
                    price: 55,
                    selectedClass: 'ring-gray-400',
                    name: 'Red',
                    sizes: [
                      { value: 'Medium', name: 'M', description: 'M', quantity: 120 },
                      { name: 'L', value: 'Large', quantity: 110, description: 'L' }
                    ],
                    reviews: { average: 4.7, totalCount: 860 },
                    images: [
                      {
                        path: 'products/others/red_1.png',
                        src: '/images/p1.png'
                      },
                      {
                        path: 'products/others/red_6.png',
                        src: '/images/p1.png'
                      }
                    ]
                  },
                  {
                    slug: 'thalssa-in-green',
                    sizes: [{ value: 'Medium', description: 'M', name: 'M', quantity: 78 }],
                    selectedClass: 'ring-gray-900',
                    name: 'Green',
                    images: [
                      {
                        path: 'products/others/green_1.png',
                        src: '/images/p2.png'
                      },
                      {
                        src: '/images/p2.png',
                        path: 'products/others/green_2.png'
                      }
                    ],
                    reviews: { average: 4.7, totalCount: 860 },
                    price: 900,
                    class: 'text-green-200'
                  },
                  {
                    slug: 'thalssa-in-pink',
                    price: 23,
                    class: 'text-pink-200',
                    reviews: { average: 4.7, totalCount: 860 },
                    selectedClass: 'ring-gray-400',
                    images: [
                      {
                        path: 'products/others/pink_1718312207909_1.png',
                        src: '/images/p3.png'
                      },
                      {
                        path: 'products/others/pink_1718312207910_4.png',
                        src: '/images/p3.png'
                      },
                      {
                        src: '/images/p3.png',
                        path: 'products/others/pink_1718312207910_2.png'
                      },
                      {
                        path: 'products/others/pink_1718312207910_3.png',
                        src: '/images/p3.png'
                      }
                    ],
                    sizes: [{ quantity: 356, description: 'L', name: 'L', value: 'Large' }],
                    name: 'Pink'
                  }
                ],
                defaultColor: 'pink',
                name: 'Thalssa',
                model: {
                  description: 'Classic',
                  name: 'Classic',
                  value: 'classic'
                },
                details: {
                  shippings: [
                    {
                      name: 'Hand cut and sewn locally',
                      description: 'Hand cut and sewn locally',
                      id: '2kQV0rtFX3XR9bQF4t5w'
                    },
                    {
                      description: 'Ultra-soft 100% cotton',
                      name: 'Ultra-soft 100% cotton'
                    }
                  ],
                  returns: [
                    {
                      id: '1IKXabGDxHO3futz7Wit',
                      name: 'La poste',
                      description: 'La poste'
                    },
                    { description: 'DHL', name: 'DHL' }
                  ],
                  highlights: ['Durable ', 'Qualité prix'],
                  materialAndCares: [
                    {
                      description: 'Only the best materials',
                      name: 'Only the best materials'
                    },
                    {
                      name: 'Ethically and locally made',
                      description: 'Ethically and locally made'
                    }
                  ]
                },
                category: {
                  imagePath: 'categories/1718055707845_9.png',
                  id: 'DkKF35gOLsiKs2wwNbE3',
                  name: 'Robes kabyles pour femme',
                  description:
                    'Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.',
                  imageSrc:
                    'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/categories%2F1718055707845_9.png?alt=media&token=0fd3adb9-0c40-4be8-a120-e9387d40256f'
                },
                valid: true
              }
          ]
    }

    const getProductBySlug =(slug)=>{
        product.value = products.value.find(p=> p.colors.some(c=>c.slug === slug))
    }

    return { loading, error, fetchProducts, products, product, getProductBySlug}


})