var arr=[];
var storedNames;
var i=0;
var total;
var up;
var total1;
var storedIds;
function showimg(){


var imgname=this.document.forms["0"][4].files["0"].name;
var imgpreview=document.getElementById("preview");
imgpreview.src="./assests/"+imgname;
}
function resetpreview(){
    var imgpreview=document.getElementById("preview");
    imgpreview.src="";
}
function regform()
{       //console.log(this);
            
        var id1=document.getElementById("id").value;
        
        var name1=document.getElementById("name").value;
        var email1=document.getElementById("email").value;
        var city1=document.getElementById("city").value;
        var imageM = document.getElementById("file1");
        console.log("smiti"+imageM);
        var myimgname=this.document.forms["0"][4].files["0"].name;

        if(id1==""||name1==""||email1==""||city1==""){
            alert("enter all the details");
            return
        }
        var numbers=/^[0-9]+$/;
        if(id1.match(numbers)){
        }
        else{
            alert("enter numbers only");
            return;
        }
        storedIds= JSON.parse(localStorage.getItem("data"));
        total1=localStorage.getItem("count"); 
        for(var k=0;k<total1;k++){
            var idr=storedIds[k].i;
            if(idr==id1){
                alert(idr+"id already exits");
                return;
            }
        }

        var letters=/^[A-Za-z]+$/;
        if(name1.match(letters)){
            console.log("valueee is "+name1.match(letters));
         }
        else{
        alert("enter correct name");
        return ;
            }

            if(city1.match(letters)){}
            else{
                alert("enter correct city");
            }
        
        var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email1.match(mailformat)){}
        else{
            alert("you have entered invalid address");
            return;
        }
        // if(imageM=="false"){
        //     alert("upload image");
        //     return;
        // }




     //   console.log("before"+imageM);
        console.log("details table")
        var table = document.getElementById("mytable");
        var row = table.insertRow();

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var c5=row.insertCell();
        var c6=row.insertCell();
        var cell7=row.insertCell(6);
        
        cell1.innerHTML = id1;
        cell2.innerHTML = name1;
        cell3.innerHTML = email1;
        cell4.innerHTML = city1;
        //to create a button
        var btndelete = document.createElement('input');
        var rIndex;
        btndelete.type = "button";
        btndelete.className = "btn";
        btndelete.value ="delete";
        //function to be performed
        btndelete.onclick = function(){
        rIndex=row.rowIndex;
        console.log("deleted row is "+rIndex);
        document.getElementById("mytable").deleteRow(rIndex);

        up= JSON.parse(localStorage.getItem("data"));
        up.splice(rIndex-1,1);
        localStorage.setItem("data", JSON.stringify(up));
        i=localStorage.getItem("count");
        localStorage.setItem("count",i-1);

        };
        c5.appendChild(btndelete);
        // to add edit button in each row
        var btnedit = document.createElement('input');
        var rIndex2;
      
        btnedit.type = "button";
        btnedit.className = "btnedit";
        btnedit.value ="edit";
        btnedit.onclick =function(){
        rIndex2=row.rowIndex;
        document.getElementById("id").value=row.cells[0].innerHTML;
        document.getElementById("name").value=row.cells[1].innerHTML;
        document.getElementById("email").value=row.cells[2].innerHTML;
        document.getElementById("city").value=row.cells[3].innerHTML;
        var imgpreview=document.getElementById("preview");
        imgpreview.src="./assests/"+myimgname;
      //  document.getElementById("file1").value=source;
        document.getElementById("mytable").deleteRow(rIndex2);
        
        // to delete from localstorage after edit and submit is clicked
        up= JSON.parse(localStorage.getItem("data"));
        up.splice(rIndex2-1,1);
        localStorage.setItem("data", JSON.stringify(up));
        i=localStorage.getItem("count");
        localStorage.setItem("count",i-1);
        };
        c6.appendChild(btnedit);

         // to diplay image in table
     //    var image1=document.createElement('img');
        // image1.setAttribute(id,"output");
          //image1=document.getElementById("file1");
       //  var im=document.getElementById("output");
       //.document.all[27].form[5].form.elements.file1
       
      //  image1.src = URL.createObjectURL(this);
        //image1.src = this.document.forms["0"][5].files
        // cell7.appendChild(image1);
        console.log("confirmed");
        
// image1.setAttribute(id,"output");
//image1=document.getElementById("file1");
// var im=document.getElementById("output");
//.document.all[27].form[5].form.elements.file1
//console.log("my name"+(this.document.forms["0"][5].files["0"].name));
        var image1=document.createElement('img');
        console.log("hiiiiii"+this.document.forms["0"][4]);
        image1.src = URL.createObjectURL(this.document.forms["0"][4].files["0"]);
            //  console.log("imageeeee"+image1.src);
            //image1.src = this.document.forms["0"][5].files
          //  image1.width= "50px";
        cell7.appendChild(image1);
        var source=this.document.forms["0"][4].files["0"].name;
        
        var obj={
            i:id1,
            n:name1,
            e:email1,
            c:city1,
            s:source
        };

        if(JSON.parse(localStorage.getItem("data"))!=null){
            arr=JSON.parse(localStorage.getItem("data"));
        }
        //array of objects  
        arr.push(obj);
        if(localStorage.getItem("count")!=null)
        {
            i=localStorage.getItem("count");
        }
        i++;
        // json.stringify convert arr to string
        
        localStorage.setItem("data", JSON.stringify(arr));
        localStorage.setItem("count",i);

        //json.parse convert back to original form
 //   document.getElementById("mytable").innerHTML = storedNames;
        //document.write(storedNames);
}

function load()
{
            storedNames = JSON.parse(localStorage.getItem("data"));
            //document.getElementById("demo").innerHTML = Array.isArray(storedNames); 
            total=localStorage.getItem("count"); 
  
    for(var j=0;j<total;j++)
     {
            var table = document.getElementById("mytable");
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var c5=row.insertCell(4);
            var c6=row.insertCell(5);
            var cell7=row.insertCell(6);

        var btndelete = document.createElement('input');
        var rIndex;
        btndelete.type = "button";
        btndelete.className = "btn";
        btndelete.value ="delete";
        btndelete.onclick = function()
        {
        rIndex=this.parentNode.parentNode.rowIndex;
        
        document.getElementById("mytable").deleteRow(rIndex);
        console.log("onload delted row is"+rIndex);
        up= JSON.parse(localStorage.getItem("data"));
        up.splice(rIndex-1,1);
        localStorage.setItem("data", JSON.stringify(up));
        i=localStorage.getItem("count");
        localStorage.setItem("count",i-1);
        };
        c5.appendChild(btndelete);

        // to add edit button after page is refreshed
        var btnedit = document.createElement('input');
        var rIndex2;
        btnedit.type = "button";
        btnedit.className = "btnedit";
        btnedit.value ="edit";


        btnedit.onclick =function()
        {
        rIndex2=this.parentNode.parentNode.rowIndex;
        document.getElementById("id").value=this.parentNode.parentNode.cells[0].innerHTML;
        document.getElementById("name").value=this.parentNode.parentNode.cells[1].innerHTML;
        document.getElementById("email").value=this.parentNode.parentNode.cells[2].innerHTML;
        document.getElementById("city").value=this.parentNode.parentNode.cells[3].innerHTML;
        var dd=JSON.parse(localStorage.getItem("data"));
        var editname=dd[rIndex2-1].s;
        console.log("imageee name is   "+editname);
        var imgpreview=document.getElementById("preview");

         imgpreview.src="./assests/"+editname;
      //  console.log("row is"+row.cells[6].innerHTML);
        
       // document.getElementById("file1").value=storedNames[j].s;
        document.getElementById("mytable").deleteRow(rIndex2);
           // to delete from localstorage after page is refreshed and edit is clicked
        up= JSON.parse(localStorage.getItem("data"));
        up.splice(rIndex2-1,1);
        localStorage.setItem("data", JSON.stringify(up));
        i=localStorage.getItem("count");
        localStorage.setItem("count",i-1);
      //  localStorage.removeItem
        };
        c6.appendChild(btnedit);
            cell1.innerHTML = storedNames[j].i;
            cell2.innerHTML = storedNames[j].n;
            cell3.innerHTML = storedNames[j].e;
            cell4.innerHTML = storedNames[j].c;
         //it will display image name in table cell   cell7.innerHTML = storedNames[j].s;
          //  console.log("cell 7 is "+cell7.innerHTML);
            //console.log(i1);
            var path=document.createElement('img');
            path.type="img";
        //   this works the same
        //    var i1=storedNames[j].s; 
        //    path.src='./assests/'+i1;
          path.src="assests/"+storedNames[j].s; 
          console.log("image path here"+path.src);
            cell7.appendChild(path);

    }
            
}
    //localStorage.removeItem("data");


    // function del()
    // {

    //     document.getElementById("mytable").deleteRow(1);
    //     if(mytable.rowIndex==0){
    //         document.getElementById("mytable").deleteRow(0);}

    // }
    // function edit(){
    //     document.getElementById("mytable").contentEditable=true;

    // }

