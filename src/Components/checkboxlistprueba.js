let expanded = false;
 function showSelectBoxes(){
     let checkboxes = document.getElementById("checkboxes");
     if (!expanded){
         checkboxes.style.display = "block";
         expanded= true;
     }else{
         checkboxes.style.display = "none";
         expanded = false;
     }
 }


 <div className="multiselect">
 <div className="selectbox" onClick={showSelectBoxes()}>
   <select>
     <option>Selecciona los generos</option>
   </select>
   <div className="overselect"></div>
 </div>
 <div id="checkboxes">
     <label><input type="checkbox"></input>firts option</label>
 </div>
</div>

 {/* .multiselect{
  width:200px;
}
.selectbox{
  position: relative;
}
.selectbox select {
  width:100%;
  font-weight: bold;
}
.overselect{
  position: absolute;
  left:0; right:0; top:0; bottom:0;
}
#checkboxes{
  display:none;
  border: 1px #dadada sold;
}
#checkboxes label{
  display:block;
}
#checkboxes label:hover {
  background-color: #1e90ff;
} */}