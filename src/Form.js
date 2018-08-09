import React from 'react';
import firebase from 'firebase';

export default class Form extends React.Component {
    state = {
        completeName: "",
        email: "",
        birthdate: ""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const attendesRef = firebase.database().ref().child('attendes')
        attendesRef.push({
            commpleteName: this.state.completeName,
            email: this.state.email,
            birthdate: this.state.birthdate,
        })
        this.setState({
            completeName: '',
            email: '',
            birthdate: ''
        });
    }

    render() {
        return (
            <form>
                <input
                    name='completeName'
                    placeholder='Nombre Completo'
                    value= { this.state.completeName }
                    onChange= { e => this.change(e) }
                />
                <input
                    name='email'
                    placeholder='Correo electronico'
                    value= { this.state.email }
                    onChange= { e => this.change(e) }
                />
                <input
                    name='birthdate'
                    placeholder='Fecha de cumpleaños'
                    value= { this.state.birthdate }
                    onChange= { e => this.change(e) }
                />
                <button onClick= {e => this.onSubmit(e)}> Guardar</button>

            </form>
        )
    }
}