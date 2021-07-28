import shortid from "shortid";
import { images } from "../public/images";



export const productDetails = {
        id: shortid.generate(),
        mainProductTitle: `Almonds, Organic Raw Sprouted`,
        productVariants: [
            {
                id: shortid.generate(),
                image: images.Product1,
                availableStock: 25,
                averageRating: 4.9,
                excerpt: `Ad illum natoque volutpat leo curabitur est nisi reprehenderit`,
                description: `Our Raw Almonds are among the largest you can get anywhere. We only source 20/22 nonpareil almonds grown in California. Our farmers weed out the dull almonds so each morsel that makes it to your bag is sweet, meaty and never bitter. Raw Almonds make a healthy snack that’s packed with protein, fiber, calcium, zinc, and antioxidants.These almonds are unpasteurized, raw, organic almonds.`,
                descriptionImages: images.descriptionImage,
                isMainVariant: true,
                keyFacts: [
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    },
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    },
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    },
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    }
                ],
                newPrice: 25.99,
                oldPrice: 34.59,
                sku: 12,

                title: `Main Variant`,
                totalRatingCount: 15
            },
            {
                id: shortid.generate(),
                image: images.Product2,
                availableStock: 25,
                averageRating: 4.9,
                excerpt: `Ad illum natoque volutpat leo curabitur est nisi reprehenderit`,
                description: `Our Raw Almonds hee among the largest you can get anywhere. We only source 20/22 nonpareil almonds grown in California. Our farmers weed out the dull almonds so each morsel that makes it to your bag is sweet, meaty and never bitter. Raw Almonds make a healthy snack that’s packed with protein, fiber, calcium, zinc, and antioxidants.These almonds are unpasteurized, raw, organic almonds.`,
                descriptionImages: images.descriptionImage,
                isMainVariant: false,
                keyFacts: [
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    },
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    },
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    },
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    }
                ],
                newPrice: 25.99,
                oldPrice: 34.59,
                sku: 12,

                title: `2nd Variant`,
                totalRatingCount: 15
            },
            {
                id: shortid.generate(),
                image: images.Product3,
                availableStock: 25,
                averageRating: 4.9,
                excerpt: `Ad illum natoque volutpat leo curabitur est nisi reprehenderit`,
                description: `Our Raw Almonds are among the largest you can get anywhere. We only source 20/22 nonpareil almonds grown in California. Our farmers weed out the dull almonds so each morsel that makes it to your bag is sweet, meaty and never bitter. Raw Almonds make a healthy snack that’s packed with protein, fiber, calcium, zinc, and antioxidants.These almonds are unpasteurized, raw, organic almonds.`,
                descriptionImages: images.descriptionImage,
                isMainVariant: false,
                keyFacts: [
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    },
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    },
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    },
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    }
                ],
                newPrice: 25.99,
                oldPrice: 34.59,
                sku: 12,

                title: `3rd Variant`,
                totalRatingCount: 15
            },
            {
                id: shortid.generate(),
                image: images.Product4,
                availableStock: 25,
                averageRating: 4.9,
                excerpt: `Ad illum natoque volutpat leo curabitur est nisi reprehenderit`,
                description: `Our Raw Almonds are among the largest you can get anywhere. We only source 20/22 nonpareil almonds grown in California. Our farmers weed out the dull almonds so each morsel that makes it to your bag is sweet, meaty and never bitter. Raw Almonds make a healthy snack that’s packed with protein, fiber, calcium, zinc, and antioxidants.These almonds are unpasteurized, raw, organic almonds.`,
                descriptionImages: images.descriptionImage,
                isMainVariant: false,
                keyFacts: [
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    },
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    },
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    },
                    {
                        id: shortid.generate(),
                        title: `Ingredient`,
                        excerpt: `Eget cursus officiis, consequuntur adipitin cidunt scinimano`
                    }
                ],
                newPrice: 25.99,
                oldPrice: 34.59,
                sku: 12,

                title: `4th variant`,
                totalRatingCount: 15
            },
        ]
}

const products = {
    id: shortid.generate(),
    mainProductTitle: ``
}