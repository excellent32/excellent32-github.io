import { NavLink } from 'react-router-dom';
function App() {
    return (<div className="w-[300px]">
      <div className="flex item-center justify-around">
        <NavLink to="/apple" className="cursor-pointer">Apple</NavLink>
        <NavLink to="/google" className="cursor-pointer">Google</NavLink>
      </div>
    </div>);
}
export default App;
