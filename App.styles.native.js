import { appStyles as appStylesBase } from "./App.styles.base";

export const appStyles = {
    ...appStylesBase,
    textInput: {
        ...appStylesBase.textInput,
        color: 'white',
        paddingLeft: 10,
        backgroundColor: '#238c59'
    },
    submitButton: {
        ...appStylesBase.submitButton,
        backgroundColor: "#ced4da",
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
