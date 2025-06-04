export default function Content() {
  return (
    <div className="Mcon">
      
      <div className="Content">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <Buttons />
    </div>
  );
}
function Post() {
  return (
    <div className="Post">
      <h2>this is the post title</h2>
      <hr />
      <p>this is the post body</p>
    </div>
  );
}
function Buttons() {
  return (
    <div className="Buttons">
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
    </div>
  );
}
function Btn() {
  return <button className="Btn">tag button</button>;
}
