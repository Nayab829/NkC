export interface Product {
    id?: number;                // Some products have id, some don't
    name: string;              // Use name or title
    title?: string;
    brand?: string;
    model?: string;
    category: string;           // All products have a category
    price: number;              // Use number for price (convert strings to number)
    oldPrice?: number;          // Optional old price for discounts
    newPrice?: number;
  discount?: string | number; // Some discounts are string ("-2%") or number (1,5)
  capacity?: string;          // For batteries, optional
  type?: string;              // For batteries, optional
  desc?: string;              // For inverters description
  image: string;             // Use image or img field (normalize on load)
  
}
