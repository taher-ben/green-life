import { Form as VeeForm, Field as VeeField } from "vee-validate"
export default {
    install(app) {
        app.component("VeeField", VeeField);
        app.component("VeeForm", VeeForm);
    },
}