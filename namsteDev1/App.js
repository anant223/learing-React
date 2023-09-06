/*

    <div>
        <h1><h1>
    </div>





*/









const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1 tag!"),
    React.createElement("h2", {}, "h2 tag!"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 tag!"),
    React.createElement("h2", {}, "h2 tag!"),
  ]),

]);
console.log(heading)
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);
console.log(root)