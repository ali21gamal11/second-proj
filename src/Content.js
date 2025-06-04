export default function Content() {
  return (
    <div className="Mcon">
      
      <div className="Content">
        <Post name="first title" content="first content"/>
        <Post name="second title" content="second content"/>
        <Post />
        <Post />
        <Post />
      </div>
      <Buttons />
    </div>
  );
}
function Post({name="name not found" , content="there is no content"}) {
  return (
    <div className="Post">
      <h2>{name}</h2>
      <hr />
      <p>{content}</p>
    </div>
  );
}
function Buttons() {
  return (
    <div className="Buttons">
      <Btn name="sport">
        <div>
          <img style={{width:"50%"}}src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" alt="sport icon" />
        </div>
      </Btn>
      <Btn name="games">
        <div>
          <img style={{width:"50%"}}src="https" alt="games icon" />
        </div>
      </Btn>
      <Btn name="films">
        <div>
          <img style={{width:"50%"}}src="" alt="film icon" />
        </div>
      </Btn>

    </div>
  );
}
function Btn({name ="name not found", children}) {
  return <button className="Btn" style={{width:"fit-content",height:"fit-content",maxWidth:"100px",maxHeight:"100px"}}>
    {name}
    <br/>
    {children}
  </button>;
}
