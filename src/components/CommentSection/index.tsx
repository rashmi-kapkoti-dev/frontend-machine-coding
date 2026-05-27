import type { CommentSectionProps } from './types';
import style from './CommentSection.module.css';
import { useState } from 'react';

const CommentSection = ({ data }: CommentSectionProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <>
      {data.map((comment) => (
        <div key={comment.id} className={style.container}>
          <div className={style.userContainer}>
            <button
              className={`${style.btn} ${comment.replies.length === 0 ? style.hidebtn : ''}`}
              onClick={() =>
                setSelectedId(selectedId == comment.id ? null : comment.id)
              }
            >
              {selectedId == comment.id ? '-' : '+'}
            </button>
            <img
              className={style.img}
              src={comment.userUrl}
              alt="User Icon Image"
            />
            <span className={style.userName}>{comment.userName}</span>
          </div>
          <p className={style.comment}>{comment.comment}</p>
          {selectedId == comment.id && (
            <div className={style.nestedComment}>
              <CommentSection data={comment.replies} />{' '}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CommentSection;
