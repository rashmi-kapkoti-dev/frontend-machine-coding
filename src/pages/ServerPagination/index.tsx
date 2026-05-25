import { Fragment, useEffect, useState } from 'react';
import style from '../Home/Home.module.css';
import type { User } from '../../types/index';
import Modal from '../../components/Modal';
import Pagination from '../../components/Pagination';
import Card from '../../components/Card';
import Loader from '../../components/Loader';

const ServerPagination = () => {
  const USER_PER_PAGE = 12;
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const skip = startIndex * USER_PER_PAGE;
      const res = await fetch(
        `https://dummyjson.com/users?limit=100&skip=${skip}`
      );
      const json = await res.json();
      setData(json.users.slice(0, Math.min(USER_PER_PAGE, 100 - skip)));
      setSelectedUserId(null);
      setLoading(false);
    };
    fetchData();
  }, [startIndex]);

  const handleViewProfile = (id: number | null) => {
    setSelectedUserId((prev) => (prev == id ? null : id));
  };

  const selectedUser = data.find((user) => user.id === selectedUserId);

  const allUsers = Array.from({ length: 100 }, (_, i) => ({ id: i }) as User);

  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        {loading ? (
          <Loader />
        ) : (
          data.map((item) => (
            <Fragment key={item.id}>
              <Card user={item} handleViewProfile={handleViewProfile} />
            </Fragment>
          ))
        )}
      </div>
      {selectedUser && (
        <Modal
          user={selectedUser}
          handleModalClose={() => setSelectedUserId(null)}
        />
      )}
      <footer className={style.paginationFooter}>
        <Pagination
          startIndex={startIndex}
          setStartIndex={setStartIndex}
          data={allUsers}
          userPerPage={USER_PER_PAGE}
        />
      </footer>
    </div>
  );
};

export default ServerPagination;
