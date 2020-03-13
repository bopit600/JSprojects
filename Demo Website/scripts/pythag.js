function trigCalc(){	
			var inputValA = document.getElementById("TextInputA").value;
            var inputValB = document.getElementById("TextInputB").value;
            var inputValC = document.getElementById("TextInputC").value;
			var a = parseInt(inputValA);
            var b = parseInt(inputValB);
            var c = parseInt(inputValC);
            asquared = Math.pow(a, 2);
            bsquared = Math.pow(b, 2);
            csquared = Math.pow(c, 2);
            cresult = Math.sqrt(asquared + bsquared);
            bresult = Math.sqrt(csquared - asquared);
            aresult = Math.sqrt(csquared - bsquared);
            if(isNaN(c) == true){
				c = cresult;
				document.getElementById("TextInputC").value = c;
		}
			if(isNaN(b) == true){
				b = bresult;
				document.getElementById("TextInputB").value = b;
		}
			if (isNaN(a) == true) {
				a = aresult;
				document.getElementById("TextInputA").value = a;
		}
}

			