import { Icon } from '../Icon/index';
import './style.css';

export const Option = ({type, text, onSelected }) => {

  const handleOnClick = () => {
  //  console.log(text);
    onSelected(type);
  }

  return (
    <div className="option" onClick={handleOnClick}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};
