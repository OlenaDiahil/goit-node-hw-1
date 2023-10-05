const argv = require('yargs').argv;
const contacts = require("./db/contacts.js");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const all = await contacts.listContacts();
      console.log(all);
      break;

      case 'get':
        const getOne = await contacts.getContactById(id)
        console.log(getOne)
      break;

    case 'add':
        const add = await contacts.addContact(name, email, phone)
        console.log(add)
      break;

    case 'remove':
        const remove = await contacts.removeContact(id)
        console.log(remove)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);