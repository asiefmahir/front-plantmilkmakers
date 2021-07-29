export interface listItemsProps {
    listItems: Array<{
        id: string,
        title: string,
        href: string
    }>
}

export interface Category {
    id: string,
    title: string,
    image: any,
    href?: string
}

export interface ProductInfo {
    id: string
    sectionTitle: string,
    productImage: any,
    productTitle: string,
    productLabel: string,
    oldPrice: number,
    newPrice: number,
    category?: string,
    productDescription: string,
    href?: string
}

export interface ProductProps {
    index: number
    key: string,
    productDetails: ProductInfo
}

export interface Products {
    products: Array<ProductInfo>
}

export interface FeatureProps {
    features: Array<FeatureItemProps>
}

export interface FeatureItemProps {
    id: string
    icon: any,
    title: string
}

export interface Product {
    id: string,
    labels?: string[]
    category: string,
    images: string[],
    tags: string[],
    coupons?: Coupon[]
    title: string,
    description: string,
    brand: string,
    specification: any,
    variants: ProductVariant[],
    isPublished: boolean,
    ratings: Rating[],
    collections?: string[]
}

interface Rating {
    id: string,
    review: string,
    userId: string,
    productId: string,
    rating: number
}

interface Coupon {
    id: string
    code: string
    description: string
    type: string
    amount: number
    startdate: Date
    endDate: Date
    maxUsage: number
    minSpend: number
    applyToSalePrice: boolean
    combinedWithOtherCoupons: boolean
    freeShiping: boolean
    isActive: boolean
}

export interface ProductVariant {
    id: string,
    title: string,
    availableStock: number,
    availableDiscount: number,
    sku: string,
    currentPrice: number,
    isPublished: boolean
}