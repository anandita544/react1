export const todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    }];
const styles = {
    color: "red",
    border: "2px solid blue",





}


export function Card(props) {
    const { title, completed } = props.todo;
    return (<div style={styles}><div>{completed ? "true" : "false"}</div><div>{title}</div></div>)
}
