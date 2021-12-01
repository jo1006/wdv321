// JavaScript Document


/*

Email 
	required
	dependency: use regular expression for email format

	Good: jmweaver2@dmacc.edu or j.weave37@gmail.com or j.weave37@gm-ail.co
	Invalid: jmweaver2@dmacc or jweave37.gmail.com or missing components @ . characters


Zip Code
	required
	integer
	format: 99999 or 99999-9999
	dependency: use USPS list to validate if the zip code is valid

	Good: 50315 or 50315-2406
	Invalid: 5315 or 50315-24 or 501-50315 or any symbols, any decimals


Replace Special Characters


*/


var assert = require('chai').assert;
var Data = require('../app/Data');

describe("Testing Data", function(){
//EMAIL
	//required
	it("email required ''", function(){
		var obj = new Data("");
		assert.equal(obj.validateEmail(), false); //"Email is required");		
	});

	it("email required null", function(){
		var obj = new Data(null);
		assert.equal(obj.validateEmail(), false);  //"Email is required");		
	});

	//validate format of email entirety is good
	it("valid email jmweaver2@dmacc.edu", function(){
		var obj = new Data("jweaver2@dmacc.edu");
		assert.equal(obj.validateEmail(), true);		
	});
	
	it("valid email j.weave37@gmail.co", function(){
		var obj = new Data("j.weave37@gmail.co");
		assert.equal(obj.validateEmail(), true);		
	});	
	
	it("valid email j.weave37@gm-ail.co", function(){
		var obj = new Data("j.weave37@gm-ail.co");
		assert.equal(obj.validateEmail(), true);		
	});

	//validate @ exists
	it("invalid email . instead of @ jweave37.gmail.com", function(){
		var obj = new Data("jweave37.gmail.com");
		assert.equal(obj.validateEmail(), false);  //"Invalid Email Format");		
	});

	//validate right of .
	it("invalid email no .com,etc jmweaver2@dmacc", function(){
		var obj = new Data("jweaver2@dmacc");
		assert.equal(obj.validateEmail(), false);  //"Invalid Email Format");		
	});

	//validate left of @ exists
	it("invalid email needs at least 1 character to left of @ @x.au", function(){
		var obj = new Data("@x.au");
		assert.equal(obj.validateEmail(), false); //"Invalid Email Format");		
	});

//Zip Code
	//required
	it("zip required ''", function(){
		var obj = new Data("");
		assert.equal(obj.validateZip(), false); 
	});

	it("zip required null", function(){
		var obj = new Data(null);
		assert.equal(obj.validateZip(), false);  		
	});

	//valid format
	it("invalid zip with decimal", function(){
		var obj = new Data(5.315);
		assert.equal(obj.validateZip(), false);  		
	});

	it("invalid zip with +", function(){
		var obj = new Data(503+5);
		assert.equal(obj.validateZip(), false); 		
	});

	it("valid zip 5 digit", function(){
		var obj = new Data(50315);
		assert.equal(obj.validateZip(), true);  		
	});

	it("valid zip 9 digit", function(){
		var obj = new Data(50315-2406);
		assert.equal(obj.validateZip(), true);  		
	});

	it("invalid zip 4 digit too small", function(){
		var obj = new Data(5315);
		assert.equal(obj.validateZip(), false);  		
	});

	it("invalid zip 11 digit too big", function(){
		var obj = new Data(53151234901);
		assert.equal(obj.validateZip(), false);  		
	});

	it("invalid zip 11 digit with correct hyphen too big", function(){
		var obj = new Data(53151-234901);
		assert.equal(obj.validateZip(), false);  		
	});

	it("invalid zip hyphen placement", function(){
		var obj = new Data(511-50315);
		assert.equal(obj.validateZip(), false);  
	});

});	//end "Testing Data"