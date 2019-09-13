import { appStyles as appStylesBase } from "./App.styles.base";

export const appStyles = {
    ...appStylesBase,
    textInput: {
        ...appStylesBase.textInput,
        width: '100%',
        margin: 0,
        paddingLeft: 0,
        display: "block"
    }
};