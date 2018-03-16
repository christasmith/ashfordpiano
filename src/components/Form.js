/**
 * Created by christasmith on 3/15/18.
 */
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAddressCard} from '@fortawesome/fontawesome-free-solid'



class ReactFormLabel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
        )
    }
}

class ReactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        let newState = {};

        newState[e.target.name] = e.target.value;

        this.setState(newState)
    };


    handleSubmit = (e, message) => {
        e.preventDefault();

        let formData = {
            formSender: this.state.name,
            formEmail: this.state.email,
            formSubject: this.state.subject,
            formMessage: this.state.message
        };

        alert(formData.formMessage + "thanks for sending");




        // if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
        //     return false
        // }

        // $.ajax({
        //     url: '/some/url',
        //     dataType: 'json',
        //     type: 'POST',
        //     data: formData,
        //     success: function(data) {
        //         if (confirm('Thank you for your message. Can I erase the form?')) {
        //             this.setState({
        //                 firstName: '',
        //                 lastName: '',
        //                 email: '',
        //                 subject: '',
        //                 message: ''
        //             })
        //         }
        //     },
        //     error: function(xhr, status, err) {
        //         console.error(status, err.toString())
        //         alert('There was some problem with sending your message.')
        //     }
        // })

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        })
    };

    render() {
        return(
            <div className="form-container">
            <form className='form' onSubmit={this.handleSubmit}>
            <h3>Contact Us <FontAwesomeIcon  icon={faAddressCard}  color="brown" className="icon" /></h3>
                        <div className="row">
                            <div className="label">
                                <label for="name">First Name</label>
                            </div>
                            <div className="input">
                                <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Your name.."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="label">
                                <label for="email">Email</label>
                            </div>
                            <div className="input">
                                <input type="text" id="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Your last name.."/>
                            </div>
                        </div>
                <div className="row">
                    <div className="label">
                        <label for="subject">Subject</label>
                    </div>
                    <div className="input">
                        <input type="text" id="subject" name="subject" onChange={this.handleChange} value={this.state.subject} placeholder="Your last name.."/>
                    </div>
                </div>
                        <div className="row">
                            <div className="label">
                                <label for="message">Message</label>
                            </div>
                            <div className="input">
                                    <textarea type="text" id="message" name="message"  onChange={this.handleChange} value={this.state.message}placeholder="Your message.."/>
                            </div>
                            </div>
                        <div className="row">
                            <input type="submit" value="Submit"/>
                        </div>
            </form>
            </div>
    )
    }
}

export { ReactForm as default };
