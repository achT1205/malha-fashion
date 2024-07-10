<script setup>
import { useRouter } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'

const router = useRouter()

const offers = [
  { name: 'Livraison gratuite', description: 'pour des achats de +150€' },
  { name: '35 jours', description: 'retour facile' },
  { name: 'Acheter maintenant', description: 'Payer plutard' }
]
const arrivals = [
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
    tags: ['Recycling ', 'Gree Tech'],
    createAt: 1718295686415,
    status: 'Draft',
    description:
      'Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.',
    material: { value: 'coton', name: 'Coton', description: 'Coton' },
    colors: [
      {
        class: 'text-red-700',
        price: 55,
        selectedClass: 'ring-gray-400',
        name: 'Red',
        sizes: [
          { value: 'm', name: 'M', description: 'M', quantity: 120 },
          { name: 'L', value: 'l', quantity: 110, description: 'L' }
        ],
        reviews: { totalCount: 0, average: 0 },
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
        sizes: [{ value: 'm', description: 'M', name: 'M', quantity: 78 }],
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
        reviews: { average: 0, totalCount: 0 },
        price: 900,
        class: 'text-green-200'
      },
      {
        price: 23,
        class: 'text-pink-200',
        reviews: { totalCount: 0, average: 0 },
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
        sizes: [{ quantity: 356, description: 'L', name: 'L', value: 'l' }],
        name: 'Pink'
      }
    ],
    image: {
      path: 'products/covers/Thalssa_robe-fete.png',
      src: 'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/products%2Fcovers%2FThalssa_robe-fete.png?alt=media&token=9649c63f-48a0-4fed-b7ea-d5019442dbd9'
    },
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
    id: 2,
    updatedAt: 1718312207906,
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
    tags: ['Recycling ', 'Gree Tech'],
    createAt: 1718295686415,
    status: 'Draft',
    description:
      'Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.',
    material: { value: 'coton', name: 'Coton', description: 'Coton' },
    colors: [
      {
        class: 'text-red-700',
        price: 55,
        selectedClass: 'ring-gray-400',
        name: 'Red',
        sizes: [
          { value: 'm', name: 'M', description: 'M', quantity: 0 },
          { name: 'L', value: 'l', quantity: 110, description: 'L' }
        ],
        reviews: { totalCount: 0, average: 0 },
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
        sizes: [{ value: 'm', description: 'M', name: 'M', quantity: 78 }],
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
        reviews: { average: 0, totalCount: 0 },
        price: 900,
        class: 'text-green-200'
      },
      {
        price: 23,
        class: 'text-pink-200',
        reviews: { totalCount: 0, average: 0 },
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
        sizes: [{ quantity: 356, description: 'L', name: 'L', value: 'l' }],
        name: 'Pink'
      }
    ],
    image: {
      path: 'products/covers/Thalssa_robe-fete.png',
      src: 'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/products%2Fcovers%2FThalssa_robe-fete.png?alt=media&token=9649c63f-48a0-4fed-b7ea-d5019442dbd9'
    },
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
    id: 3,
    updatedAt: 1718312207906,
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
    tags: ['Recycling ', 'Gree Tech'],
    createAt: 1718295686415,
    status: 'Draft',
    description:
      'Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.',
    material: { value: 'coton', name: 'Coton', description: 'Coton' },
    colors: [
      {
        class: 'text-red-700',
        price: 55,
        selectedClass: 'ring-gray-400',
        name: 'Red',
        sizes: [
          { value: 'm', name: 'M', description: 'M', quantity: 120 },
          { name: 'L', value: 'l', quantity: 110, description: 'L' }
        ],
        reviews: { totalCount: 0, average: 0 },
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
        sizes: [{ value: 'm', description: 'M', name: 'M', quantity: 78 }],
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
        reviews: { average: 0, totalCount: 0 },
        price: 900,
        class: 'text-green-200'
      },
      {
        price: 23,
        class: 'text-pink-200',
        reviews: { totalCount: 0, average: 0 },
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
        sizes: [{ quantity: 356, description: 'L', name: 'L', value: 'l' }],
        name: 'Pink'
      }
    ],
    image: {
      path: 'products/covers/Thalssa_robe-fete.png',
      src: 'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/products%2Fcovers%2FThalssa_robe-fete.png?alt=media&token=9649c63f-48a0-4fed-b7ea-d5019442dbd9'
    },
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
    id: 4,
    updatedAt: 1718312207906,
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
    tags: ['Recycling ', 'Gree Tech'],
    createAt: 1718295686415,
    status: 'Draft',
    description:
      'Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.',
    material: { value: 'coton', name: 'Coton', description: 'Coton' },
    colors: [
      {
        class: 'text-red-700',
        price: 55,
        selectedClass: 'ring-gray-400',
        name: 'Red',
        sizes: [
          { value: 'm', name: 'M', description: 'M', quantity: 120 },
          { name: 'L', value: 'l', quantity: 110, description: 'L' }
        ],
        reviews: { totalCount: 0, average: 0 },
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
        sizes: [{ value: 'm', description: 'M', name: 'M', quantity: 78 }],
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
        reviews: { average: 0, totalCount: 0 },
        price: 900,
        class: 'text-green-200'
      },
      {
        price: 23,
        class: 'text-pink-200',
        reviews: { totalCount: 0, average: 0 },
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
        sizes: [{ quantity: 356, description: 'L', name: 'L', value: 'l' }],
        name: 'Pink'
      }
    ],
    image: {
      path: 'products/covers/Thalssa_robe-fete.png',
      src: 'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/products%2Fcovers%2FThalssa_robe-fete.png?alt=media&token=9649c63f-48a0-4fed-b7ea-d5019442dbd9'
    },
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
    id: 5,
    updatedAt: 1718312207906,
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
    tags: ['Recycling ', 'Gree Tech'],
    createAt: 1718295686415,
    status: 'Draft',
    description:
      'Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.',
    material: { value: 'coton', name: 'Coton', description: 'Coton' },
    colors: [
      {
        class: 'text-red-700',
        price: 55,
        selectedClass: 'ring-gray-400',
        name: 'Red',
        sizes: [
          { value: 'm', name: 'M', description: 'M', quantity: 120 },
          { name: 'L', value: 'l', quantity: 110, description: 'L' }
        ],
        reviews: { totalCount: 0, average: 0 },
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
        sizes: [{ value: 'm', description: 'M', name: 'M', quantity: 78 }],
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
        reviews: { average: 0, totalCount: 0 },
        price: 900,
        class: 'text-green-200'
      },
      {
        price: 23,
        class: 'text-pink-200',
        reviews: { totalCount: 0, average: 0 },
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
        sizes: [{ quantity: 356, description: 'L', name: 'L', value: 'l' }],
        name: 'Pink'
      }
    ],
    image: {
      path: 'products/covers/Thalssa_robe-fete.png',
      src: 'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/products%2Fcovers%2FThalssa_robe-fete.png?alt=media&token=9649c63f-48a0-4fed-b7ea-d5019442dbd9'
    },
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

const collections = [
  {
    id: 1,
    name: 'FEMMES',
    value: 'women-dresses'
  },
  {
    id: 2,
    name: 'HOMMES',
    value: 'men-burnous'
  },
  {
    id: 3,
    name: 'FILLES',
    value: 'girl-dresses'
  },
  {
    id: 4,
    name: 'GARCONS',
    value: 'boys-burnous'
  }
]
const accessories = [
  {
    id: 1,
    name: 'SACS BERBERES',
    value: 'bags'
  },
  {
    id: 2,
    name: 'BIJOUX KAYLES',
    value: 'jewelry'
  },
  {
    id: 3,
    name: 'BROCHES',
    value: 'broches'
  },
  {
    id: 4,
    name: 'FOULARDS',
    value: 'scarves'
  }
]

const onSelectSize = (event, size) => {
  event.stopPropagation()
  alert(JSON.stringify(size))
}

const onCollectionSelect = (collection) => {
  router.push(`collections/${collection.value}`)
}

const onProductSelect = (product) => {
  router.push('/products/side-stripe-swim-short-in-pale-blue')
}
</script>

<template>
  <div>
    <!-- Hero section -->
    <div class="relative">
      <!-- Decorative image and overlay -->
      <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
        <img
          src="@/assets/images/hero2.png"
          alt=""
          class="h-full w-full object-cover object-center"
        />
      </div>

      <div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-4xl">
            L'élégance et la tradition kabyle, par Malha Création.
          </h1>
          <div class="mt-10 flex items-center gap-x-6">
            <router-link
              class="mt-8 inline-block border bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              to="/collections/new-in"
            >
              SHOP NEW
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <main>
      <nav aria-label="Offers" class="order-last lg:order-first">
        <div class="mx-auto max-w-7xl lg:px-8">
          <ul
            role="list"
            class="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
          >
            <li v-for="offer in offers" :key="offer.name" class="flex flex-col">
              <a
                class="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
              >
                <p class="text-sm text-gray-500">
                  {{ offer.name }}
                </p>
                <p class="font-semibold text-gray-900">{{ offer.description }}</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- new arrivals -->
      <section aria-labelledby="trending-heading" class="bg-white">
        <div class="py-16 sm:py-24 lg:mx-auto lg:max-w-12xl lg:px-4 lg:py-16">
          <div class="flex items-center justify-center px-4 sm:px-6 lg:px-0">
            <h2 id="trending-heading" class="text-xl font-bold tracking-tight text-gray-900">
              NOUVELS ARRIVES
            </h2>
          </div>

          <div class="relative mt-8">
            <div class="relative w-full overflow-x-auto">
              <ul
                role="list"
                class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-x-2 lg:space-x-0"
              >
                <li
                  v-for="product in arrivals"
                  :key="product.id"
                  class="inline-flex w-64 flex-col text-center lg:w-auto"
                >
                  <ProductCard :product="product" />
                  <!-- <div class="group relative">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
                      <img
                        :src="`/images/p${product.id}.png`"
                        :alt="product.imageAlt"
                        class="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div
                      class="absolute inset-x-0 top-0 flex h-5/6 items-end justify-start overflow-hidden rounded-lg p-4"
                      @click="onProductSelect(product)"
                    >
                      <span
                        v-if="product.promo"
                        class="inline-flex items-center rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700 group-hover:hidden transition-all"
                        >{{ product.promo }}OFF</span
                      >
                      <span
                        v-else
                        class="inline-flex items-center rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600 group-hover:hidden transition-all"
                        >NOUVEAU</span
                      >
                      <div
                        class="bg-gray-100 shadow sm:rounded-lg w-96 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div class="px-4 py-2">
                          <div class="mt-1">
                            <h2 class="text-l font-bold tracking-tight text-gray-900">QUICK ADD</h2>
                            <RadioGroup
                              v-model="product.selectedSize"
                              class="mt-4 grid grid-cols-4 gap-4"
                            >
                              <RadioGroupOption
                                as="template"
                                v-for="size in product.sizes"
                                :key="size.name"
                                :value="size"
                                :disabled="!size.inStock"
                                v-slot="{ active, checked }"
                                @click="onSelectSize($event, size)"
                              >
                                <div
                                  :class="[
                                    size.inStock
                                      ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                      : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                    active ? 'ring-2 ring-indigo-500' : '',
                                    'group relative flex items-center justify-center rounded-md border  px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                  ]"
                                >
                                  <span>{{ size.name }}</span>
                                  <span
                                    v-if="size.inStock"
                                    :class="[
                                      active ? 'border' : 'border-2',
                                      checked ? 'border-indigo-500' : 'border-transparent',
                                      'pointer-events-none absolute -inset-px rounded-md'
                                    ]"
                                    aria-hidden="true"
                                  />
                                  <span
                                    v-else
                                    aria-hidden="true"
                                    class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                  >
                                    <svg
                                      class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line
                                        x1="0"
                                        y1="100"
                                        x2="100"
                                        y2="0"
                                        vector-effect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </RadioGroupOption>
                            </RadioGroup>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-6">
                      <h3 class="mt-1 font-semibold text-gray-900">
                        <router-link
                          to="/products/essential-t-shirt-in-white"
                          class="pointer-events-none"
                        >
                          <span class="absolute inset-0" />
                          {{ product.name }}
                        </router-link>
                      </h3>
                      <h4 class="sr-only">Available colors</h4>
                      <RadioGroup
                        v-model="product.selectedColor"
                        class="mt-auto flex items-center justify-center space-x-3 pt-6"
                      >
                        <RadioGroupOption
                          as="template"
                          v-for="option in product.availableColors"
                          :key="option.name"
                          :value="option"
                          :aria-label="option.name"
                          v-slot="{ active, checked }"
                        >
                          <div
                            :class="[
                              option.color,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-current focus:outline-none'
                            ]"
                          >
                            <span
                              aria-hidden="true"
                              class="h-4 w-4 rounded-full border border-black border-opacity-10 bg-current"
                            />
                          </div>
                        </RadioGroupOption>
                      </RadioGroup>

                      <p class="mt-5 text-gray-900">€{{ product.price }} EUR</p>
                    </div>
                  </div>-->
                </li>
              </ul>
            </div>
          </div>

          <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center mt-8">
            <router-link
              class="mt-8 inline-block border bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              to="/collections/new-in"
            >
              VOIR TOUT
            </router-link>
          </div>
        </div>
      </section>

      <!-- categories -->
      <section aria-labelledby="trending-heading" class="bg-white">
        <div class="lg:mx-auto lg:max-w-12xl lg:px-4 lg:py-4">
          <div class="relative">
            <div class="relative w-full overflow-x-auto">
              <ul
                role="list"
                class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-2 lg:space-x-0"
              >
                <li
                  v-for="collection in collections"
                  :key="collection.id"
                  @click="onCollectionSelect(product)"
                  class="inline-flex w-64 flex-col text-center lg:w-auto"
                >
                  <div class="group relative">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
                      <img
                        :src="`/images/categories/${collection.value}.png`"
                        :alt="collection.name"
                        class="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div
                      class="absolute inset-x-0 top-0 flex h-full items-end justify-center overflow-hidden rounded-lg p-4"
                    >
                      <div
                        class="relative mx-auto flex max-w-3xl flex-col items-center text-center"
                      >
                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          {{ collection.name }}
                        </h2>
                        <router-link
                          class="mt-8 inline-block border bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                          :to="`/collections/${collection.value}`"
                        >
                          SHOP NOW
                        </router-link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div class="relative">
        <!-- Decorative image and overlay -->
        <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
          <img
            src="@/assets/images/hero.png"
            alt=""
            class="h-full w-full object-cover object-center"
          />
        </div>

        <div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-4xl">
              Intensifiez votre jeu de mode
            </h1>
            <div class="mt-10 flex items-center gap-x-6">
              <router-link
                class="mt-8 inline-block border bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                to="/collections/men"
              >
                SHOP NOW
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- accessories -->
      <section aria-labelledby="trending-heading" class="bg-white">
        <div class="lg:mx-auto lg:max-w-12xl lg:px-4 lg:py-4">
          <div class="relative mt-2">
            <div class="relative w-full overflow-x-auto">
              <ul
                role="list"
                class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-2 lg:space-x-0"
              >
                <li
                  v-for="accessory in accessories"
                  :key="accessory.id"
                  class="inline-flex w-64 flex-col text-center lg:w-auto"
                >
                  <div class="group relative">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
                      <img
                        :src="`/images/accessories/${accessory.value}.png`"
                        :alt="accessory.name"
                        class="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div
                      class="absolute inset-x-0 top-0 flex h-full items-end justify-center overflow-hidden rounded-lg p-4"
                    >
                      <div
                        class="relative mx-auto flex max-w-3xl flex-col items-center text-center"
                      >
                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          {{ accessory.name }}
                        </h2>
                        <router-link
                          class="mt-8 inline-block border bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                          :to="`/collections/${accessory.value}`"
                        >
                          SHOP NOW
                        </router-link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>