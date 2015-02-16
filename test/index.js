var should = require('chai').should(),
      make_bbls = require('../index.js'),
      bbl = make_bbls.bbl;

describe('#bbl', function(){
  it('converts 1, 40, 5 into \'1000400005\'', function(){
    bbl(1, 40, 5).should.equal('1000400005');
  });

  it('converts \'5\', \'0432\', \'0022\' into \'5004300022\'', function(){
    bbl('5', '0430', '0022').should.equal('5004300022');
  });  

  it('converts \'1\', 40, \'0005\' into \'1000400005\'', function(){
    bbl('1', 40, '0005').should.equal('1000400005');
  });  

  it('converts \'BROOKLYN\', 5, \'0045\' into \'3000050045\'' , function(){
    bbl('BROOKLYN', 5, '0045').should.equal('3000050045');
  });

  it('converts \'QN\', \'56\', \'008\' into \'4000560008\'', function(){
    bbl('QN', '56', '008').should.equal('4000560008');
  });
  it('converts \'Queens\', 9, 49 into 4000090049 when passing `true` as the fourth parameter.', function() {
    bbl('Queens', 9, 49, true).should.equal(4000090049);
  });    
});