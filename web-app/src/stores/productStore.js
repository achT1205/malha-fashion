import { defineStore } from 'pinia';
import { ref } from 'vue'


export const useProductStore = defineStore('products', () => {

    const productsData = [ {
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
          outfits: [
            {
              slug: 'thalssa-in-green',
              sizes: [{ value: 'Medium', description: 'M', name: 'M', quantity: 78 }],
              selectedClass: 'ring-gray-900',
              name: 'Green',
              image: {
                path: 'products/others/green_1.png',
                src: '/images/products/thalssa_green_1.png'
              },
              reviews: { average: 4.7, totalCount: 860 },
              price: 900,
              class: 'text-green-200'
            },
          ],
          sizes: [
            { value: 'Medium', name: 'M', description: 'M', quantity: 120 },
            { name: 'L', value: 'Large', quantity: 110, description: 'L' }
          ],
          reviews: { average: 4.7, totalCount: 860 },
          images: [
            {
              path: 'products/others/red_1.png',
              src: '/images/products/thalssa_red_1.png'
            },
            {
              path: 'products/others/red_2.png',
              src: '/images/products/thalssa_red_2.png'
            },
            {
              path: 'products/others/red_3.png',
              src: '/images/products/thalssa_red_3.png'
            },
            {
              path: 'products/others/red_2.png',
              src: '/images/products/thalssa_red_4.png'
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
              src: '/images/products/thalssa_green_1.png'
            },
            {
              path: 'products/others/green_2.png',
              src: '/images/products/thalssa_green_2.png'
            },
            {
              path: 'products/others/green_3.png',
              src: '/images/products/thalssa_green_3.png'
            },
            {
              path: 'products/others/green_2.png',
              src: '/images/products/thalssa_green_4.png'
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
              path: 'products/others/pink_1.png',
              src: '/images/products/thalssa_pink_1.png'
            },
            {
              path: 'products/others/pink_2.png',
              src: '/images/products/thalssa_pink_2.png'
            },
            {
              path: 'products/others/pink_3.png',
              src: '/images/products/thalssa_pink_3.png'
            },
            {
              path: 'products/others/pink_2.png',
              src: '/images/products/thalssa_pink_4.png'
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
      details: [
        {
          title:"SHIPPING",
          details:'We offer FREE shipping for all orders £150 & above. All orders are shipped directly from our UK warehouse within 24-48 hours of the order being placed. Next working day delivery is available to purchase at checkout - please be aware we are not liable for any customs duties or taxes incurred. See our full Shipping Policy here.'
        },
        {
          title:"RETURNS",
          details:'We offer a 35 day returns or exchange policy if you are not happy with your order for whatever reason, please see our full Return Policy here.'
        },
        {
          title:"HOW IT WAS MADE",
          details:'We offer a 35 day returns or exchange policy if you are not happy with your order for whatever reason, please see our full Return Policy here.'
        }
        
      ],
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
    },]

    const products = ref()
    const product = ref()
    const loading= ref(false)
    const error = ref(null)

    const fetchProducts =()=>{
    const copy = JSON.parse(JSON.stringify(productsData))
      products.value= copy.map((p) => {
        const product = {}
        product.id = p.id
        product.collection = p.collection.name
        product.colors = p.colors.map((c)=>{
          delete c.outfits
          delete c.reviews
          c.image = c.images[0].src
          delete c.images
          return c
        })
        product.defaultColor = p.defaultColor
        return product
      });

    }

    const getProductBySlug =(slug)=>{
        product.value = productsData.find(p=> p.colors.some(c=>c.slug === slug))
    }

    return { loading, error, fetchProducts, products, product, getProductBySlug}


})