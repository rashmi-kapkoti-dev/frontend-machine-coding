import CommentSection from '../../components/CommentSection';
import { commentsData } from './data';
import style from './NestedComments.module.css';

const NestedComments = () => {
  return (
    <div className={style.nestedCommentContainer}>
      <CommentSection data={commentsData} />
    </div>
  );
};

export default NestedComments;
