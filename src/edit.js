
import React, { useRef } from 'react';
import * as Realm from "realm-web";



import EmailEditor from 'react-email-editor'; 
const REALM_APP_ID = "application-0-cqmdo"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });

const Editor =({user}) => {
    const emailEditorRef = useRef(null);

    const saveDesign = () => {
        emailEditorRef.current.editor.saveDesign((design) => {
          console.log('saveDesign', design.body.rows);
          
           designer(design)
          async function designer(design){
            const mongodb = app.currentUser.mongoClient("mongodb-atlas");
            const hello = mongodb.db("use").collection("users");
            const data = await hello.insertOne({name:design}) 
            
            
          }
    
         
        }
         );
        
    };

    const editemail = () => {

        savedjson()
        async function savedjson(){
            const mongodba = app.currentUser.mongoClient("mongodb-atlas");
            const hell = mongodba.db("use").collection("users");
            const dat = await hell.findOne({}, {sort: {_id: -1}, limit: 1 });
            console.log(dat.name.body)
            const templte = dat.name
            emailEditorRef.current.editor.loadDesign(templte);
        }
    }
   


    const exportHtml = () => {
        const html = emailEditorRef.current.editor.exportHtml((data) => {
          const { design, html } = data;
          emailEditorRef.current.editor.saveDesign(design)
         const mail = prompt("enter your email id")
         alert(`your email id ${mail} 
                 your html code ${html}`)


           
          //console.log('exportHtml', html);
        });
         
      };
    
  const onLoad = () => {
   
    
    // you can load your template here;
    // const templateJson = {emailEditorRef}
    // emailEditorRef.current.editor.loadDesign({emailEditorRef})
     
  };
    return (
        <div>
            <div>
                <button onClick={saveDesign}>save design</button>
                <button onClick={editemail}>edit previous email</button>
                <button onClick={exportHtml}>export Html</button>

            </div>
             <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
        
        />
            
        </div>
    )
}
export default Editor;

