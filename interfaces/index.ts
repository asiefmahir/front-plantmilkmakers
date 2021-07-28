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
