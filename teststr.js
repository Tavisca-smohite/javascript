//function concate() {
//    var m = document.getElementById("str1").value;
//    var n = document.getElementById("str2").value;

//    var str=m+n;
//    //for (var i = 0; i < arguments.length; i++) {
//    //    str += arguments[i];
//    //}
   
//    document.getElementById("output").innerHTML = str;
//}

//function lengthOfString() {
//    var m = document.getElementById("str1").value;
//    var count = 0;
//    if (document.getElementById("str1").value == "") {
//        throw ("you didn't enter any string");
//    }
//    else {
//        while (m[count] != null)
//            count = count + 1;

//        document.getElementById("out1").innerHTML = count;
//    }
   
//}
//function charAt()
//{
//    var m = document.getElementById("str1").value;
//    var pos = parseInt(document.getElementById("pos").value);
//    if (pos > m.length)
//        throw ("entered position exceeds string length");
//    else if(pos<0)
//        throw ("can not enter negative values");
//    else {
//        document.getElementById("outPos").innerHTML = m[pos];
//    }
//  }

//function substring() {
//    var m = document.getElementById("str1").value;
//    var strt_index = parseInt(document.getElementById("strt_index").value);
//    var last_index = parseInt(document.getElementById("last_index").value);
//    if (strt_index < 0 || last_index < 0)
//        throw ("can not enter negative values");
//    else if (strt_index > last_index)
//        throw ("entered start index exceeds last index");
//    else if (last_index > m.length || strt_index > m.length)
//        throw ("entered indices exceeds string length");
//    else {
//        var str = m[strt_index];
//        strt_index++;
//        if (document.getElementById("last_index").value == "") {
//            while (m[strt_index] != null) {
//                str += m[strt_index];
//                strt_index++;
//            }
//        }
//        else {
//            while (strt_index <= last_index && m[strt_index] != null) {
//                str += m[strt_index];
//                strt_index++;
//            }
//        }
//        document.getElementById("outstr").innerHTML = str;
//    }
//}

//function indexof()
//{
//    var main = document.getElementById("str1").value;
//    var sub = document.getElementById("substr").value;
//    debugger;
//    var i=0;
//    var j = 0;
//    var k, count = 0;
//    var data=new Array();
//    while(main[i]!=null)
//    {
//        j = 0; flag = 0;
        
//        var temp = i;
//        for (var i = temp; main[i]!=null; i++)
//        {
//            for (var temp1 = i, j = 0; sub[j]!=null; temp1++, j++)
//            {
//                if (sub[j] == main[temp1]) {
//                    flag = 1;
//                    break;
//                }
//            }
//            if (flag == 1 && j==0)
//            {
//                flag = 0;
//                break;
//            }
//        }
//        if (main[i] == null && data.length==0) {
//            flag = 1;
//            break;
//        }
//        else if (main[i] == null && data.length != 0)
//        {
//            flag = 0;
//            break;
//        }
            

//        else if (main[i] == sub[j]) {
//            k = i;
//            while (main[i] == sub[j] && sub[j] != null && main[i] != null) {
//                i++;
//                j++;
//            }
//            if (main[i] == null && sub[j] == null) {
//                data[count] = k;
//                count++;
//                break;
//            }
//            else if (sub[j] == null && main[i] != null) {
//                data[count] = k;
//                count++;
//                continue;
//            }
//            else if (main[i] != sub[j]) {
//                i = k + 1;
//                continue;
//            }
           

//        }
//    }
//    if (flag == 1) {
//        document.getElementById("outdata").innerHTML = "given string doesnt occur in a main string";
//    }
//    else
//        document.getElementById("outdata").innerHTML = data[0];
//}


//function lastindexof() {
//    var main = document.getElementById("str1").value;
//    var sub = document.getElementById("substr1").value;
//    debugger;
//    var i = 0;
//    var j = 0;
//    var k, count = 0;
//    var data = new Array();
//    while (main[i] != null) {
//        j = 0; flag = 0;

//        var temp = i;
//        for (var i = temp; main[i] != null; i++) {
//            for (var temp1 = i, j = 0; sub[j] != null; temp1++, j++) {
//                if (sub[j] == main[temp1]) {
//                    flag = 1;
//                    break;
//                }
//            }
//            if (flag == 1 && j == 0) {
//                flag = 0;
//                break;
//            }
//        }
//        if (main[i] == null && data.length == 0) {
//            flag = 1;
//            break;
//        }
//        else if (main[i] == null && data.length != 0) {
//            flag = 0;
//            break;
//        }


//        else if (main[i] == sub[j]) {
//            k = i;
//            while (main[i] == sub[j] && sub[j] != null && main[i] != null) {
//                i++;
//                j++;
//            }
//            if (main[i] == null && sub[j] == null) {
//                data[count] = k;
//                count++;
//                break;
//            }
//            else if (sub[j] == null && main[i] != null) {
//                data[count] = k;
//                count++;
//                continue;
//            }
//            else if (main[i] != sub[j]) {
//                i = k + 1;
//                continue;
//            }


//        }
//    }
//    if (flag == 1) {
//        document.getElementById("outlastdata").innerHTML = "given string doesnt occur in a main string";
//    }
//    else
//        document.getElementById("outlastdata").innerHTML = data[data.length-1];
//}

//function replace_() {
//    var main = document.getElementById("str1").value;
//    var sub = document.getElementById("substr2").value;
//    var other = document.getElementById("other").value;
//    debugger;
//    var i = 0;
//    var j = 0;
//    var k, count = 0;
//    var data = new Array();
//    while (main[i] != null) {
//        j = 0; flag = 0;

//        var temp = i;
//        for (var i = temp; main[i] != null; i++) {
//            for (var temp1 = i, j = 0; sub[j] != null; temp1++, j++) {
//                if (sub[j] == main[temp1]) {
//                    flag = 1;
//                    break;
//                }
//            }
//            if (flag == 1 && j == 0) {
//                flag = 0;
//                break;
//            }
//        }
//        if (main[i] == null && data.length == 0) {
//            flag = 1;
//            break;
//        }
//        else if (main[i] == null && data.length != 0) {
//            flag = 0;
//            break;
//        }


//        else if (main[i] == sub[j]) {
//            k = i;
//            while (main[i] == sub[j] && sub[j] != null && main[i] != null) {
//                i++;
//                j++;
//            }
//            if (main[i] == null && sub[j] == null) {
//                data[count] = k;
//                count++;
//                break;
//            }
//            else if (sub[j] == null && main[i] != null) {
//                data[count] = k;
//                count++;
//                continue;
//            }
//            else if (main[i] != sub[j]) {
//                i = k + 1;
//                continue;
//            }


//        }
//    }
//    if (flag == 1) {
//        document.getElementById("new_string").innerHTML = "given string doesnt occur in a main string";
//    }
//    else
//    {
//        //var new_main = null;
//        if (data[0] == 0) {
//            var new_main = other;

//            for (var i = sub.length; main[i] != null; i++) {
//                new_main += main[i];
//            }
//        }
//        else {
//            new_main = main[0];
//            for (var i = 1; i <data[0]; i++) {
//                new_main += main[i];
//            }
//            for (var i =0; i < other.length; i++) {
//                new_main += other[i];
//            }
//            for (var i = data[0]+sub.length; main[i] != null; i++) {
//                new_main += main[i];
//            }

//        }
//        document.getElementById("new_string").innerHTML = new_main;
//    }

//}



 function string_class(val)
{
    this.main = val;
    
    this.len = function lengthOfString() {
        //var m = document.getElementById("str1").value;
        var m = this.main;
        var count = 0;
        //if (document.getElementById("str1").value == "") {
        //    throw ("you didn't enter any string");
        //}
        //else {
            while (m[count] != null)
                count = count + 1; 
            return count;
        //}
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
            console.log("given string doesnt occur in main string");
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

