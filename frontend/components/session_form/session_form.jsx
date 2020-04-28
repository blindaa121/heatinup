import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-form-container">
                    <div className="shoe_pane">
                        <img src="/assets/login_breds.jpeg" alt="bred"></img>
                    </div>
                    <div className="session-input-container">
                    <h1 className="sessionHeader">{this.props.formType === 'login' ? 'L O G I N' : 'C R E A T E A N A C C O U N T'}</h1>
                        <form onSubmit={this.handleSubmit}>
                            <br />
                            {this.renderErrors()}
                            <div className="login-form">
                                <br />
                                <label className="username">U S E R N A M E
                                        <br />
                                        <input type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className="login-input"
                                        />
                                </label>
                                <br />
                                <label className="password">P A S S W O R D
                                    <br />
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="login-input"
                                        />
                                </label>
                                <br />
                            </div>
                            <p className='sessionLink'>{this.props.navLink}</p>
                            <input className="session-submit" type="submit" value={this.props.formType === 'login' ? "LOG IN" : "SIGN UP"} />
                        </form>
                    </div>
            </div>
        );
    }
}

export default SessionForm;
