import React from 'react'
import { Field, reduxForm } from 'redux-form'

class Info extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return <div>{error}</div>
        }
    }

    renderInputField = ({ input, label, meta }) => {
        return (
            <div>
                <input {...input} type="text" placeholder={label} />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <div>
                        <Field
                            name="nome"
                            component={this.renderInputField}
                            label="Nome *"
                        />
                    </div>
                    <div>
                        <Field
                            name="cognome"
                            component={this.renderInputField}
                            label="Cognome *"
                        />
                    </div>
                    <div>
                        <Field
                            name="email"
                            component={this.renderInputField}
                            label="Email *"
                        />
                    </div>
                    <div>
                        <Field
                            name="azienda"
                            component={this.renderInputField}
                            label="Azienda"
                        />
                    </div>
                    <div>
                        <Field
                            name="citta"
                            component={this.renderInputField}
                            label="Città / CAP / Provincia"
                        />
                    </div>
                    <button type="submit" disabled={pristine || submitting}>Visualizza</button>
                </form>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {}

    if (!formValues.nome) {
        errors.nome = "Aggiungi il nome"
    }

    if (!formValues.cognome) {
        errors.cognome = "Aggiungi il cognome"
    }

    if (!formValues.email) {
        errors.email = "Aggiungi l'email"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
        errors.email = 'Email non valida'
    }

    return errors
}

export default reduxForm({
    form: 'companyData',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(Info)