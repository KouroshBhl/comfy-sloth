import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filteredProducts: filtered } = useFilterContext()

  return <GridView filtered={filtered}>product list</GridView>
}

export default ProductList
