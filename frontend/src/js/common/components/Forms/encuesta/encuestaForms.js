import React from 'react';
import './encuestas.css';
import { Field, reduxForm } from 'redux-form';
import { validate, validators } from 'validate-redux-form';
import { renderField } from '../../Utils/renderField';

function EncuestaF(props) {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <form
            name="EncuestaF"
            className="Search"
            onSubmit={handleSubmit}
        >
            {/* <Prompt
                when={props.prompt}
                message="¿ Estas seguro que quieres dejar la pagina?"
            /> */}
            <Field
                name="nombreEncuesta"
                type="text"
                placeholder="Nombre de tu encuesta"
                className="Search-input"
                component={renderField}
            />
            <Field
                name="descripcionEncuentas"
                type="text"
                placeholder="Nombre de tu encuesta"
                className="Search-input"
                component={renderField}
            />
            <Field
                name="profile"
                type="text"
                placeholder="perfil"
                className="SelectField"
                component={renderField}
            />
            <button type="submit" className="btn btn-primary btn-sm mr-1"> Guardar </button>
            {/* <button  className="btn btn-secondary btn-sm mr-1">buscar</button>
            <button  className="btn btn-danger btn-sm mr-1">Borrar</button> */}
        </form>
    );
}

export default reduxForm({
    form: 'EncuestaF', // a unique identifier for this form
    validate: (data) => {
        return validate(data, {

            nombreEncuesta: validators.exists()('Este campo es requerido'),
            descripcionEncuentas: validators.exists()('Este campo es requerido'),
            profile: validators.exists()('Este campo es requerido'),
        });
    },
})(EncuestaF);
