import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate, validators } from 'validate-redux-form';
import { renderField } from '../../Utils/renderField';


function PreguntaF(props) {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <div>

            <form
                name="PreguntaF"
                onSubmit={handleSubmit}
            >
                {/* <Prompt
                    when={props.prompt}
                    message="¿ Estas seguro que quieres dejar la pagina?"
                /> */}
                <Field
                    name="preguntas"
                    type="text"
                    placeholder="Escribe tu pregunta"
                    className="Search-input"
                    component={renderField}
                />
                <Field
                    name="encuesta"
                    type="text"
                    placeholder="Escribe el numero de encuesta"
                    className="Search-input"
                    component={renderField}
                />

                <button type="submit" className="btn btn-primary btn-sm mr-1"> Guardar </button>


            </form>
        </div>
    );
}
export default reduxForm({
    form: 'PreguntaF', // a unique identifier for this form
    validate: (data) => {
        return validate(data, {

            preguntas: validators.exists()('Este campo es requerido'),
            encuesta: validators.exists()('Este campo es requerido'),
        });
    },
})(PreguntaF);

/* export default Pregunta; */
