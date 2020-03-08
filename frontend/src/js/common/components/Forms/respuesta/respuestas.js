import React from 'react';
import '../encuesta/encuestas.css';
import { Prompt } from 'react-router';

function Respuesta(props) {
    return (

        <div>

            <form
                className="Search"
                onSubmit={props.handelSubmit}
            >
                <Prompt
                    when={props.prompt}
                    message="¿ Estas seguro que quieres dejar la pagina?"
                />
                <label>
                    aqui va la pregunta
                </label>

                <input

                    className="Search-input"
                    type="text"
                    placeholder="Escribe tu respuesta "
                    name='respuesta"'
                />
                <button type="submit" className="btn btn-success btn-sm mr-1"> Enviar </button>


            </form>
        </div>
    );
}
export default Respuesta;
