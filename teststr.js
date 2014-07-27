
 function string_class(val)
{
    this.main = val;
    
    this.len = function lengthOfString() {
        //var m = document.getElementById("str1").value;
        var m = this.main;
        var count = 0;
        
        
            while (m[count] != null)
                count = count + 1; 
            return count;
        
    };

    this.concat = function concate(val_str) {


        var str = this.main + val_str;
        //for (var i = 0; i < arguments.length; i++) {
        //    str += arguments[i];
        //}
        this.main = str;
        return this.main;
    };

    this.charat = function charAt(pos) {
        var m = this.main;
        if (pos > m.length)
            throw ("entered position exceeds string length");
        else if (pos < 0)
            throw ("can not enter negative values");
        else {
            return m[pos];
        }
    };

    this.substring = function substring(strt_index, last_index) {
        var m = this.main;
        if (strt_index < 0 || last_index < 0)
            throw ("can not enter negative values");
        else if (strt_index > last_index)
            throw ("entered start index exceeds last index");
        else if (last_index > m.length || strt_index > m.length)
            throw ("entered indices exceeds string length");
        else {
            var str = m[strt_index];
            strt_index++;
            if (last_index == null || last_index == undefined) {
                while (m[strt_index] != null) {
                    str += m[strt_index];
                    strt_index++;
                }
            }
            else {
                while (strt_index <= last_index && m[strt_index] != null) {
                    str += m[strt_index];
                    strt_index++;
                }
            }
            return str;
        }
    };

    this.indexof = function indexof(sub) {
        var main = this.main;

        debugger;
        var i = 0;
        var j = 0;
        var k, count = 0;
        var data = new Array();
        while (main[i] != null) {
            j = 0; flag = 0;

            var temp = i;
            for (var i = temp; main[i] != null; i++) {
                for (var temp1 = i, j = 0; sub[j] != null; temp1++, j++) {
                    if (sub[j] == main[temp1]) {
                        flag = 1;
                        break;
                    }
                }
                if (flag == 1 && j == 0) {
                    flag = 0;
                    break;
                }
            }
            if (main[i] == null && data.length == 0) {
                flag = 1;
                break;
            }
            else if (main[i] == null && data.length != 0) {
                flag = 0;
                break;
            }


            else if (main[i] == sub[j]) {
                k = i;
                while (main[i] == sub[j] && sub[j] != null && main[i] != null) {
                    i++;
                    j++;
                }
                if (main[i] == null && sub[j] == null) {
                    data[count] = k;
                    count++;
                    break;
                }
                else if (sub[j] == null && main[i] != null) {
                    data[count] = k;
                    count++;
                    continue;
                }
                else if (main[i] != sub[j]) {
                    i = k + 1;
                    continue;
                }


            }
        }
        if (flag == 1) {
            //console.log("given string doesnt occur in main string");
            return -1;
        }
        else
            return data[0];
    };

    this.lastindexof = function lastindexof(sub) {
        var main = this.main;

        debugger;
        var i = 0;
        var j = 0;
        var k, count = 0;
        var data = new Array();
        while (main[i] != null) {
            j = 0; flag = 0;

            var temp = i;
            for (var i = temp; main[i] != null; i++) {
                for (var temp1 = i, j = 0; sub[j] != null; temp1++, j++) {
                    if (sub[j] == main[temp1]) {
                        flag = 1;
                        break;
                    }
                }
                if (flag == 1 && j == 0) {
                    flag = 0;
                    break;
                }
            }
            if (main[i] == null && data.length == 0) {
                flag = 1;
                break;
            }
            else if (main[i] == null && data.length != 0) {
                flag = 0;
                break;
            }


            else if (main[i] == sub[j]) {
                k = i;
                while (main[i] == sub[j] && sub[j] != null && main[i] != null) {
                    i++;
                    j++;
                }
                if (main[i] == null && sub[j] == null) {
                    data[count] = k;
                    count++;
                    break;
                }
                else if (sub[j] == null && main[i] != null) {
                    data[count] = k;
                    count++;
                    continue;
                }
                else if (main[i] != sub[j]) {
                    i = k + 1;
                    continue;
                }


            }
        }
        if (flag == 1) {
            console.log("given string doesnt occur in a main string");
            return -1;
        }
        else
            return data[data.length - 1];
    };

    this.replace_sub = function replace_(sub, other) {
        var main = this.main;


        debugger;
        var i = 0;
        var j = 0;
        var k, count = 0;
        var data = new Array();
        while (main[i] != null) {
            j = 0; flag = 0;

            var temp = i;
            for (var i = temp; main[i] != null; i++) {
                for (var temp1 = i, j = 0; sub[j] != null; temp1++, j++) {
                    if (sub[j] == main[temp1]) {
                        flag = 1;
                        break;
                    }
                }
                if (flag == 1 && j == 0) {
                    flag = 0;
                    break;
                }
            }
            if (main[i] == null && data.length == 0) {
                flag = 1;
                break;
            }
            else if (main[i] == null && data.length != 0) {
                flag = 0;
                break;
            }


            else if (main[i] == sub[j]) {
                k = i;
                while (main[i] == sub[j] && sub[j] != null && main[i] != null) {
                    i++;
                    j++;
                }
                if (main[i] == null && sub[j] == null) {
                    data[count] = k;
                    count++;
                    break;
                }
                else if (sub[j] == null && main[i] != null) {
                    data[count] = k;
                    count++;
                    continue;
                }
                else if (main[i] != sub[j]) {
                    i = k + 1;
                    continue;
                }


            }
        }
        if (flag == 1) {
            console.log("given string doesnt occur in a main string");
            return this.main;
        }
        else {
            //var new_main = null;
            if (data[0] == 0) {
                var new_main = other;

                for (var i = sub.length; main[i] != null; i++) {
                    new_main += main[i];
                }
            }
            else {
                new_main = main[0];
                for (var i = 1; i < data[0]; i++) {
                    new_main += main[i];
                }
                for (var i = 0; i < other.length; i++) {
                    new_main += other[i];
                }
                for (var i = data[0] + sub.length; main[i] != null; i++) {
                    new_main += main[i];
                }

            }
            this.main = new_main;
            return this.main;
        }

    };


}

var str,m,n;



 window.onload=function(){
      //debugger;
      var obj=document.getElementById('length');
       var objCon=document.getElementById('concate');
       var objCharat=document.getElementById('charat');
       var objSubStr=document.getElementById('substr');
       var objIndexOf=document.getElementById('indexOfOp1');
       var objLastIndexOf=document.getElementById('lastindexOfOp1');
       var objReplace=document.getElementById('substrReplace');

      obj.style.visibility="hidden";
      objCon.style.display="none";
      objCharat.style.display="none";
      objSubStr.style.display="none";
      objIndexOf.style.display="none";
      objLastIndexOf.style.display="none";
      objReplace.style.display="none";

      var f=document.getElementsByClassName("dropdown");
      

      f[0].onclick=function(){
        m = document.getElementById("str1").value;
         n = document.getElementById("str2").value;
        var pos = parseInt(document.getElementById("pos").value);
        var strt_index = parseInt(document.getElementById("strt_index").value);
        var last_index = parseInt(document.getElementById("last_index").value);
        var subIndex = document.getElementById("indexof_operation").value;
        var subLastIndex = document.getElementById("lastindexof_operation").value;
        var replaceStr = document.getElementById("sub_str_replace").value;
        var other = document.getElementById("other").value;
    
     str=new string_class(m);
    var stringAction = document.getElementsByClassName("string_op");
    
   
    stringAction[0].getElementsByTagName('a')[0].onclick = function () {
            //str=new string_class(m);
            obj.style.visibility="visible";
        document.getElementById("len").innerHTML = str.len();
    }

    stringAction[0].getElementsByTagName('a')[1].onclick = function () {
            //str=new string_class(m);
            objCon.style.display="block";
        document.getElementById("con").innerHTML = str.concat(n);
    }

    stringAction[0].getElementsByTagName('a')[2].onclick = function () {
    if (pos > m.length)
        throw ("entered position exceeds string length");
    else if(pos<0)
        throw ("can not enter negative values");
    else {
        objCharat.style.display="block";
        document.getElementById("char_at").innerHTML =str.charat(pos);
    }
    }

    stringAction[0].getElementsByTagName('a')[3].onclick = function () {
        if (strt_index < 0 || last_index < 0)
            throw ("can not enter negative values");
        else if (strt_index > last_index)
            throw ("entered start index exceeds last index");
        else if (last_index > m.length || strt_index > m.length)
            throw ("entered indices exceeds string length");
        else {
             objSubStr.style.display="block";

            document.getElementById("sub").innerHTML = str.substring(strt_index,last_index);
        }
    }
    
     stringAction[0].getElementsByTagName('a')[4].onclick = function () {     
        var val = str.indexof(subIndex);
            objIndexOf.style.display="block";
            document.getElementById("indexof_op").innerHTML = val;
       
    }


    stringAction[0].getElementsByTagName('a')[5].onclick = function () {     
        var val = str.lastindexof(subLastIndex);
            objLastIndexOf.style.display="block";
            document.getElementById("lastindexof_op").innerHTML = val;
       
    }

    

    stringAction[0].getElementsByTagName('a')[6].onclick = function () {     
       
            objReplace.style.display="block";
            
        debugger;
        var val = str.replace_sub(replaceStr,other);
        
        
            document.getElementById("subReplace").innerHTML = val;

        

    }
    
   }

 }