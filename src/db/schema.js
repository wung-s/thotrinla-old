import Realm from 'realm';

class Song extends Realm.Object { }
Song.schema = {
  name: 'Song',
  properties: {
    key: 'int',
    title: { type: 'string', default: '' },
    stanzaCnt: 'int',
    firstStanza: { type: 'string', default: '' },
    secondStanza: { type: 'string', default: '' },
    thirdStanza: { type: 'string', default: '' },
    fourthStanza: { type: 'string', default: '' },
    fifthStanza: { type: 'string', default: '' },
    sixthStanza: { type: 'string', default: '' },
    chorus: { type: 'string', default: '' }
  }
};
class Animal extends Realm.Object { }
Animal.schema = {
  name: 'Animal',
  properties: {
    name: 'string'
  }
}

export default new Realm({ schema: [Song, Animal] });
