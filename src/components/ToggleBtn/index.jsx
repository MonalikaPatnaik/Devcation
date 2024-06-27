import './toggle.css';
const ToggleBtn = ({ imgSrc, handleToggleMode, textColor}) => (

          <img id="tgl" src={imgSrc} onClick={handleToggleMode}alt="Toggle Mode" style={{  height: '2.55rem', width: '2.5rem', borderRadius: '10%' }} />
  );
  
  export default ToggleBtn;
