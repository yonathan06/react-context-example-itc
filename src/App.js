import React from 'react';
import { getUser, createUser } from './lib/api';
import './App.css';
import FirstChild from "./components/FirstChild";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: false,
      loadingAddUser: false
    };
  }
  componentDidMount() {
    this.fetchUser(3).then();
  }

  async fetchUser(userId) {
    this.setState({ loading: true });
    const response = await getUser(userId);
    const user = response.data;
    this.setState({ user, loading: false });
  }

  updateForm(form) {
    this.setState({ form: Object.assign(this.state.form, form) });
  }

  handleOnFormSubmit(event) {
    this.submitUserForm();
    event.preventDefault();
  }

  async submitUserForm(form) {
    this.setState({ loadingAddUser: true });
    const response = await createUser(form);
    this.setState({ loadingAddUser: false });
    const body = response.data;
    await this.fetchUser(body.id);
  }

  render() {
    const { loading, user, loadingAddUser } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {loading && <h5>Loading...</h5>}
          {!loading && user && (
            <p>
              Name: {user.name} <br />
              <img src={user.avatar} alt={user.name} />
            </p>
          )}
          <FirstChild
            onSubmit={async (form) => await this.submitUserForm(form)}
            loadingAddUser={loadingAddUser}
          />
        </header>
      </div>
    );
  }
}

export default App;
