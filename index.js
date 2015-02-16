// Creates a BBL number for joining NYC open data sets from separate borough, block, and lot codes.
module.exports = {
  bbl: function bbl(borough, block, lot, numeric) {
    var boroNum;
    var blockNum = block.toString();
    var lotNum = lot.toString();
    var BBL = '';

    if (borough === undefined || block === undefined || lot === undefined) {
      console.log('module requires three arguments to be called:\n' +
                  ' borough name or corresponding numeric code (1-5) \n block number (integer 1 - 5 digits) \n lot number (integer 1-4 digits)'
                  );
      return;
    }

    if (typeof borough ==='string') {
      if (borough.toLowerCase() === 'manhattan' || borough.toLowerCase() === 'mn' || borough === '1') {
          boroNum = '1';
        } else if (borough.toLowerCase() === 'bronx' || borough.toLowerCase() === 'bx' || borough === '2') {
          boroNum = '2';
        } else if (borough.toLowerCase() === 'brooklyn' || borough.toLowerCase() === 'bk' || borough === '3') {
          boroNum = '3';
        } else if (borough.toLowerCase() === 'queens' || borough.toLowerCase() === 'qn' || borough === '4') {
          boroNum = '4';
        } else if (borough.toLowerCase() === 'staten island' || borough.toLowerCase() ==='si' || borough === '5') {
          boroNum = '5';
        } else { 
            boroNum = 'err'; 
            console.log("there's a mistake with the borough name: " + borough);
        }
    } else if (typeof borough === 'number') {
      boroNum = borough.toString();
    } else {
      console.log("error reading borough value: ", borough);
      return;
    }

    if (block != undefined && lot != undefined) {
      if (block.length > 5 || lot.length > 4) {
      console.log("error: the block and/or lot numbers are too long!");
      return;      
      } else {
          while (blockNum.length !== 5) {
            blockNum = '0' + blockNum;
          }
          while (lotNum.length !== 4) {
            lotNum = '0' + lotNum;
          }
          BBL = boroNum + blockNum + lotNum;
      }
    } else {
      return 'error with block or lot number';
    } 

    if (numeric === true) {
      return parseInt(BBL);
    } else {
      return BBL;
    }    
  }
};