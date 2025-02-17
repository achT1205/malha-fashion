export function useUtils() {

    const getTotalReviews =(product)=>{
        let totalCount = 0;
        const counts = product.colors.map((color)=>color.reviews.totalCount) 
        counts.map((count)=>{
            totalCount = totalCount + count
        })
        return totalCount
    }

    const getTotalAvrage =(product)=>{
        let totalCount = 0;
        const avrages = product.colors.map((color)=>color.reviews.average) 
        avrages.map((average)=>{
            totalCount = totalCount + average
        })
        return totalCount/avrages.length
    }

    const getProductPrice =(product)=>{
        if(product.price && product.price > 0) return product.price
        else{
            const prices = product.colors.map(color => color.price);
            const minPrice = Math.min(...prices);
            return minPrice
        }
    }


    const getSeverity = (product, color) => {
        let quantity = 0;
        if( product.quantity && product.quantity > 0)
        {
            quantity = product.quantity
        }else{
        const quantities = color.sizes.map((size) => size.quantity);
         quantities.map((q) => quantity = quantity + q);
        }
        
        if (quantity >= 100) return 'success';
        else if (quantity > 0 && quantity < 100) return 'warning';
        else return 'danger';
    };
    
    const getInventoryStatus = (product, color) => {
        let quantity = 0;
        if( product.quantity && product.quantity > 0)
        {
            quantity = product.quantity
        }else{
        const quantities = color.sizes.map((size) => size.quantity);
         quantities.map((q) => quantity = quantity + q);
        }
        if (quantity >= 100) return `INSTOCK (${quantity})`;
        else if (quantity > 0 && quantity < 100) return `LOWSTOCK (${quantity})`;
        else return 'OUTOFSTOCK';
    };


    return{
        getProductPrice,
        getSeverity,
        getInventoryStatus,
        getTotalReviews,
        getTotalAvrage
    }
}