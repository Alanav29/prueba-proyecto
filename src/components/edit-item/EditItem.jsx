import React, {useState} from 'react';
import GeneralButton from '../general/buttons/GeneralButton';
import TextInput from '../general/inputs/TextInput';
import PriceInput from '../general/inputs/PriceInput';
import {useForm} from "react-hook-form";


const EditForm = () => {
    const { handleSubmit, register } = useForm();
  
  //  const putProduct 
  
    return (
      <>
        <h1 className="mb-3">Editar Producto</h1>
        <form
          className="w-auto h-auto pb-5 pb-md-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <NameInput
          register={register}
          placeholderText={"Destellos del desierto"}
          isRequired={true}
          labelText={"Título de la obra"}
          id={"admin-gallery-form-title"}
          nameText={"admin-gallery-form-title"}
        />

        <FrameDimensionsInput
          register={register}
          placeholderText={"Alto de la obra en centímetros"}
          isRequired={true}
          labelText={"Altura"}
          id={"admin-gallery-form-height"}
          nameText={"admin-gallery-form-height"}
        />
        <FrameDimensionsInput
          register={register}
          placeholderText={"Ancho de la obra en centímetros"}
          isRequired={true}
          labelText={"Anchura"}
          id={"admin-gallery-form-width"}
          nameText={"admin-gallery-form-width"}
        />
         
         <TextInput
          register={register}
          placeholderText={"Amarillo"}
          isRequired={true}
          labelText={"Color"}
          id={"admin-gallery-form-color"}
          nameText={"color"}
        />

        <PriceInput
          register={register}
          placeholderText={"25000"}
          isRequired={true}
          labelText={"Precio"}
          id={"admin-gallery-form-price"}
          nameText={"price"}
        />

        <TextInput
          register={register}
          placeholderText={"Óleo"}
          isRequired={true}
          labelText={"Técnica"}
          id={"admin-gallery-form-technique"}
          nameText={"technique"}
        />
          <GeneralButton
            buttonText={"Guardar Cambios"}
            buttonColorClass={"bg-black text-white"}
          />
        </form>
      </>
    );
  };
  
  export default EditForm;
  