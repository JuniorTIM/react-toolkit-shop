import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./sidebar-styles.css";

function Sidebar() {
  const categories = useSelector((state) => state.categories)
  return (
    categories.map((element) => {
      return ( 
       <> 
      <div className="categories"> <Link className="category" to={`/category/${element.id}`}>{element.name}</Link></div>
      <hr />
      </>
      )
  })
    )
}

export default Sidebar;
