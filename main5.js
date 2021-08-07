function calculateAge(e){
	var dob = new Date(e.target.value);
	
	var dobYear = dob.getYear();  
    var dobMonth = dob.getMonth();  
    var dobDate = dob.getDate();  
      
    var now = new Date();  
    var currentYear = now.getYear();  
    var currentMonth = now.getMonth();  
    var currentDate = now.getDate();  
      
    var age = {};  
    var ageString = "";  
    
    yearAge = currentYear - dobYear;  
      
    if (currentMonth >= dobMonth)  
      var monthAge = currentMonth - dobMonth;  
    else {  
      yearAge--;  
      var monthAge = 12 + currentMonth - dobMonth;  
    }  
  
    if (currentDate >= dobDate)  
      var dateAge = currentDate - dobDate;  
    else {  
      monthAge--;  
      var dateAge = 31 + currentDate - dobDate;  
  
      if (monthAge < 0) {  
        monthAge = 11;  
        yearAge--;  
      }  
    }  
    
    age = {  
    years: yearAge,  
    months: monthAge,  
    days: dateAge  
    };  
    
    ageString = age.years + " Years "+ age.months + " months "+age.days+" days old."    
        
    
	 
	document.getElementById("age").value=ageString
}


function findState(pin){
	pincode={
		"507111":"Hyderabad",
		"507121":"Kamareddy"
	}
	var state = pincode[pin];
	if(state==null)
	{
		document.getElementById("state").value="State Not Found for given pincode";
	}else{
		document.getElementById("state").value=state
	}
}