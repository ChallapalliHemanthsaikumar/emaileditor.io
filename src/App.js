import Edit from './edit'
import React, { useRef } from 'react';
import * as Realm from "realm-web";
//  import { render } from 'react-dom'



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin:hemanth91@cluster0.ypptf.mongodb.net/Cluster0?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });




const REALM_APP_ID = "application-0-cqmdo"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });











  

  

 

 
  // const loadDesign = (id) => {
  //   loaddata(id)
  //   async function loaddata(id){
  //     const mongodb = app.currentUser.mongoClient("mongodb-atlas");
  //     const hello = mongodb.db("use").collection("users");
  //     const data = await hello.findOne({id:id})
  //     emailEditorRef.current.editor.loadDesign((data))

  //   }
    
  // }



// // render(<App />, document.getElementById('app'))

// export default App;
















const App = () => {
  // Keep the logged in Realm user in local state. This lets the app re-render
  // whenever the current user changes (e.g. logs in or logs out).
  const [user, setUser] = React.useState(app.currentUser);

  

  // If a user is logged in, show their details.
  // Otherwise, show the login screen.
  return (
    <div className="App">
      <div className="App-header">
        {user ?  <Edit user={user}/> : <Login setUser={setUser} />}
      </div>
    </div>
  );
}

export default App;












// Create a component that lets an anonymous user log in
function Login({ setUser }) {


  
  const loginAnonymous = async () => {
    const user = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };
  return <button onClick={loginAnonymous}>Log In</button>;
}










