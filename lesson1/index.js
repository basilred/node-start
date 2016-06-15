'use strict';

module.exports = function hashtagable(str) {
    let hashTag = '#',
        reg = /[\s+]/;

    hashTag += str.trim().split(reg).map(item => {
        item = item.replace(/\.+/, '');
        return item ? item[0].toUpperCase() + item.slice(1) : '';
    }).join('');

    return hashTag;
}
