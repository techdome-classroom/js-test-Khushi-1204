const decodeTheRing = function (s, p) {
      let sIndex = 0; // Index for iterating over the secret message
      let pIndex = 0; // Index for iterating over the decoder key
    
      while (sIndex < s.length && pIndex < p.length) {
        if (p[pIndex] === '*') {
    
          while (sIndex < s.length && pIndex < p.length && p[pIndex] === '*') {
            pIndex++;
            if (pIndex < p.length && p[pIndex] !== '?' && p[pIndex] !== s[sIndex]) {
              
              sIndex++;
            }
          }
        } else if (p[pIndex] === '?' || p[pIndex] === s[sIndex]) {
      
          sIndex++;
          pIndex++;
        } else {
      
          return false;
        }
      }
    
      // If we have iterated through the entire decoder key and secret message without any mismatches, return true
      return sIndex === s.length && pIndex === p.length;
    };
    
    module.exports = decodeTheRing;
    
