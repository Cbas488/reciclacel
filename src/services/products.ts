import type { Product } from "../utilities/types";

const products: Array<Product> = [
    { id: "canasta_10_kg", name: "canasta 10 kg" },
    { id: "canasta_15_kg", name: "canasta 15 kg" },
    { id: "canasta_20_kg", name: "canasta 20 kg" },
    { id: "caja_distribucion", name: "canasta de distribución" },
    { id: "tapa_plastica", name: "tapa plástica" },
    { id: "caja_walterino", name: "caja walterino" },
    { id: "cubeta_4l", name: "cubeta de 4l" },
    { id: "pellet_polipropileno_virgen", name: "pellet polipropileno virgen" },
    { id: "polietileno_alta_densidad", name: "polietileno de alta densidad" }
]

const getAllProducts: Function = ():Array<Product> => {
    return products
}

export {
    getAllProducts
}