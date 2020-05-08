import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';

class SessionForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: ''
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.demoUser = this.demoUser.bind(this);
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

   demoUser() {
      this.setState({ username: 'demo_user', password: 'password' })
   }

   componentWillUnmount() {
      dispatch(this.props.clearErrors());
   }

   renderErrors() {
      return (
         <ul className="error">
               {this.props.errors.map((error, i) => (
                  <li key={`error-${i}`} >
                     {error}
                  </li>
               ))}
         </ul>
      );
   }


   render() {
      return (
         <div className='outer-div'>

            <div className="shoe_pane">
               <img className ="bred_login" src={window.bredURL} alt="bred"></img>
            </div>

            <div className="session-form-container">
               <h1 className="sessionHeader">{this.props.formType === 'login' ? "Log In" : "Create An Account" }</h1>
                  <form onSubmit={this.handleSubmit}>
                     <br />
                     {this.renderErrors()}

                     <div className="login-form">
                        <br />
                        <label className="username">Username
                           <br />
                           <input type="text"
                                 value={this.state.username}
                                 onChange={this.update('username')}
                                 className="login-input"
                           />
                        </label>
                        <br />
                        <label className="password">Password
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

                     <div className="session-buttons">
                        <button className='demo-user' onClick={() => this.demoUser()}>DEMO USER</button>
                        <input className="session-submit" type="submit" value={this.props.formType === 'login' ? "LOG IN" : "SIGN UP"} />
                     </div>
                     
                  </form>
               </div>
            </div>
         // </div>
         
      );
   }
}

export default SessionForm;
