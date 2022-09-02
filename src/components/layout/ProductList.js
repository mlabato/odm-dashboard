function ProductList(props) {
  //SWITCH PARA MOSTRAR CATEGORÍA EN TARJETA DE PRODUCTO
  function categorySwitch(category) {
    switch (category) {
      case 1:
        return "Mate";
      case 2:
        return "Matera";
      case 3:
        return "Bombilla";
      case 4:
        return "Termo";
      default:
        return "foo";
    }
  }

  function virolaSwitch(virola) {
    switch (virola) {
      case 1:
        return "Aluminio";
      case 2:
        return "Alpaca lisa";
      case 3:
        return "Alpaca cincelada";
      case 4:
        return "No aplica";
      default:
        return "foo";
    }
  }

  function materialSwitch(material) {
    switch (material) {
      case 1:
        return "Alpaca";
      case 2:
        return "Acero inox.";
      case 3:
        return "Cuero";
      case 4:
        return "Ecocuero";
      case 5:
        return "No aplica";
      default:
        return "foo";
    }
  }

  function colorSwitch(color) {
    switch (color) {
      case 1:
        return "Blanco";
      case 2:
        return "Negro";
      case 3:
        return "Marrón";
      case 4:
        return "Cuero crudo";
      case 5:
        return "Marrón oscuro";
      case 6:
        return "Rojo";
      case 7:
        return "Verde";
      case 8:
        return "Azul";
      case 9:
        return "Amarillo";
      case 10:
        return "No aplica";
      default:
        return "foo";
    }
  }

  return (
    <section className="my-10">
      <div>
        <table className="min-w-full table-auto">
          <thead className="justify-between">
            <tr className="bg-red-700">
              <th className="px-2 py-2">
                <span className="text-indigo-50">Imagen</span>
              </th>

              <th className="px-2 py-2">
                <span className="text-indigo-50">Categoría</span>
              </th>

              <th className="px-2 py-2">
                <span className="text-indigo-50">Modelo</span>
              </th>
              <th className="px-2 py-2">
                <span className="text-indigo-50">Precio</span>
              </th>
              <th className="px-2 py-2">
                <span className="text-indigo-50">Descuento</span>
              </th>
              <th className="px-2 py-2">
                <span className="text-indigo-50">Stock</span>
              </th>
              <th className="px-2 py-2">
                <span className="text-indigo-50">Virola</span>
              </th>
              <th className="px-2 py-2">
                <span className="text-indigo-50">Color</span>
              </th>
              <th className="px-2 py-2">
                <span className="text-indigo-50">Material</span>
              </th>
              <th className="px-2 py-2">
                <span className="text-indigo-50">Accion</span>
              </th>
            </tr>
          </thead>

          {props?.products?.map((product, i) => {
            return (
              <tbody className="bg-gray-200">
                <tr className="bg-white border-4 border-gray-200 text-center">
                  {/* IMAGEN */}
                  <td className="px-2 py-2 mx-auto ">
                    <img
                      className="h-8 w-8 object-cover mx-auto"
                      src={product.image}
                      alt=""
                    />
                  </td>

                  {/* CATEGORIA */}
                  <td className="px-2 py-2">
                    {categorySwitch(product.category)}
                  </td>

                  {/* MODELO */}
                  <td className="px-2 py-2">{product.model}</td>

                  {/* PRECIO */}
                  <td className="px-2 py-2"> $ {product.price}</td>

                  {/* DESCUENTO*/}
                  <td className="px-2 py-2"> {product.discount} % </td>

                  {/* STOCK */}
                  <td className="px-2 py-2"> {product.stock} un. </td>

                  {/* VIROLA*/}
                  <td className="px-2 py-2">
                    {" "}
                    {virolaSwitch(product.virola)}{" "}
                  </td>

                  {/* COLOR*/}
                  <td className="px-2 py-2"> {colorSwitch(product.color)} </td>

                  {/* MATERIAL*/}
                  <td className="px-2 py-2">
                    {" "}
                    {materialSwitch(product.material)}{" "}
                  </td>

                  {/* ACCION*/}
                  <td className="px-2 py-2 flex flex-row justify-center">
                    <form
                      action={"/edit/" + product.id}
                      method="GET"
                      className="bg-red-700 text-white text-sm mx-2 p-2 rounded-lg"
                    >
                      <button type="submit"> Editar </button>
                    </form>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </section>
  );
}

export default ProductList;
