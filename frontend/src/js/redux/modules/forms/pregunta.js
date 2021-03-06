import { handleActions } from 'redux-actions';
import { push } from "react-router-redux";
import { NotificationManager } from "react-notifications";
import { api } from "api";

const SUBMIT = 'REGISTER_SUBMIT';
const LOADER = 'REGISTER_LOADER';

export const constants = {
    SUBMIT,
};

// ------------------------------------
// Pure Actions
// ------------------------------------

export const setLoader = loader => ({
    type: LOADER,
    loader,
});

// ------------------------------------
// Actions
// ------------------------------------

const crearPregunta = (data = {}) => (dispatch) => {
    console.log('estoy aqui');
    dispatch(setLoader(true));
    api.post('pregunta', data).then(() => {
        dispatch(push("/pregunta"));
        NotificationManager.success('Pregunta creada con éxito', 'Éxito', 3000);
    }).catch(() => {
        NotificationManager.error('Datos incorrectos, vuelva a intentar', 'ERROR', 0);
    }).finally(() => {
        dispatch(setLoader(false));
    });
};


export const actions = {
    crearPregunta,
};

export const reducers = {
    [LOADER]: (state, { loader }) => {
        return {
            ...state,
            loader,
        };
    },
};

export const initialState = {
    loader: false,
};

export default handleActions(reducers, initialState);
