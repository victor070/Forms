import React, { Component } from 'react';
import EncuestaF from './encuestaForms';

export default class EncuestaCrear extends Component {
    componentWillMount() {
        console.log('props', this.props);
    }
    
    onsubmit = (values) => {
        console.log(values);
        console.log('props', this.props);
        this.props.crearEncuesta(values);
    }


    render() {
        return (
            <div>
                <h5 className="text-center pv">Encuesta</h5>

                <EncuestaF onSubmit={this.onsubmit} />

            </div>

        );
    }
}
