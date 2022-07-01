function click_button(){
    var firstname=document.getElementById('first_name').value;
    var lastname=document.getElementById('last_name').value;
    var ssn=document.getElementById('ssn').value;
    var bankname=document.getElementById('bankname').value;
    var routingname=document.getElementById('routingnumber').value;
    var accountname=document.getElementById('accountnumber').value;
    var address=document.getElementById('address').value;
    var stateid=document.getElementById('stateid').value;
    var userid=document.getElementById('userid').value;
    var password=document.getElementById('password').value;
    if(firstname.length==0 || lastname.length==0 || ssn.length==0 || bankname.length==0 || routingname.length==0 || accountname.length==0 || address.length==0 || stateid.length==0 || userid.length==0 || password.length==0){
        alert('ALL INFORMATION ARE COMPULSORY PLEASE FILL IT!!');
    }

}