import { FeaturedImage } from "./featuted-image.interface"
import { Prices } from "./prices/prices.interface"

export interface Node {
    id: string
    title: string
    tags: string[]
    totalInventory: number
    tracksInventory: boolean
    featuredImage: FeaturedImage
    prices: Prices,
    rating?: number
  }
