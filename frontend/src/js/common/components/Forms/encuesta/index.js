import { connect } from 'react-redux';
import { actions } from '../../../../redux/modules/forms/encuesta';
import EncuestaCrear from './encuestas';


const ms2p = (state) => {
    return {
        ...state.encuesta,
        bandera: true,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(EncuestaCrear);
