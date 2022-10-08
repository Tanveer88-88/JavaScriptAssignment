const person = {
    firstName: 'testFirstName',
    lastName: 'testLastName'
  };

  function person()
  {
    this.firstName="Tanveer";
    this.lastName="Mobeen";
  }

  const temPerson=new person();
  console.log(temPerson.firstName);
  console.log(temPerson.lastName);