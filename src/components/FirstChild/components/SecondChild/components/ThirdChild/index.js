import React from 'react';
import { MyContext } from '../../../../../../context';

export default class ThirdFormChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        avatar: ''
      }
    };
  }

  handleOnFormSubmit(event, onSubmit) {
    event.preventDefault();
    onSubmit(this.state.form);
    this.setState({ form: { name: '', avatar: '' } });
  }

  updateForm(newForm) {
    this.setState({ form: Object.assign(this.state.form, newForm) });
  }

  render() {
    const { form } = this.state;
    return (
      <MyContext.Consumer>
        {({ onSubmit, loadingAddUser }) => (
          <form
            className="wrapper"
            onSubmit={event => this.handleOnFormSubmit(event, onSubmit)}
          >
            <label>Name</label>
            <input
              type="text"
              value={form.name}
              onChange={event => this.updateForm({ name: event.target.value })}
              disabled={loadingAddUser}
            />
            <label>Avatar Url</label>
            <input
              type="text"
              value={form.avatar}
              onChange={event =>
                this.updateForm({ avatar: event.target.value })
              }
              disabled={loadingAddUser}
            />
            <input
              type="submit"
              disabled={loadingAddUser}
              value="Create user"
            />
          </form>
        )}
      </MyContext.Consumer>
    );
  }
}
