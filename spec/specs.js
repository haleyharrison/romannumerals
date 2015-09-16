describe('romanNumeral',function() {
  it("returns the number of thousands if they exist",function() {
     expect(romanNumeral(1000)).to.equal("M");
   });

   it("returns the number of hundreds if they exist",function() {
     expect(romanNumeral(200)).to.equal("CC");
   });

   it("returns the number of tens if they exist",function() {
     expect(romanNumeral(3210)).to.equal("MMMCCX");
   });

   it("returns the number of ones if they exist",function() {
     expect(romanNumeral(27)).to.equal("XXVII");
   });
});
