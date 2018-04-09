
 var pointer; // se usara como referencia para seleccionar la linea a editar o borrar

 tb = document.getElementById("tabla");

function addRow(){
	
	var newRow = tb.insertRow(tb.length);
	
	name = document.getElementById("name").value;
	surname = document.getElementById("surname").value;
	address = document.getElementById("address").value;
	country = document.getElementById("country").value;
	comaut = document.getElementById("comaut").value;
	cp = document.getElementById("cp").value;
	city = document.getElementById("city").value;
	email = document.getElementById("email").value;
	
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = name;
	
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = surname;
	
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = address;
	
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = country;
	
	cell5 = newRow.insertCell(4);
	cell5.innerHTML = comaut;
	
	cell6 = newRow.insertCell(5);
	cell6.innerHTML = cp;
	
	cell7 = newRow.insertCell(6);
	cell7.innerHTML = city;
	
	cell8 = newRow.insertCell(7);
	cell8.innerHTML = email;
	selection(); // funcion que selecciona la linea a editar o borrar

	
	
}

  function selection(){ 
     
        for(var i = 1; i < tb.rows.length; i++){
        
           tb.rows[i].onclick = function(){
         
              pointer = this.rowIndex;
              document.getElementById("name").value = this.cells[0].innerHTML;
              document.getElementById("surname").value = this.cells[1].innerHTML;
              document.getElementById("address").value = this.cells[2].innerHTML;
              document.getElementById("country").value = this.cells[3].innerHTML;
              document.getElementById("comaut").value = this.cells[4].innerHTML;
			  document.getElementById("cp").value = this.cells[5].innerHTML;
			  document.getElementById("city").value = this.cells[6].innerHTML;
			  document.getElementById("email").value = this.cells[7].innerHTML;
         }
     }
}

    function editRow(){
		
		var name = document.getElementById("name").value;
		var surname = document.getElementById("surname").value;
		var address = document.getElementById("address").value;
		var country = document.getElementById("country").value;
		var comaut = document.getElementById("comaut").value;
		var cp = document.getElementById("cp").value;
		var city = document.getElementById("city").value;
		var email = document.getElementById("email").value;
     
           
        tb.rows[pointer].cells[0].innerHTML = name;
		tb.rows[pointer].cells[1].innerHTML = surname;
        tb.rows[pointer].cells[2].innerHTML = address;   
		tb.rows[pointer].cells[3].innerHTML = country;   
		tb.rows[pointer].cells[4].innerHTML = comaut;   
        tb.rows[pointer].cells[5].innerHTML = cp;   
        tb.rows[pointer].cells[6].innerHTML = city;   
        tb.rows[pointer].cells[7].innerHTML = email;   

      
}
     
     function deleteRow(){
     
         tb.deleteRow(pointer);
        
}