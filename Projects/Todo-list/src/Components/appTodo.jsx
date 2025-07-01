function AppTodo() {
    return (
        <div class="container text-center">

        <div>
            <div class="row kg-button"> 
          <div class="col-6"> 
              <input type="text" placeholder="Enter Todo here" /> </div>
          <div class="col-4">
              <input type="Date" />     
          </div>
          <div class="col-2"> <button type="button" class="btn btn-success">Add</button></div>
            </div>
        </div>
        </div>
    );
}

export default AppTodo;