const genId1 = require('xyoq_xid');
const genId2 = require('qdgd_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|ftIeWC927j|' + genId2()).digest('base64');
}


module.exports = generateKey;
