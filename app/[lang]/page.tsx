import { getDictionary } from "./dictionaries";

export default async function Home() {
  const dict = await getDictionary();
  return <button>{dict.products.cart}</button>
}
