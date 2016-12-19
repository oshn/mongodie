let Die = require('spb25-die');

class MongoDie extends Die {
    /**
     * Init
     * @param  {Mongo.Cursor} cursor
     * @param  {String} [loadProp]
     * @param  {String} [prop=_id]
     * @return {Promise}
     */
    init(cursor, loadKey, prop = '_id') {
        let toTable = arr => {
            let id = e => prop ? e[prop] : e;

            let [Table, mapKV] = loadKey ? [Map, e => [id(e), e[loadKey]]] : [Set, e => id(e)];

            let table = new Table(arr.map(mapKV));

            return super.init(table);
        };

        return cursor.toArray().then(toTable);
    }
}

module.exports = MongoDie;
//# sourceMappingURL=mongodie.js.map