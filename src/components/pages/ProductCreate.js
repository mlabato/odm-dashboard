import React, { useState, useRef } from "react";
import axios from "axios";
import Layout from "../UI/Layout"
import { useNavigate } from "react-router-dom";

function ProductCreate() {
  //HOOKS PARA ENVIO DE FORM AL BE
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [model, setModel] = useState("");
  const [stock, setStock] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState("");
  const [virola, setVirola] = useState("");
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState("");
  const [buffer, setBuffer] = useState("");

  //HOOK VALIDACION BE
  const [isValidated, setIsValidated] = useState(true);

  const validatingHandler = () => {
    setIsValidated(false);
  };

  //REFS
  const categoryRef = useRef();
  const priceRef = useRef();
  const modelRef = useRef();
  const stockRef = useRef();
  const discountRef = useRef();
  const buferRef = useRef();
  const virolaRef = useRef();
  const materialRef = useRef();
  const colorRef = useRef();

  //ENVIO DE FORM Y RUTEO
  const navigate = useNavigate();

  const postData = async (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append("category_id", category);
    form.append("price", price);
    form.append("model", model);
    form.append("stock", stock);
    form.append("discount", discount);
    form.append("image", image);
    form.append("virola_id", virola);
    form.append("material_id", material);
    form.append("color_id", color);
    form.append("file", buffer, "1234.jpg");

    try {
      const response = await axios({
        url: "http://localhost:3000/create",
        method: "POST",
        data: form,
      });

      if (response.status === 201) {
        navigate("/");
        if (!isValidated) {
          validatingHandler();
        }
      }
    } catch (error) {
      validatingHandler();
      console.log(error);
    }
  };

  //VALIDACION FRONT END
  const [categoryError, setCategoryError] = useState(false);
  const categoryValidatingHandler = () => {
    if (categoryRef?.current?.value === "0") {
      setCategoryError(true);
    } else {
      setCategoryError(false);
    }
  };

  const [priceError, setPriceError] = useState(false);
  const priceValidatingHandler = () => {
    if (priceRef.current.value.length === 0) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
  };

  const [modelError, setModelError] = useState(false);
  const modelValidatingHandler = () => {
    if (
      modelRef.current.value.length === 0 ||
      modelRef.current.value.length < 4
    ) {
      setModelError(true);
    } else {
      setModelError(false);
    }
  };

  const [stockError, setStockError] = useState(false);
  const stockValidatingHandler = () => {
    if (stockRef.current.value.length === 0) {
      setStockError(true);
    } else {
      setStockError(false);
    }
  };

  const [discountError, setDiscountError] = useState(false);
  const discountValidatingHandler = () => {
    if (
      discountRef.current.value.length === 0 ||
      discountRef.current.value > 99
    ) {
      setDiscountError(true);
    } else {
      setDiscountError(false);
    }
  };

  const [virolaError, setVirolaError] = useState(false);
  const virolaValidatingHandler = () => {
    if (virolaRef?.current?.value === "0") {
      setVirolaError(true);
    } else {
      setVirolaError(false);
    }
  };

  const [materialError, setMaterialError] = useState(false);
  const materialValidatingHandler = () => {
    if (materialRef?.current?.value === "0") {
      setMaterialError(true);
    } else {
      setMaterialError(false);
    }
  };

  const [colorError, setColorError] = useState(false);
  const colorValidatingHandler = () => {
    if (colorRef?.current?.value === "0") {
      setColorError(true);
    } else {
      setColorError(false);
    }
  };

  const [buferError, setBuferError] = useState(false);
  const buferValidatingHandler = () => {
    if (buferRef?.current?.value.length === 0) {
      setBuferError(true);
    } else {
      setBuferError(false);
    }
  };

  //VALIDACIONES EXTRA FE
  //Mate =/= Material
  const [crossError, setCrossError] = useState(false);
  const crossValidatingHandler = () => {
    if (
      categoryRef?.current?.value === "1" &&
      materialRef?.current?.value !== "5"
    ) {
      setCrossError(true);
    } else {
      setCrossError(false);
    }
  };

  //Termo y Matera =/= Virola
  const [anotherCrossError, setAnotherCrossError] = useState(false);
  const anotherCrossValidatingHandler = () => {
    if (
      (categoryRef?.current?.value === "2" ||
        categoryRef?.current?.value === "4") &&
      virolaRef?.current?.value !== "4"
    ) {
      setAnotherCrossError(true);
    } else {
      setAnotherCrossError(false);
    }
  };

  return (
    <Layout>
      
      <form
        method="POST"
        action="http://google.com"
        onSubmit={postData}
        className="flex flex-col text-center justify-center p-4 "
      >
        {/*<----------------------------CATEGORIA---------------------------> */}
        <label for="category_id" className="text-red-700 mt-2 text-center">
          CATEGORIA
        </label>
        <select
          name="category_id"
          id="category_id"
          className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          ref={categoryRef}
          onChange={(e) => {
            setCategory(e.target.value);
            categoryValidatingHandler();
          }}
        >
          <option value="0">Seleccionar</option>
          <option value="1">Mate</option>
          <option value="2">Matera</option>
          <option value="3">Bombilla</option>
          <option value="4">Termo</option>
        </select>

        {categoryError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            Debe seleccionar una categoría de producto
          </p>
        ) : (
          ""
        )}

        {/*<----------------------------PRECIO---------------------------> */}
        <label for="price" className="text-red-700 mt-2 text-center">
          {" "}
          PRECIO{" "}
        </label>
        <input
          type="number"
          name="price"
          id="price"
          className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block p-2.5 dark:bg-gray-700 after:dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setPrice(e.target.value);
            priceValidatingHandler();
          }}
          ref={priceRef}
          onBlur={() => priceValidatingHandler()}
        />

        {priceError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            Debe ingresar un precio
          </p>
        ) : (
          ""
        )}

        {/*<----------------------------MODELO---------------------------> */}
        <label for="model" className="text-red-700 mt-2 text-center">
          {" "}
          MODELO{" "}
        </label>
        <input
          type="text"
          name="model"
          id="model"
          className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setModel(e.target.value);
            modelValidatingHandler();
          }}
          ref={modelRef}
          onBlur={() => modelValidatingHandler()}
        />

        {modelError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            Debe ingresar un modelo que tenga al menos 4 caracteres
          </p>
        ) : (
          ""
        )}

        {/*<----------------------------STOCK---------------------------> */}
        <label for="stock" className="text-red-700 mt-2 text-center">
          {" "}
          STOCK{" "}
        </label>
        <input
          type="number"
          name="stock"
          id="stock"
          className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setStock(e.target.value);
            stockValidatingHandler();
          }}
          ref={stockRef}
          onBlur={() => stockValidatingHandler()}
        />

        {stockError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            Debe ingresar un stock para el producto
          </p>
        ) : (
          ""
        )}

        {/*<----------------------------DESCUENTO---------------------------> */}
        <label for="discount" className="text-red-700 mt-2 text-center">
          {" "}
          DESCUENTO{" "}
        </label>
        <input
          type="number"
          name="discount"
          id="discount"
          className="bg-gray-50 w-1/4 mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setDiscount(e.target.value);
            discountValidatingHandler();
          }}
          ref={discountRef}
          onBlur={() => discountValidatingHandler()}
        />

        {discountError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            Debe ingresar un descuento para el producto (entre 0 a 99)
          </p>
        ) : (
          ""
        )}

        {/*<----------------------------IMAGEN---------------------------> */}
        <label for="image" className="text-red-700 mt-2 text-center">
          {" "}
          IMAGEN{" "}
        </label>
        <input
          type="file"
          name="image"
          id="image"
          className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Subi tu imagen"
          onChange={(e) => {
            setImage(e.target.value);
            setBuffer(e.target.files[0]);
            buferValidatingHandler();
          }}
          ref={buferRef}
        />

        {buferError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            Debe ingresar una imagen
          </p>
        ) : (
          ""
        )}

        {/*<----------------------------VIROLA---------------------------> */}
        <label for="virola_id" className="text-red-700 mt-2 text-center">
          {" "}
          VIROLA{" "}
        </label>
        <select
          name="virola_id"
          id="virola_id"
          className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setVirola(e.target.value);
            virolaValidatingHandler();
          }}
          ref={virolaRef}
        >
          <option value="0">Seleccionar</option>
          <option value="1">Aluminio</option>
          <option value="2">Alpaca Lisa</option>
          <option value="3">Alpaca Cincelada</option>
          <option value="4">No aplica</option>
        </select>

        {virolaError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            Debe seleccionar un estilo de virola (si no corresponde, seleccionar
            "No aplica")
          </p>
        ) : (
          ""
        )}

        {anotherCrossError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            Las categorías "Matera" y "Termo" no tienen virola. Seleccionar "No
            aplica"
          </p>
        ) : (
          ""
        )}

        {/*<----------------------------MATERIAL---------------------------> */}
        <label for="material_id" className="text-red-700 mt-2 text-center">
          {" "}
          MATERIAL{" "}
        </label>
        <select
          name="material_id"
          id="material_id"
          className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
          onChange={(e) => {
            setMaterial(e.target.value);
            materialValidatingHandler();
          }}
          ref={materialRef}
        >
          <option value="0">Seleccionar</option>
          <option value="1">Alpaca</option>
          <option value="2">Acero Inoxidable</option>
          <option value="3">Cuero</option>
          <option value="4">Ecocuero</option>
          <option value="5">No aplica</option>
        </select>

        {materialError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            Debe seleccionar un material (si no corresponde, seleccionar "No
            aplica")
          </p>
        ) : (
          ""
        )}

        {crossError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            La categoría "Mate" no lleva material. Seleccionar "No aplica"
          </p>
        ) : (
          ""
        )}

        {/*<----------------------------COLOR---------------------------> */}
        <label for="color_id" className="text-red-700 mt-2 text-center">
          {" "}
          COLOR{" "}
        </label>
        <select
          name="color_id"
          id="color_id"
          className="bg-gray-50 w-1/4 border mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
          onChange={(e) => {
            setColor(e.target.value);
            colorValidatingHandler();
          }}
          ref={colorRef}
        >
          <option value="0">Seleccionar</option>
          <option value="1">Blanco</option>
          <option value="2">Negro</option>
          <option value="3">Marrón</option>
          <option value="4">Cuero crudo</option>
          <option value="5">Marrón oscuro</option>
          <option value="6">Rojo</option>
          <option value="7">Verde</option>
          <option value="8">Azul</option>
          <option value="9">Amarillo</option>
          <option value="10">no aplica</option>
        </select>

        {colorError === true ? (
          <p className="text-red-500 mt-2 text-sm text-center">
            Debe seleccionar un color (si no corresponde, seleccionar "No
            aplica")
          </p>
        ) : (
          ""
        )}

        <button
          type="submit"
          className="text-white bg-red-700 p-4 w-1/4 opacity-70 my-4 mx-auto rounded-lg"
          onClick={() => {
            categoryValidatingHandler();
            priceValidatingHandler();
            modelValidatingHandler();
            stockValidatingHandler();
            virolaValidatingHandler();
            materialValidatingHandler();
            colorValidatingHandler();
            buferValidatingHandler();
            crossValidatingHandler();
            anotherCrossValidatingHandler();
          }}
        >
          Enviar
        </button>
      </form>
    </Layout>
  );
}

export default ProductCreate;
