import './toggle.css';
const ToggleBtn = ({ imgSrc, handleToggleMode, textColor}) => (
        <button
          id="tgl"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold border border-blue-500 hover:border-transparent rounded w-1/2"
          onClick={handleToggleMode}
          style ={{color: textColor}}
        >
          <img src={imgSrc} alt="Toggle Mode" style={{  height: '2.55rem', width: '8rem', borderRadius: '10%' }} />
        </button>
  );
  
  export default ToggleBtn;
