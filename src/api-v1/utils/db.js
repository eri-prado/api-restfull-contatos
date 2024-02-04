import Datastore from 'nedb';

const pessoasDB = new Datastore();
const organizacaoDB = new Datastore();

export default {
  pessoasDB,
  organizacaoDB,
};
