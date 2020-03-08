import { connect } from 'react-redux';
import { actions } from '../../../../redux/modules/forms/pregunta';
import PreguntaCrear from './preguntas';


const ms2p = (state) => {
    return {
        ...state.pregunta,
        bandera: true,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(PreguntaCrear);
