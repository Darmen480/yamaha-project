function formValidation(){

    let name = document.purchase.name;
    let address = document.purchase.address;
    let contact = document.purchase.contact;
    let date = document.purchase.date;
    let zipcode= document.purchase.zipcode;
    



        var check = /^[A-Za-z+\s]+$/;
        if(name.value.match(check))
        {
     
        }else{
            alert('Wrong Input! Please insert correct characters according to the respective fields!');
            name.focus();
            return false;
        }
           

           var numbers = /^[0-9]+$/;
            if(contact.value.match(numbers)) {
                

            } else {

            alert('Wrong Input! Please insert correct characters according to the respective fields')
              var numbers = /^[0-9]+$/;
            if(date.value.match(numbers)) {
                

            } else {

            alert('Wrong Input! Please insert correct characters according to the respective fields!');
            date.focus();
                return false;
        

              var numbers = /^[0-9]+$/;
            if(date.value.match(numbers)) {
                

            } else {

            alert('Wrong Input! Please insert correct characters according to the respective fields!');
            date.focus();
                return false;
            }




              var numbers = /^[0-9]+$/;
            if(zipcode.value.match(numbers)) {
                

            } else {

            alert('Wrong Input! Please insert correct characters according to the respective fields!');
            zipcode.focus();
                return false;
            }




	alert("We received your online purchase form. We will get back to you soon!")
	return true;

}