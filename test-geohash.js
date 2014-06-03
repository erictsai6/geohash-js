function test(value, expectedValue) {
  console.log('Testing ' + value + ' against ' + expectedValue);
  if (value === expectedValue) {
    return true;
  }
  console.log('   Expected: ' + expectedValue + ' but got ' + value + ' instead.');
  return false;
}

var v, ev;
var lat, lng;

test(geohash.getPrecision(), undefined);

geohash.setPrecision(2);
test(geohash.getPrecision(), 2);

geohash.setPrecision(10);
test(geohash.getPrecision(), 10);

lat = 50;
lng = -50;

v = geohash.encodeGeoHash(lat, lng);
test(v.length, 10);

// TODO still have to test the geohash encode and decode functions
