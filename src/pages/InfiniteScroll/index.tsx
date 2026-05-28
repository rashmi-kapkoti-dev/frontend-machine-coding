import { Fragment, useEffect, useRef, useState } from 'react';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import style from '../Home/Home.module.css';
import type { User } from '../../types/index';
import Loader from '../../components/Loader';

const USER_PER_PAGE = 30;
const TOTAL_USERS = 100;

const InfiniteScroll = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const skip = startIndex * USER_PER_PAGE;
      if (skip >= TOTAL_USERS) {
        setHasMore(false);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/users?limit=${USER_PER_PAGE}&skip=${skip}`
        );
        const json = await res.json();
        const remaining = Math.max(0, TOTAL_USERS - skip);
        const batch = (json.users ?? []).slice(
          0,
          Math.min(USER_PER_PAGE, remaining)
        );
        setData((prev) => [...prev, ...batch]);
        if (batch.length === 0 || skip + batch.length >= TOTAL_USERS) {
          setHasMore(false);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [startIndex]);

  const handleViewProfile = (id: number | null) => {
    setSelectedUserId((prev) => (prev === id ? null : id));
  };

  const selectedUser = data.find((user) => user.id === selectedUserId);

  useEffect(() => {
    const node = loaderRef.current;
    if (!node) return;
    const observer = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting && !loading && hasMore) {
        setStartIndex((prev) => prev + 1);
      }
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [loading, hasMore]);

  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        {data.map((item) => (
          <Fragment key={item.id}>
            <Card user={item} handleViewProfile={handleViewProfile} />
          </Fragment>
        ))}
      </div>
      {selectedUser && (
        <Modal
          user={selectedUser}
          handleModalClose={() => setSelectedUserId(null)}
        />
      )}
      <div ref={loaderRef}>{loading && <Loader />}</div>
    </div>
  );
};

export default InfiniteScroll;
