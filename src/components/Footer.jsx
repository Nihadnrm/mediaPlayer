import { Link } from "react-router-dom"
function Footer() {
  return (
    <>
    <div className="bg-secondary container-fluid p-4"> 
      <div className="row">
        <div className="col">
          <h4 className="text-center">Media Player 2025</h4>
          <p style={{textAlign:"justify"}} className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit non laborum error dolore reiciendis obcaecati animi quidem delectus exercitationem assumenda tempore, deleniti maxime nam voluptate nulla deserunt consequuntur quasi?</p>
        </div>



        <div className="col-3 mx-5">
        <h4>Links</h4>
        <div className="d-flex flex-column justify-content-around"> 
          <Link to={"/"} className="link-dark">Landing</Link>
          <Link to={"/login"}className="link-dark">Login</Link>
          <Link to={"/reg"}className="link-dark">Register</Link>
        </div>
        </div>
        <div className="col">
          <h4 className="text-center text-dark">Feedback</h4>
          <textarea name=""placeholder="type feedback" className="form-control m-2" id=""></textarea>
        <button className="btn btn-success m-2">send</button>
        </div>

      </div>
      <div>
        <h4 className="text-center text-dark">Media Player 2025 &copy;All copyrights reserved</h4>
      </div>


    </div>
    
    
    </>
  )
}

export default Footer