import React, { Component } from 'react';
import PreguntaF from './preguntasF';

export default class PreguntaCrear extends Component {
    componentWillMount() {
        console.log('props', this.props);
    }
    
    onsubmit = (values) => {
        console.log(values);
        console.log('props', this.props);
        this.props.crearPregunta(values);
    }


    render() {
        return (
            <div>
                <h5 className="text-center pv">Preguntas</h5>

                <PreguntaF onSubmit={this.onsubmit} />

            </div>

        );
    }
}