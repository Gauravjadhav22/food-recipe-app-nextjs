import BsInstagram from "react-icons"

const Footer = () => {
  return (
    <footer className="footer bg-slate-600	 my-4 py-4 px-4">
      <div className="flex flex-row justify-between items-center ">
        <div className="flex flex-col ml-5 mt-2 text-xl ">
          <h3>About</h3>
          <br/>

          <ul>
            <li>CONTACT US</li>
            <li>PRIVACY POLICY</li>
            <li>EMAIL : food@recipe.com</li>
          </ul>
        </div>
        <div className="flex flex-col ml-5 mt-2 text-xl ">
          <h3>Connect With Us</h3>
          <br/>
          <ul>
            {/* <li>Inst: <BsInstagram/>}</li> */}
            <li>Youtube: {/* <YouTubeIcon/> */}</li>
            <li>Twitter: {/* <TwitterIcon/> */}</li>
            <li>Facebook: {/* <FacebookOutlinedIcon/> */}</li>
          </ul>
        </div>
        <hr/>
        <div className="flex flex-col ml-5 mt-2 text-xl ">
          <h3 className="text-2xl underline">Food Is Life.</h3>
          <br/>

          <ul>
            <li>
              Your diet is a bank account. Good food choices are good
              investments. Bethenny Frankel
            </li>
        
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
