function List({ list, border }) {
    return (<ul style={{ border }}>{list.map(pl => <li >{pl}</li>)}</ul>)
  }
  export default List;