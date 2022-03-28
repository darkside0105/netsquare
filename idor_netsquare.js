

			var CryptoJSAesJson = {
				stringify: function (cipherParams) {
					var j = {ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)};
					if (cipherParams.iv) j.iv = cipherParams.iv.toString();
					if (cipherParams.salt) j.s = cipherParams.salt.toString();
					return JSON.stringify(j);
				},
				parse: function (jsonStr) {
					var j = JSON.parse(jsonStr);
					var cipherParams = CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(j.ct)});
					if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv)
						if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s)
							return cipherParams;
					}
				}
				function getData(ids){ 
				//document.getElementById('userid').value = 1955;
				let xhr = new XMLHttpRequest(); 
				let url = "/web/idor_api.ns"; 
            // open a connection 
            xhr.open("POST", url, true); 
            // Set the request header i.e. which type of content you are sending 
            xhr.setRequestHeader("Content-Type", "application/json"); 
            // Create a state change callback 
            xhr.onreadystatechange = function () { 
            	if (xhr.readyState === 4 && xhr.status === 200) { 
            		document.getElementById('output').innerHTML =  JSON.parse(CryptoJS.AES.decrypt(xhr.responseText, "password@key", {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8));
            	} 
            }; 
            // Converting JSON data to string 
            var obj = { uid: ids } ;
            
            var data = JSON.stringify(obj); 
            // Sending data with the request 
            xhr.send(data); 
        } 
    