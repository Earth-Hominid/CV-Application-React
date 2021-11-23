class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
      },
      personalData: [
        // {
        //   id: uniqid(),
        //   firstname: 'Firstname',
        //   lastname: 'lastname',
        //   email: 'johndoe@johndoe.com',
        //   phone: '999-999-9988',
        // },
      ],
      edit: false,
    };
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleFirstnameChange = (event) => {
    this.setState({
      personalInfo: {
        firstname: event.target.value,
      },
    });
  };

  handleLastnameChange = (event) => {
    this.setState({
      personalInfo: {
        lastname: event.target.value,
      },
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      personalInfo: {
        email: event.target.value,
      },
    });
  };

  handlePhoneChange = (event) => {
    this.setState({
      personalInfo: {
        phone: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      peronalData: this.state.personalData.concat(this.state.personalInfo),
      personalInfo: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
      },
      // personalInfo: this.state.personalInfo.concat({
      //   id: uniqid(),
      //   firstname: this.state.firstname,
      //   lastname: this.state.lastname,
      //   email: this.state.email,
      //   phone: this.state.phone,
      // }),
      // firstname: '',
      // lastname: '',
      // email: '',
      // phone: '',
    });
  };

  render() {
    const { personalInfo } = this.state;
    return (
      <div className="main_form_card">
        <form className="personal_form" onSubmit={this.handleSubmit}>
          <label className="form_text">Name:</label>
          <input
            type="text"
            value={personalInfo.firstname}
            onChange={this.handleFirstnameChange}
            id="fname"
            name="fname"
            className="input"
          ></input>
          <label className="form_text">Surname:</label>
          <input
            className="input"
            type="text"
            value={personalInfo.lastname}
            onChange={this.handleLastnameChange}
            id="lname"
            name="lname"
          ></input>
          <label className="form_text">Email Address</label>
          <input
            type="email"
            value={personalInfo.email}
            onChange={this.handleEmailChange}
            className="input"
          ></input>
          <label className="form_text">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="input"
            placeholder="Country code + City code + Phone number"
            maxLength="255"
            value={personalInfo.phone}
            onChange={this.handlePhoneChange}
          ></input>
          <div className="button_holder">
            <input id="submit_button" type="submit" value="Submit"></input>
            <input id="reset_button" type="reset"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Header;
