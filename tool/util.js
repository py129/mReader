let util = {
    getQuery: function (str) {
        let queryStr = str || location.search.substring(1, location.search.length);
        let query = {};
        let array1 = queryStr ? queryStr.split('&') : [];
        array1.map(function (item, index) {
            if (query.hasOwnProperty(item.split('=')[0])) {
                query[item.split('=')[0]] instanceof Array
                    ? query[item.split('=')[0]].push(decodeURIComponent(item.split('=')[1]))
                    : query[item.split('=')[0]] = [query[item.split('=')[0]], decodeURIComponent(item.split('=')[1])]
            } else {
                query[item.split('=')[0]] = decodeURIComponent(item.split('=')[1]);
            }
        });
        return query;
    }
}
module.exports = {
    util: util
};