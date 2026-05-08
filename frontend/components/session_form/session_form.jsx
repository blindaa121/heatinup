import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm({ ...this.state });
    }

    demoUser() {
        this.setState({ username: 'demo_user', password: 'password' });
    }

    renderErrors() {
        const { errors } = this.props;
        if (!errors || errors.length === 0) return null;
        return (
            <ul className="auth__errors">
                {errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
        );
    }

    render() {
        const { formType, navLink } = this.props;
        const isLogin = formType === 'login';

        return (
            <div className="auth">
                <aside
                    className="auth__visual"
                    style={{ backgroundImage: `url(${window.bredURL})` }}
                    aria-hidden="true"
                />

                <section className="auth__panel">
                    <div className="auth__panel-inner">
                        <span className="auth__brand">HEAT</span>
                        <h1 className="auth__title">
                            {isLogin ? 'Welcome back.' : 'Create your account.'}
                        </h1>
                        <p className="auth__subtitle">
                            {isLogin
                                ? 'Sign in to access your cart and listings.'
                                : 'Set up an account to start collecting.'}
                        </p>

                        <form className="auth__form" onSubmit={this.handleSubmit}>
                            {this.renderErrors()}

                            <label className="auth__field">
                                <span className="auth__label">Username</span>
                                <input
                                    type="text"
                                    className="auth__input"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    autoComplete="username"
                                />
                            </label>

                            <label className="auth__field">
                                <span className="auth__label">Password</span>
                                <input
                                    type="password"
                                    className="auth__input"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    autoComplete={isLogin ? 'current-password' : 'new-password'}
                                />
                            </label>

                            <button type="submit" className="auth__primary">
                                {isLogin ? 'Sign In' : 'Sign Up'}
                            </button>

                            {isLogin && (
                                <button
                                    type="button"
                                    className="auth__secondary"
                                    onClick={this.demoUser}
                                >
                                    Use demo account
                                </button>
                            )}
                        </form>

                        <p className="auth__footnote">{navLink}</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default SessionForm;
