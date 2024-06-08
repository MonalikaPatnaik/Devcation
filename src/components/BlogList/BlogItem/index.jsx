/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import Chip from '../../chip';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    cover,
    category,
    backgroundColor,
    link
  },
}) => {
  return (
    <div className='blogItem-wrap' style={{ backgroundColor }}>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip className='blogItem-chip' label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <Link className='blogItem-link' to={link}>
         Read Here
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
