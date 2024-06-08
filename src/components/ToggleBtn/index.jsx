import './toggle.css';
const ToggleBtn = ({ value, handleToggleMode, textColor}) => (
        <button
          id="tgl"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded w-1/2"
          value={value}
          onClick={handleToggleMode}
          style ={ {color: textColor}}
        >
          {value}
        </button>
  );
  
  export default ToggleBtn;
