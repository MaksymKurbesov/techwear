import { observable, computed, action } from "mobx";

class Form {
  @observable firstName = "";
  @observable lastName = "";
  @observable phoneNumber = "";
  @observable email = "";
  @observable delivery = "";

  @action setFirstName = (firstName) => {
    this.firstName = firstName;
  };

  @action setLastName = (lastName) => {
    this.lastName = lastName;
  };

  @action setPhoneNumber = (phoneNumber) => {
    this.phoneNumber = phoneNumber;
  };

  @action setEmail = (email) => {
    this.email = email;
  };

  @action setDelivery = (delivery) => {
    this.delivery = delivery;
  };
}

export default Form;
